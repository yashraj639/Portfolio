import { ReactNode } from "react";

export function Pill({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <span
      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-sm leading-none align-middle transition-all duration-200"
      style={{
        border: "1px solid var(--line)",
        background: "transparent",
        color: "var(--muted)",
      }}
    >
      {icon}
      {children}
    </span>
  );
}
