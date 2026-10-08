import { useState } from 'react'
import logo from './assets/icon.svg'
import hada from './assets/hada.png'
import heavlink from './assets/heavlink.png'
import heavage from './assets/heavage.png'
import me from './assets/me.png'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const services = [
  ['Frontend Development', 'Accessible, responsive interfaces built with React, JavaScript', ['React', 'Css', 'JavaScript', 'Next.js']],
  ['Full-stack Applications', 'From data models to polished UI, I build reliable products that are ready to ship.', ['SpringBoot', 'APIs', 'PostgreSQL', 'Testing', 'Laravel', 'MySQL']],
  ['Design Systems', 'Reusable components and clear foundations that help teams move faster together.', ['Storybook', 'Tokens', 'Documentation']],
  ['Technical Direction', 'Practical product thinking, architecture guidance, and hands-on collaboration.', ['Discovery', 'Architecture', 'Mentoring']],
]

const projects = [
  ['Heavlink', 'SaaS platform · 2025', 'bg-brand',heavlink],
  ['Heavage', 'logistic · 2026', 'bg-ink text-white', heavage],
  ['HadaInvestent', 'Web application · 2025', 'bg-sky/30', hada],
  ['2Bros','Inventory management · 2026', 'bg-ink text-white'],
  ['Graphic Design', 'Branding & visual identity · 2024', 'bg-brand'],
  ['Graphic Design', 'Branding & visual identity · 2024', 'bg-brand'],
]

const experience = [
  ['Junior Software Developer', 'Heavsof Limited · Dar es Salaam, Tanzania', 'Aug 2025 — Present', 'Building and maintaining software solutions, contributing to frontend and backend development, and working with a team to deliver reliable digital products.'],
  ['Software Developer', 'DOPS Technology · Dar es Salaam, Tanzania', 'Jan 2025 — Sep 2025', 'Developed practical software solutions, worked with APIs and databases, and contributed to responsive web applications.'],
  ['Freelance Graphic Designer & Software Developer', 'Independent · Dar es Salaam, Tanzania', 'Ongoing', 'Delivered graphic design and software development work for Bookiper, ADM, Baobab Hospital, and Domexa, combining clear visual communication with useful digital experiences.'],
]

const Arrow = () => <span aria-hidden="true" className="text-lg leading-none text-brand">↗</span>
const Kicker = ({ children, className = '' }) => <p className={`font-mono text-[10px] uppercase tracking-wide text-neutral-500 ${className}`}><span className="mr-2 inline-block w-5 align-middle border-t border-brand" />{children}</p>

