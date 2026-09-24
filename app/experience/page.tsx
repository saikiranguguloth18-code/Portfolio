import Link from "next/link";
import navigationData from "../../mocks/navigation.json";
import experienceData from "../../mocks/experience.json";

type NavItem = {
  label: string;
  href: string;
};

type Experience = {
  role: string;
  company: string;
  period: string;
  details: string[];
};

const navigation: NavItem[] = navigationData as NavItem[];
const experience: Experience[] = experienceData as Experience[];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-lg font-semibold tracking-[0.2em] text-cyan-300">
            SK
          </Link>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={item.href === "/experience" ? "text-cyan-300 transition hover:text-cyan-200" : "transition hover:text-white"}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/#contact"
            className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/20"
          >
            Let&apos;s talk
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Experience</p>
          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">Professional Experience</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
            Product-minded engineering, thoughtful UI systems, and a focus on delivering reliable digital experiences.
          </p>
        </div>

        <div className="space-y-6">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/10 backdrop-blur-sm md:p-8"
            >
              <div className="flex flex-col gap-3 border-b border-white/10 pb-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">{item.company}</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">{item.role}</h2>
                </div>
                <span className="inline-flex w-fit rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-cyan-200">
                  {item.period}
                </span>
              </div>

              <ul className="mt-5 space-y-3 text-base leading-7 text-slate-300">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Back to Home
          </Link>
          <a
            href="/#contact"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>
      </main>
    </div>
  );
}
