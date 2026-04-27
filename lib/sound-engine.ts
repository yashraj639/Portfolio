let audioContext: AudioContext | null = null;
const bufferCache = new Map<string, AudioBuffer>();

export function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
}

export async function decodeAudioData(dataUriOrUrl: string): Promise<AudioBuffer> {
  const cached = bufferCache.get(dataUriOrUrl);
  if (cached) return cached;

  const ctx = getAudioContext();
  let arrayBuffer: ArrayBuffer;

  if (dataUriOrUrl.startsWith("data:")) {
    const base64 = dataUriOrUrl.split(",")[1];
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    arrayBuffer = bytes.buffer;
  } else {
    try {
      const response = await fetch(dataUriOrUrl);
      if (!response.ok) {
        console.error(`Failed to fetch audio data from ${dataUriOrUrl}`);
        return null as any; // Return null if fetch fails
      }
      arrayBuffer = await response.arrayBuffer();
    } catch (err) {
      console.error(`Error fetching audio: ${dataUriOrUrl}`, err);
      return null as any;
    }
  }

  try {
    const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
    bufferCache.set(dataUriOrUrl, audioBuffer);
    return audioBuffer;
  } catch (err) {
    console.error(`Error decoding audio: ${dataUriOrUrl}`, err);
    return null as any;
  }
}

export interface PlaySoundOptions {
  volume?: number;
  playbackRate?: number;
  onEnd?: () => void;
}

export interface SoundPlayback {
  stop: () => void;
}

export async function playSound(
  dataUri: string,
  options: PlaySoundOptions = {}
): Promise<SoundPlayback> {
  const { volume = 1, playbackRate = 1, onEnd } = options;
  const ctx = getAudioContext();
  if (ctx.state === "suspended") {
    await ctx.resume();
  }

  const buffer = await decodeAudioData(dataUri);
  const source = ctx.createBufferSource();
  const gain = ctx.createGain();

  source.buffer = buffer;
  source.playbackRate.value = playbackRate;
  gain.gain.value = volume;

  source.connect(gain);
  gain.connect(ctx.destination);

  source.onended = () => {
    onEnd?.();
  };

  source.start(0);

  return {
    stop: () => {
      try {
        source.stop();
      } catch {
        // No-op if already stopped.
      }
    },
  };
}
