import Image from "next/image";
import ScrollSections from "./ScrollSections";
import siteData from "../mocks/site.json";

type Stat = {
  label: string;
  value: string;
};

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
};

type SiteData = {
  stats: Stat[];
  projects: Project[];
  skills: string[];
};

const { stats, projects, skills } = siteData as SiteData;

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="text-lg font-semibold tracking-[0.2em] text-cyan-300">
            SK
          </a>
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#home" className="transition hover:text-white">Home</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/20"
          >
            Let’s talk
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <ScrollSections>
          <section id="home" className="relative py-14 md:py-20">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="fade-up">
                <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-cyan-200">
                  Full Stack Developer
                </span>
                <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Hi, I&apos;m <span className="text-cyan-300">Sai Kiran</span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  I&apos;m a <strong className="text-white">Senior Application Developer</strong> with <strong className="text-white">5+ years of experience</strong> building robust, user-centric digital products and high-performance frontend experiences.
                </p>

                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  I transform complex ideas into polished interfaces, scalable systems, and product experiences that feel effortless for users and reliable for businesses.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    View Projects
                  </a>
                  <a
                    href="#contact"
                    className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10"
                  >
                    Contact Me
                  </a>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-slate-950/20 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-slate-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="fade-up relative">
                <div className="absolute inset-6 -z-10 rounded-full bg-cyan-500/20 blur-3xl" />
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-4 shadow-[0_30px_80px_rgba(8,145,178,0.22)] ring-1 ring-cyan-400/20">
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/60">
                    <Image
                      src="/image.jpg"
                      alt="Sai Kiran portrait"
                      width={1100}
                      height={700}
                      priority
                      className="h-[500px] w-full object-cover object-center"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Profile</p>
                      <h2 className="mt-1 text-xl font-semibold text-white">Sai Kiran Guguloth</h2>
                    </div>
                    <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-200">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="py-20">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Projects</p>
                <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Selected work</h2>
              </div>
              <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-300">
                Product + Design
              </span>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="fade-up group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-3 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/8"
                >
                  <div
                    className="h-56 rounded-[1.2rem] bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="p-4">
                    <span className="inline-flex rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-fuchsia-200">
                      {project.category}
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-slate-900/80 px-2.5 py-1 text-[11px] text-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" className="py-20">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/5 via-slate-900 to-cyan-950/50 p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.25em] text-violet-300">Skills</p>
              <div className="mt-6 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <h2 className="text-3xl font-bold text-white md:text-4xl">Engineering thoughtful experiences</h2>
                  <p className="mt-4 max-w-lg text-base leading-8 text-slate-300">
                    I blend product thinking, interface design, and engineering to build digital experiences that are usable, memorable, and ready for scale.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/40 p-4">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Core Stack</h3>
                      <ul className="mt-3 space-y-2 text-sm text-slate-200">
                        <li>• MERN Stack: MongoDB, Express.js, React.js, Node.js</li>
                        <li>• JavaScript, TypeScript, Python</li>
                        <li>• React.js, Next.js, Redux, RTK Query</li>
                        <li>• HTML5, CSS3, Material UI, Bootstrap</li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/40 p-4">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Backend & APIs</h3>
                      <ul className="mt-3 space-y-2 text-sm text-slate-200">
                        <li>• Node.js, Express.js, REST APIs, GraphQL</li>
                        <li>• API Integration, JSON, Microservices patterns</li>
                        <li>• AWS, Azure, GitHub Actions, CI/CD</li>
                        <li>• S3, EC2, Lambda, IAM, CloudWatch</li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/40 p-4">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Architecture & Quality</h3>
                      <ul className="mt-3 space-y-2 text-sm text-slate-200">
                        <li>• Component-based architecture, reusable UI systems</li>
                        <li>• State management, PWA, performance optimization</li>
                        <li>• Jest, React Testing Library, SAST, Black Duck</li>
                        <li>• WCAG, WAI-ARIA, NVDA, JAWS, keyboard accessibility</li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/40 p-4">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">AI & Workflow</h3>
                      <ul className="mt-3 space-y-2 text-sm text-slate-200">
                        <li>• OpenAI APIs, AI-powered feature integration</li>
                        <li>• Git, GitHub, GitHub Actions</li>
                        <li>• Figma, VS Code, Postman, Eclipse</li>
                        <li>• Agile (Scrum), product-focused delivery</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="py-20">
            <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-fuchsia-500/10 p-8 text-center md:p-12">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Contact</p>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">Let&apos;s build something remarkable.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                I&apos;m open to product design, frontend development, and portfolio collaborations. If you want a modern digital presence, let&apos;s connect.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:saikiran.guguloth18@gmail.com"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  Email Me
                </a>
                <a
                  href="https://github.com/saikiranguguloth18-code"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-slate-950/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </section>
        </ScrollSections>
      </main>
    </div>
  );
}
