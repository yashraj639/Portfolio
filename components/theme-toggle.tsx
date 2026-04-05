"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useSound } from "@/hooks/use-sound";
import { Moon, Sun } from "lucide-react";

import { beltHandle1Sound } from "@/lib/belt-handle-1";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [play] = useSound(beltHandle1Sound);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function toggleTheme(e: React.MouseEvent<HTMLButtonElement>) {
    const x = e.clientX;
    const y = e.clientY;

    document.documentElement.style.setProperty("--x", `${x}px`);
    document.documentElement.style.setProperty("--y", `${y}px`);

    const switchTheme = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    };

    play();

    if (!document.startViewTransition) {
      switchTheme();
      return;
    }

    document.startViewTransition(switchTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="theme-button flex h-9 w-9 items-center justify-center rounded-md border transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
