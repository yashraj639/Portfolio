import type { Metadata } from "next";
import { Funnel_Display, Manrope } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "next-themes";


const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-funnel",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Yashraj Yadav",
  description:
    "Text-first developer portfolio for Yashraj Yadav, focused on systems, correctness, and backend-heavy product work.",
  icons: {
    icon: "/icon0.svg",
    apple: "/icon1.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(manrope.variable, funnelDisplay.variable)}
    >
      <body className="min-h-screen font-(family-name:--font-manrope)">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
