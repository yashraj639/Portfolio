"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useSound } from "@/hooks/use-sound";
import { Moon, Sun } from "lucide-react";

import { beltHandle1Sound } from "@/lib/belt-handle-1";
import { AnimatePresence, motion } from "motion/react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [play] = useSound(beltHandle1Sound);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = (e: React.MouseEvent) => {
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
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-button flex h-9 w-9 items-center justify-center rounded-md border transition-colors relative overflow-hidden group"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: 12, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -12, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          {theme === "light" ? (
            <Moon size={16} className="fill-current" />
          ) : (
            <Sun size={16} className="fill-current" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
