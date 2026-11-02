import { useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin,
  Mail, Menu, X, Code2, Sparkles, GraduationCap, MoveUpRight
} from 'lucide-react'

const profile = {
  name: 'Salil Kumar Polai',
  role: 'B.Tech Student Developer',
  location: 'India',
  email: 'salilkumarpolai9@gmail.com',
  github: 'https://github.com/salilkumarrr/PYTHONAUG026',
  linkedin: 'https://www.linkedin.com/in/salil-kumar-polai-692b54335/',
  intro: "I'm a B.Tech student exploring web development and building practical projects as I learn. I enjoy turning ideas into simple, useful digital experiences.",
}

const skills = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { title: 'Styling', items: ['Tailwind CSS', 'Responsive Design'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'VS Code'] },
]

const projects = [
  {
    number: '01',
    name: 'Creative Gallery Portfolio Website',
    description: '',
    description: 'A visually engaging gallery website showcasing featured creative works and design-related news through a clean, modern layout.',
    stack: ['HTML', 'CSS'],
    github: 'https://github.com/salilkumarrr/PYTHONAUG026',
    demo: 'https://gentle-tarsier-636089.netlify.app/',
    kind: 'Creative Gallery',
  },
  {
    number: '02',
    name: 'UsabilityHub Landing Page Clone',
    description: 'Built a responsive landing page inspired by UsabilityHub using HTML and Tailwind CSS. Features a clean layout, modern navigation, hero section, and call-to-action elements. Focused on responsive design and a user-friendly interface.',
    stack: ['HTML', 'Tailwind CSS'],
    github: 'https://github.com/salilkumarrr/PYTHONAUG026',
    demo: 'https://chic-wisp-245a1c.netlify.app/',
    kind: 'Landing Page Clone',
  },
  {
    number: '03',
    name: 'Apple Store E-commerce UI',
    description: 'Created an Apple-inspired e-commerce website featuring a modern landing page, product showcase, login and registration options, and a clean user interface. Focused on layout design and user experience.',
    stack: ['HTML', 'CSS', 'Javascript'],
    github: 'https://github.com/salilkumarrr/PYTHONAUG026',
    demo: 'https://scintillating-biscuit-9dc79b.netlify.app/',
    kind: 'kind: "E-commerce UI",',
  },
]

function SectionHeading({ eyebrow, title, note }) {
  return (
    <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.055em] text-ink sm:text-4xl">{title}</h2>
      </div>
      {note && <p className="max-w-xs text-sm leading-6 text-muted">{note}</p>}
    </div>
  )
}