function App() {
  const [openService, setOpenService] = useState(0)

  return (
    <div className="mx-auto max-w-auto overflow-hidden bg-paper font-sans">
      <header className="flex h-[84px] items-center justify-between border-b border-neutral-200 bg-white px-[8%]">
        <a className="flex items-center gap-2 text-xl font-bold tracking-[-.08em]" href="#home" aria-label="Nelson Sauka home">
          <img src={logo} alt="Nelson Sauka" className="size-8" />
          Nelson.
        </a>
        <nav className="hidden gap-7 md:flex" aria-label="Primary navigation">
          {['Home', 'Services', 'Experience', 'About', 'Projects', 'Contact'].map((item) => <a className="font-mono text-[11px] text-neutral-700 transition-colors hover:text-brand" href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}
        </nav>
        <a className="rounded-full bg-ink px-5 py-3 text-[10px] font-semibold text-white transition-transform hover:-translate-y-0.5" href="mailto:nelsonsauka821@gmail.com">Contact me <Arrow /></a>
      </header>

      <main id="home">
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-soft px-[6%] pb-16 pt-20 text-center max-md:px-5 max-md:pb-12 max-md:pt-12">
          {/* Header Intro */}
          <div className="mx-auto max-w-2xl">
            <Kicker>Hello there!</Kicker>
            <h1 className="my-5 text-[clamp(3rem,5.5vw,5.25rem)] font-bold leading-[0.95] tracking-tight max-md:mx-auto max-md:max-w-[340px]">
              I&apos;m <span className="text-brand">Nelson Sauka</span>
              <sup className="ml-1 text-lg text-brand">✦</sup>
            </h1>
            <p className="text-sm font-medium text-neutral-500 sm:text-base">
              Product-minded software developer based in Dar es Salaam, Tanzania
            </p>
          </div>

          {/* Main 3-Column Hero Content */}
          <div className="mx-auto mt-10 grid min-h-[380px] max-w-[1100px] items-center gap-8 md:grid-cols-[1fr_auto_1fr] max-md:mt-8 max-md:gap-10">

            {/* Left Column: Quote & Experience */}
            <div className="flex max-w-[250px] flex-col items-start text-left text-sm leading-relaxed text-neutral-600 max-md:order-2 max-md:mx-auto max-md:items-center max-md:text-center">
              <span className="font-serif text-5xl leading-none text-brand">“</span>
              <p className="-mt-3 font-medium">
                Turning complex problems into simple, useful experiences people enjoy using.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3  bg-white/80 p-3  backdrop-blur-sm max-md:mt-6">
                <div className="flex -space-x-2">
                  <i className="size-16 rounded-full border-2 border-white bg-neutral-400 shadow-sm" ></i>
                  <i className="size-16 rounded-full border-2 border-white bg-[#d19b7c] shadow-sm" />
                  <i className="size-16 rounded-full border-2 border-white bg-neutral-600 shadow-sm" />
                </div>
                <div className="text-left">
                  <strong className="block text-xs font-bold text-brand">2+ years</strong>
                  <small className="block text-[10px] text-neutral-400">building for the web</small>
                </div>
              </div>
            </div>

            {/* Center Column: Portrait Frame */}
            <div className="relative flex h-[340px] sm:h-[420px] md:h-[480px] lg:h-[540px] w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px] items-end justify-center overflow-visible max-md:order-1 max-md:mx-auto">
              {/* Ambient Background Glow */}
              <div className="absolute bottom-2 md:bottom-4 size-[250px] sm:size-[300px] md:size-[340px] lg:size-[380px] rounded-full bg-gradient-to-br from-brand via-blue to-cyan opacity-35 blur-2xl transition-all duration-300" />

              {/* Main Gradient Circle */}
              <div className="absolute bottom-2 md:bottom-4 size-[250px] sm:size-[300px] md:size-[340px] lg:size-[380px] rounded-full bg-gradient-to-br from-brand via-blue to-cyan shadow-xl transition-all duration-300" />

              {/* Hero Image */}
              <div className="relative z-10 flex h-full w-full items-end justify-center overflow-visible translate-y-6 sm:translate-y-8 md:translate-y-10">
                <img
                  src={me}
                  alt="Nelson Sauka"
                  className="block h-full max-h-[360px] sm:max-h-[440px] md:max-h-[500px] lg:max-h-[560px] w-auto object-contain object-bottom drop-shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Right Column: Tech Stack & Socials */}
            <div className="flex max-w-[240px] flex-col items-end gap-3 max-md:order-3 max-md:mx-auto max-md:items-center">
              <div className="flex flex-wrap justify-end gap-2 max-md:justify-center">
                {['React', 'SpringBoot', 'Laravel', 'Git', 'Graphics', 'Product thinking'].map((tag, i) => (
                  <span
                    key={tag}
                    className={`rounded-xl px-3.5 py-2 text-[11px] font-medium transition-all duration-200 hover:scale-105 ${i % 2
                        ? 'bg-ink text-white shadow-md'
                        : 'bg-white text-neutral-700 shadow-sm ring-1 ring-neutral-200/80'
                      }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-2">
                <a
                  className="grid size-9 place-items-center rounded-full bg-ink text-white transition-all hover:bg-brand hover:scale-110 shadow-sm"
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub size={15} aria-hidden="true" />
                </a>
                <a
                  className="grid size-9 place-items-center rounded-full bg-ink text-white transition-all hover:bg-brand hover:scale-110 shadow-sm"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={15} aria-hidden="true" />
                </a>
              </div>
            </div>

          </div>

          {/* Primary CTA Buttons */}
          <div className="mt-10 flex justify-center gap-3 max-md:mt-8">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-xs font-semibold text-white transition-all hover:bg-brand hover:shadow-lg hover:-translate-y-0.5"
              href="#projects"
            >
              View projects <Arrow />
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white px-6 py-3.5 text-xs font-semibold text-neutral-800 transition-all hover:border-neutral-400 hover:bg-neutral-50 hover:shadow-sm"
              href="mailto:nelsonsauka821@gmail.com"
            >
              Hire me <Arrow />
            </a>
          </div>
        </section>

        <div className="flex justify-around gap-4 overflow-hidden bg-ink px-6 py-5 text-sm font-semibold whitespace-nowrap text-white"><span>Frontend development</span><b className="text-sky">✦</b><span>Full-stack applications</span><b className="text-sky">✦</b><span>Design systems</span><b className="text-sky">✦</b><span>Technical direction</span></div>

        <section className="px-[12%] py-28" id="services">
          <div className="mb-10 flex items-end justify-between gap-10"><div><Kicker>What I do</Kicker><h2 className="mt-4 text-[clamp(2.4rem,4vw,3.75rem)] font-semibold leading-none tracking-[-.08em]">Services <span className="text-brand">I provide</span><sup className="text-brand">✦</sup></h2></div><p className="max-w-xs text-xs leading-relaxed text-neutral-500">I help teams turn ambitious ideas into fast, friendly, and thoughtful digital products.</p></div>
          <div className="grid gap-2">
            {services.map(([title, detail, tools], index) => { const open = openService === index; return <div className={`overflow-hidden rounded-lg ${open ? 'bg-ink text-white' : 'bg-neutral-100'}`} key={title}><button className="grid w-full grid-cols-[65px_1fr_35px] items-center gap-3 px-6 py-5 text-left" onClick={() => setOpenService(open ? -1 : index)} aria-expanded={open}><span className="font-mono text-[11px]">0{index + 1}.</span><strong className="text-sm">{title}</strong><span className={`ml-auto grid size-6 place-items-center rounded-full text-lg ${open ? 'bg-brand text-white' : 'bg-white text-ink'}`}>{open ? '×' : '↗'}</span></button>{open && <div className="flex justify-between gap-8 px-6 pb-6 pl-[104px]"><p className="max-w-xs text-xs leading-relaxed text-neutral-400">{detail}</p><div className="flex max-w-xs flex-wrap content-start gap-2">{tools.map((tool) => <span className="rounded-xl border border-neutral-700 px-2 py-1 text-[9px] text-neutral-300" key={tool}>{tool}</span>)}</div></div>}</div> })}
          </div>
        </section>

        <section className="bg-soft px-[12%] py-28" id="experience">
          <div className="mb-10 flex items-end justify-between gap-10">
            <div>
              <Kicker>My journey</Kicker>
              <h2 className="mt-4 text-[clamp(2.4rem,4vw,3.75rem)] font-semibold leading-none tracking-[-.08em]">Experience <span className="text-brand">so far</span></h2>
            </div>
            <p className="max-w-xs text-xs leading-relaxed text-neutral-500">Two years of learning, building, and helping turn ideas into useful digital products.</p>
          </div>
          <div className="border-t border-slate-200">
            {experience.map(([role, company, date, detail], index) => (
              <article className="grid gap-4 border-b border-slate-200 py-7 md:grid-cols-[1fr_1.5fr_auto] md:items-start md:gap-10" key={role}>
                <div><span className="font-mono text-[10px] text-brand">0{index + 1}</span><h3 className="mt-3 text-xl font-semibold tracking-tight">{role}</h3></div>
                <div><p className="font-mono text-[10px] uppercase tracking-wide text-neutral-500">{company}</p><p className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-600">{detail}</p></div>
                <time className="font-mono text-[10px] text-neutral-500 md:text-right">{date}</time>
              </article>
            ))}
          </div>
        </section>

       <section className="bg-white px-[12%] py-28" id="projects">
          {/* Section Header */}
          <div className="mb-10 flex items-end justify-between">
            <div>
              <Kicker>Selected work</Kicker>
              <h2 className="mt-4 text-[clamp(2.4rem,4vw,3.75rem)] font-semibold leading-none tracking-[-.08em]">
                Recent <span className="text-brand">projects</span>
              </h2>
            </div>
            <a className="font-mono text-[10px] hover:text-brand" href="#contact">
              See all work <Arrow />
            </a>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-3 md:grid-cols-3">
            {projects.map(([name, type, color, imageSrc]) => (
              <a
                key={name}
                href="#contact"
                className={`group relative flex min-h-[220px] flex-col overflow-hidden p-5 transition-transform hover:-translate-y-1 ${color}`}
              >
                {/* Background Screenshot (Subtle Reveal) */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={imageSrc}
                    alt={`${name} project preview`}
                    className="h-full w-full object-cover object-top opacity-5 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>

                {/* Top Tag & Project Name (Kept original styling) */}
                <div className="relative z-10">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-black">
                    {type}
                  </span>
                  <strong className="block text-4xl font-semibold tracking-[-.08em] text-black">
                    {name}
                  </strong>
                </div>

                {/* Center Icon (Nicer Design update) */}
                <div className="relative z-10 flex-1 flex items-center justify-center">
                  <span className="grid size-10 place-items-center rounded-full bg-black/5 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                    <Arrow />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-10 px-[12%] py-28 md:grid-cols-[.55fr_1fr]" id="about"><div><Kicker>A little about me</Kicker></div><div><h2 className="max-w-2xl text-[clamp(2.4rem,5vw,4.1rem)] font-semibold leading-[.98] tracking-[-.08em]">I build things with <span className="text-brand">care</span>, curiosity, and a bias toward action.</h2><p className="my-8 max-w-xl text-sm leading-relaxed text-neutral-500">I&apos;m a developer who likes the space between a rough idea and a great product. I care about the details users feel, the systems teams rely on, and making technology a little more human.</p><a className="font-mono text-[10px] hover:text-brand" href="mailto:nelsonsauka821@gmail.com">Let&apos;s work together <Arrow /></a></div></section>
        <section className="bg-gradient-to-br text-white from-brand via-blue to-cyan px-[10%] py-32 text-center text-white" id="contact"><Kicker className="text-white">Have a project in mind?</Kicker><h2 className="my-12 text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-[.9] tracking-[-.09em]">Let&apos;s make<br /><span className="text-white">something great.</span></h2><div className="flex flex-col items-center gap-4 font-mono text-xs"><a className="border-b border-white pb-2" href="mailto:nelsonsauka821@gmail.com">nelsonsauka821@gmail.com <span className="text-sky"><Arrow /></span></a><a className="border-b border-white pb-2" href="tel:+255689254189">+255 689 254 189 <span className="text-sky"><Arrow /></span></a></div></section>
      </main>
      <footer className="flex flex-wrap justify-between gap-4 bg-white px-[8%] py-6 font-mono text-[10px] text-neutral-500"><span>© 2026 Nelson Sauka</span><span>Built with React · Dar es Salaam, Tanzania</span><a href="#home">Back to top ↑</a></footer>
    </div>
  )
}

export default App
