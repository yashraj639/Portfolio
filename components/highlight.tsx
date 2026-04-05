"use client";

import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";
import { useInView } from "motion/react";

interface HighlightProps {
  children: React.ReactNode;
  type?: "underline" | "circle" | "box" | "strike-through" | "highlight";
  color?: string;
  strokeWidth?: number;
  padding?: number;
  once?: boolean;
}

export function Highlight({
  children,
  type = "underline",
  color = "#6b7280",
  strokeWidth = 2,
  padding = 4,
  once = true,
}: HighlightProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const annotationRef = useRef<ReturnType<typeof annotate> | null>(null);
  const isVisible = useInView(ref, { once, amount: 0.5 });

  useEffect(() => {
    if (!ref.current) return;

    if (isVisible && !annotationRef.current) {
      annotationRef.current = annotate(ref.current, {
        type,
        strokeWidth,
        color,
        padding,
        animate: true,
        animationDuration: 800,
      });
      annotationRef.current.show();
    }
  }, [isVisible, type, strokeWidth, color, padding]);

  return (
    <span ref={ref} className="inline relative" style={{ pointerEvents: "none" }}>
      {children}
    </span>
  );
}