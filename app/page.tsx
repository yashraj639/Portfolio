import { Navbar } from "@/components/navbar";
import { Typewriter } from "@/components/typewriter";
import { Highlight } from "@/components/highlight";
import Link from "next/link";
import Image from "next/image";
import {
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { Pill } from "@/components/pill";

const contactLinks = [
  {
    label: "Resume",
    href: "/Yashraj-Yadav-Resume.pdf",
    value: "Download PDF",
  },
  {
    label: "Email",
    href: "mailto:yashrajyadav4660@gmail.com",
    value: "yashrajyadav4660@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/yashraj639",
    value: "github.com/yashraj639",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yashrajyadav4660",
    value: "linkedin.com/in/yashrajyadav4660",
  },
];

const stackItems = [
  "TypeScript",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Gemini",
  "Chrome Extensions",
  "AI Systems",
];

const stackLine = `${stackItems.join(" / ")} / `;

export default function Home() {
  return (
    <div id="top" className="site-shell min-h-screen">
      <Navbar />
      <div className="px-6 py-16 pt-28 sm:px-8 sm:py-24 sm:pt-32">
        <div className="mx-auto max-w-[700px]">
          <section className="space-y-6">
            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 sm:flex sm:items-center sm:gap-8 md:gap-10">
              <div className="w-fit shrink-0 rounded-[1.1rem] border border-(--line) bg-(--surface) p-2 sm:rounded-[1.75rem] sm:p-2.5">
                <div className="overflow-hidden rounded-[1.25rem] border border-(--line) bg-(--surface-strong)">
                  <Image
                    src="/pfp.png"
                    alt="Yashraj Yadav"
                    width={180}
                    height={180}
                    priority
                    className="h-24 w-24 object-cover sm:h-32 sm:w-32 md:h-38 md:w-38"
                  />
                </div>
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-4 sm:gap-8">
                <div className="">
                  <h1 className="text-[1.75rem] leading-[0.95] font-medium tracking-tight text-(--foreground) sm:text-4xl md:text-5xl font-(family-name:--font-funnel)">
                    <span className=" sm:inline">
                      <Highlight
                        type="underline"
                        strokeWidth={1.5}
                        color="var(--muted)"
                        padding={4}
                      >
                        Yashraj Yadav
                      </Highlight>
                    </span>
                  </h1>
                </div>
                <div className="">
                  <span className="text-[0.74rem] leading-5 text-(--muted) font-mono sm:text-sm sm:leading-6">
                    <Typewriter
                      texts={[
                        "full-stack developer",
                        "breaks things (temporarily)",
                        "fixes them (usually)",
                      ]}
                    />
                  </span>
                </div>
              </div>
            </div>
          </section>

          <div className="my-12 divider" />

          <section
            id="about"
            className="space-y-5 scroll-mt-24"
            style={{ contentVisibility: "auto" }}
          >
            <p className="eyebrow">About</p>
            <p className="copy">
              I build stuff. Started with frontend, drifted into backend because
              I got tired of things breaking in production. Found out I actually
              enjoy solving the hard problems, the ones that only show up when
              people start using your app for real.
            </p>
            <p className="copy">
              Currently into AI-integrated products and building systems that
              don't fall apart when things go wrong. Mostly working with{" "}
              <Pill
                icon={<BiLogoTypescript className="text-(--muted) text-base" />}
              >
                TypeScript
              </Pill>
              ,{" "}
              <Pill icon={<SiNextdotjs className="text-(--muted) text-base" />}>
                Next.js
              </Pill>
              ,{" "}
              <Pill
                icon={<BiLogoNodejs className="text-(--muted) text-base" />}
              >
                Node.js
              </Pill>
              , and{" "}
              <Pill
                icon={<BiLogoPostgresql className="text-(--muted) text-base" />}
              >
                PostgreSQL
              </Pill>
            </p>
          </section>

          <div className="my-12 divider" />

          <section className="space-y-4">
            <p className="eyebrow">Work</p>
            <p className="copy">
              Projects are on a separate page so this one doesn't get too long.
              Built a banking ledger, a knowledge management app, some AI stuff,
              and a few things I'm still figuring out.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-(--foreground) transition-opacity hover:opacity-70"
            >
              <div className="flex flex-col gap-6">
                <p className="font-medium tracking-tight text-sm sm:text-xl font-(family-name:--font-funnel)">
                  <Highlight
                    type="underline"
                    strokeWidth={1.5}
                    color="var(--muted)"
                    padding={4}
                  >
                    View Projects
                  </Highlight>
                </p>
              </div>
            </Link>
          </section>

          <div className="my-12 divider" />

          <section id="contact" className="space-y-4 scroll-mt-24">
            <p className="eyebrow">Contact</p>
            <div className="space-y-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  download={link.label === "Resume" ? true : undefined}
                  className="group block w-fit text-base leading-7 text-(--foreground) transition-colors hover:opacity-70"
                >
                  <span className="mr-3 font-mono text-xs uppercase tracking-[0.22em] text-(--muted) transition-colors group-hover:text-(--muted)">
                    {link.label}
                  </span>
                  <span>{link.value}</span>
                </a>
              ))}
            </div>
          </section>

          <div className="line-border mt-16 space-y-2 border-t pt-6">
            <p className="text-sm text-(--muted)">
              Based in India. Open to work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