function ProjectArtwork({ kind }) {
  if (kind === 'tasks') {
    return (
      <div className="artwork artwork-tasks">
        <div className="mock-window">
          <div className="mock-top"><span /><span /><span /></div>
          <p className="mock-label">TODAY'S FOCUS</p>
          <div className="mock-task checked"> <i>✓</i><span>Read documentation</span></div>
          <div className="mock-task"><i /><span>Build a new component</span></div>
          <div className="mock-task"><i /><span>Push changes to GitHub</span></div>
        </div>
      </div>
    )
  }
  if (kind === 'weather') {
    return (
      <div className="artwork artwork-weather">
        <div className="weather-card">
          <span className="weather-city">YOUR CITY · TODAY</span>
          <div className="weather-sun" />
          <div className="weather-temp">28°</div>
          <div className="weather-desc">A clear, calm day</div>
          <div className="weather-bottom"><span>Humidity 48%</span><span>Wind 12 km/h</span></div>
        </div>
      </div>
    )
  }
  return (
    <div className="artwork artwork-portfolio">
      <div className="portfolio-sheet">
        <div className="sheet-nav"><b>SKP.</b><span>ABOUT&nbsp;&nbsp;&nbsp; WORK&nbsp;&nbsp;&nbsp; CONTACT</span></div>
        <div className="sheet-kicker">STUDENT / DEVELOPER</div>
        <div className="sheet-title">Curious mind.<br /><em>Building things.</em></div>
        <div className="sheet-footer"><span>SELECTED WORK — 2026</span><span>↗</span></div>
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-xl">
        <nav className="site-container flex h-[72px] items-center justify-between" aria-label="Main navigation">
          <a href="#home" className="brand-mark" aria-label="Back to home">SKP<span>.</span></a>
          <div className="hidden items-center gap-8 md:flex">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#skills">Skills</a>
            <a className="nav-link" href="#contact">Contact</a>
          </div>
          <a href="#contact" className="hidden rounded-full border border-ink px-5 py-2.5 text-sm font-medium transition hover:bg-ink hover:text-white md:inline-flex">
            Let’s talk <ArrowUpRight size={15} className="ml-2" />
          </a>
          <button className="rounded-lg p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-line px-6 py-4 md:hidden">
            {[['About', '#about'], ['Projects', '#projects'], ['Skills', '#skills'], ['Contact', '#contact']].map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu} className="block border-b border-line py-3 text-sm">{label}</a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section id="home" className="site-container hero-section">
          <div className="hero-copy">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-3 py-1.5 text-xs font-medium text-muted">
              <span className="availability-dot" /> OPEN TO LEARNING & OPPORTUNITIES
            </div>
            <p className="mt-9 text-sm font-medium text-muted">Hey there, I'm</p>
            <h1 className="hero-title">{profile.name.split(' ')[0]}<br /><span>{profile.name.split(' ').slice(1).join(' ') || 'Student Developer'}.</span></h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-700">
                Explore my work <ArrowDownRight size={16} className="ml-2" />
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-line bg-white px-5 py-3 text-sm font-medium transition hover:border-ink">
                Get in touch <ArrowUpRight size={16} className="ml-2" />
              </a>
               <a href="/resume.pdf" download="Salil-Kumar-Polai-Resume.pdf" className="resume-button inline-flex items-center justify-center gap-2 whitespace-nowrap">
             <span>Download Resume</span>
            <ArrowDownRight size={16} />
              </a>
             
              
            </div>
            <div className="mt-10 flex items-center gap-4 text-muted">
              <a className="social-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a className="social-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <button className="social-link" onClick={copyEmail} aria-label="Copy email"><Mail size={18} /></button>
              <span className="text-xs">{copied ? 'Email copied!' : `Based in ${profile.location}`}</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-card">
              <div className="visual-card-top"><span>MY CURRENT MODE</span><span className="tiny-square" /></div>
              <div className="visual-symbol"><Code2 size={62} strokeWidth={1.15} /></div>
              <p className="visual-card-title">Learn. Build.<br /><span>Repeat.</span></p>
              <div className="visual-card-bottom"><span><i /> CURIOUS BY DEFAULT</span><span>001 / 026</span></div>
            </div>
            <div className="floating-note note-top"><Sparkles size={15} /> Small steps, daily</div>
            <div className="floating-note note-bottom"><GraduationCap size={17} /><span>Currently learning<br /><b>React & UI design</b></span></div>
            <span className="visual-cross cross-one">+</span><span className="visual-cross cross-two">+</span>
          </div>
          <a href="#about" className="scroll-cue"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section id="about" className="section-wrap border-t border-line">
          <div className="site-container">
            <SectionHeading eyebrow="01 / A LITTLE ABOUT ME" title="Learning by making." note="I believe the best way to learn technology is to stay curious and keep building." />
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
              <div className="max-w-2xl">
                <p className="text-xl leading-8 tracking-[-0.025em] text-ink sm:text-2xl sm:leading-9">
                  I'm a student developer exploring the world of web development — one project, one bug, and one breakthrough at a time.
                </p>
                <p className="mt-5 text-sm leading-7 text-muted">
                  Right now, I'm building a strong foundation in the web, practicing clean code, and learning how to make interfaces that feel as good as they work. This portfolio is a snapshot of my progress, not the finish line.
                </p>
                <a href="#contact" className="text-link mt-6">Have a project in mind? <ArrowUpRight size={15} /></a>
              </div>
              <div className="about-facts">
                <div className="fact-row"><span>01</span><div><b>Currently studying</b><p>B.Tech / Engineering</p></div><ArrowUpRight size={16} /></div>
                <div className="fact-row"><span>02</span><div><b>Learning</b><p>Web development & programming</p></div><ArrowUpRight size={16} /></div>
                <div className="fact-row"><span>03</span><div><b>Outside the code</b><p>Curiosity, ideas & good design</p></div><ArrowUpRight size={16} /></div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section-wrap border-t border-line">
          <div className="site-container">
            <SectionHeading eyebrow="02 / SELECTED WORK" title="Things I've been building." note="Selected work. Update each card with your completed projects, real tech stacks, and working links." />
            <div className="grid gap-5 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.number} className="project-card group">
                  <ProjectArtwork kind={project.kind} />
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium tracking-widest text-muted">{project.number} / PROJECT</span>
                      <MoveUpRight size={17} className="text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight">{project.name}</h3>
                    <p className="mt-2 min-h-[68px] text-sm leading-6 text-muted">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((item) => <span key={item} className="tech-pill">{item}</span>)}
                    </div>
                    <div className="mt-6 flex gap-5 border-t border-line pt-4 text-sm font-medium">
                      <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-muted"><Github size={15} /> Source</a>
                      <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-muted">Live demo <ArrowUpRight size={14} /></a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-7 flex justify-center">
              <a className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium transition hover:border-ink" href={profile.github} target="_blank" rel="noreferrer">
                View GitHub project <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <section id="skills" className="section-wrap border-t border-line">
          <div className="site-container">
            <SectionHeading eyebrow="03 / MY TOOLKIT" title="Tools I'm learning." note="A growing toolkit — focused on understanding the fundamentals, not just collecting logos." />
            <div className="grid gap-4 md:grid-cols-3">
              {skills.map((group, index) => (
                <div key={group.title} className="skill-card">
                  <div className="flex items-center justify-between"><span className="text-xs tracking-widest text-muted">0{index + 1}</span><Code2 size={18} className="text-muted" /></div>
                  <h3 className="mt-8 text-lg font-semibold">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((skill) => <span className="skill-pill" key={skill}>{skill}</span>)}
                  </div>
                </div>
              ))}
            </div>
            <div className="learning-banner mt-5">
              <div><span className="eyebrow">ALWAYS IN PROGRESS</span><h3 className="mt-2 text-xl font-semibold">The next skill is always one project away.</h3></div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-wrap border-t border-line">
          <div className="site-container">
            <div className="contact-panel">
              <p className="eyebrow">04 / SAY HELLO</p>
              <h2 className="contact-title">Let's make<br /><span>something useful.</span></h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-muted">Open to learning opportunities, collaboration, feedback, and meeting people who enjoy making things for the web.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="inline-flex items-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"><Mail size={16} className="mr-2" /> Email me <ArrowUpRight size={15} className="ml-2" /></a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-line bg-white px-5 py-3 text-sm font-medium transition hover:border-ink"><Github size={16} className="mr-2" /> GitHub</a>
              </div>
              <div className="contact-decoration">hello</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="site-container flex flex-col gap-3 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. Made with curiosity.</p>
          <a href="#home" className="inline-flex items-center gap-2 font-medium text-ink">Back to top <ArrowUpRight size={13} /></a>
        </div>
      </footer>
    </div>
  )
}

export default App
