import Image from "next/image";
import siteData from "../mocks/site.json";

const { stats, projects, skills } = siteData as any;

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
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

      <main className="mx-auto max-w-6xl px-6 pb-20 pt-10 md:pt-16">
        <section id="home" className="grid items-center gap-12 py-8 md:grid-cols-[0.9fr_1.1fr] md:py-16">
          <div className="fade-up">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-extrabold text-white md:text-4xl">Hi, I'm Sai Kiran 👋</h1>
              <p className="mt-4 text-lg text-slate-300">
                I'm a <strong>Senior Application Developer</strong> with <strong>5+ years of experience</strong> in software development, specializing in building scalable, user-focused web applications and modern frontend solutions.
              </p>

              <p className="mt-4 text-base text-slate-300">
                My core expertise includes <strong>React.js, Next.js, TypeScript, JavaScript, Redux, Node.js, and D3.js</strong>, with experience integrating APIs, enterprise systems, and cloud-based services. I enjoy transforming complex requirements and data into <strong>clean, interactive, and high-performance user experiences</strong>.
              </p>

              <p className="mt-4 text-base text-slate-300">
                I also work with <strong>Generative AI, RAG, LLMs, and OpenAI APIs</strong>, exploring practical ways to integrate AI-powered capabilities into modern applications.
              </p>

              <h3 className="mt-6 text-lg font-semibold text-white">What I Do</h3>
              <ul className="mt-3 list-inside list-disc space-y-2 text-slate-300">
                <li>🚀 Build scalable applications using <strong>React.js & Next.js</strong></li>
                <li>📊 Create interactive data visualizations using <strong>D3.js</strong></li>
                <li>🤖 Develop <strong>Generative AI and RAG-based solutions</strong></li>
                <li>🔗 Integrate REST/GraphQL APIs and enterprise systems</li>
                <li>⚡ Improve application performance and user experience</li>
                <li>🧩 Build reusable and maintainable UI components</li>
                <li>☁️ Work with cloud technologies and modern development workflows</li>
              </ul>

              <h3 className="mt-6 text-lg font-semibold text-white">My Approach</h3>
              <p className="mt-3 text-slate-300">
                I believe good software is more than just writing code — it should be <strong>scalable, maintainable, performant, accessible, and easy for users to understand</strong>. This portfolio showcases my projects, technical experiments, data visualizations, and solutions that demonstrate how I approach real-world engineering challenges.
              </p>
            </div>
          </div>

          <div className="relative fade-up delay-150">
            <div className="absolute inset-6 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-4 shadow-2xl shadow-cyan-950/40">
              <div className="relative w-full">
                <Image
                  src="/image.jpg"
                  alt="Sai Kiran portrait"
                  width={1100}
                  height={700}
                  priority
                  className="w-full rounded-[1.5rem] object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Profile</p>
                  <h2 className="mt-1 text-xl font-semibold text-white">Sai Kiran</h2>
                </div>
                <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-200">
                  Available
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-20 scroll-mt-24">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Projects</p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Selected work</h2>
            </div>
            <span className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 md:inline-flex">
              Creative + technical
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-3 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/8"
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

        <section id="skills" className="mt-20 scroll-mt-24 rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/5 via-slate-900 to-cyan-950/50 p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.25em] text-violet-300">Skills</p>
          <div className="mt-6 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">Designing thoughtful interfaces</h2>
              <p className="mt-4 max-w-lg text-base leading-8 text-slate-300">
                I enjoy connecting product thinking with visual design so each screen feels intentional, easy to use, and memorable.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mt-20 scroll-mt-24">
          <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-fuchsia-500/10 p-8 text-center md:p-12">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Contact</p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">Let’s build something remarkable.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              I’m open to product design, frontend development, and portfolio collaborations. If you want a modern digital presence, let’s connect.
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
      </main>
    </div>
  );
}
