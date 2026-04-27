"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "motion/react";
import { ThemeToggle } from "@/components/theme-toggle";
import { successChime } from "@/hooks/use-sound";

const navLinks = [
  { label: "home", href: "/" },
  { label: "projects", href: "/projects" },
  { label: "contact", href: "mailto:yashrajyadav4660@gmail.com" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <motion.nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-center px-4 py-4">
      <div className="nav-shell flex w-full max-w-[700px] items-center justify-between rounded-none border-b px-0 py-0 sm:rounded-none sm:border-x-0 sm:border-t-0">
        <Link
          href="/"
          className="px-2 py-3 font-(family-name:--font-funnel) text-sm font-medium tracking-tight text-(--foreground)"
        >
          YY
        </Link>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 sm:flex">
            {navLinks.map((link) => {
              const isActive =
                link.href.startsWith("/") && pathname === link.href;

              if (link.href === "/projects") {
                return (
                  <button
                    key={link.href}
                    onClick={() => {
                      successChime();
                      router.push(link.href);
                    }}
                    className={`rounded-md px-3 py-2 text-[13px] transition-colors ${
                      isActive
                        ? "text-(--foreground)"
                        : "muted-text hover:text-(--foreground)"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              }

              if (link.href.startsWith("/")) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => successChime()}
                    className={`rounded-md px-3 py-2 text-[13px] transition-colors ${
                      isActive
                        ? "text-(--foreground)"
                        : "muted-text hover:text-(--foreground)"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => successChime()}
                  className="muted-text rounded-md px-3 py-2 text-[13px] transition-colors hover:text-(--foreground)"
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
