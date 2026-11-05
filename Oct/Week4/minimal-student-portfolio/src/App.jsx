import { useEffect, useState, useRef } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code2,
  Palette,
  GraduationCap,
  MoveUpRight,
  Terminal,
  Globe,
  Zap
} from 'lucide-react'

import './App.css'

const profile = {
  name: 'Salil Kumar Polai',
  role: 'B.Tech Student Developer',
  location: 'India',
  email: 'salilkumarpolai9@gmail.com',
  github: 'https://github.com/salilkumarrr/PYTHONAUG026',
  linkedin: 'https://www.linkedin.com/in/salil-kumar-polai-692b54335/',
  intro: "I'm a B.Tech student exploring web development and building practical projects as I learn. I enjoy turning ideas into simple, useful digital experiences."
}

const skills = [
  {
    title: 'Frontend Development',
    icon: Code2,
    items: ['HTML', 'CSS', 'JavaScript', 'React']
  },
  {
    title: 'Styling & Design',
    icon: Palette,
    items: ['Tailwind CSS', 'Responsive Design', 'UI Design']
  },
  {
    title: 'Development Tools',
    icon: Terminal,
    items: ['Git', 'GitHub', 'VS Code']
  }
]

const projects = [
  {
    number: '01',
    name: 'Creative Gallery Portfolio Website',
    description: 'A visually engaging gallery website showcasing featured creative works and design-related news through a clean, modern layout.',
    stack: ['HTML', 'CSS'],
    github: 'https://github.com/salilkumarrr/PYTHONAUG026',
    demo: 'https://gentle-tarsier-636089.netlify.app/',
    image: '/project1.png',
    category: 'WEB DESIGN'
  },
  {
    number: '02',
    name: 'UsabilityHub Landing Page Clone',
    description: 'A responsive landing page inspired by UsabilityHub, featuring modern navigation, a hero section and user-friendly layouts.',
    stack: ['HTML', 'Tailwind CSS'],
    github: 'https://github.com/salilkumarrr/PYTHONAUG026',
    demo: 'https://chic-wisp-245a1c.netlify.app/',
    image: '/project2.png',
    category: 'FRONTEND'
  },
  {
    number: '03',
    name: 'Apple Store E-commerce UI',
    description: 'An Apple-inspired e-commerce interface with product showcases, login and registration options and a modern user experience.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/salilkumarrr/PYTHONAUG026',
    demo: 'https://scintillating-biscuit-9dc79b.netlify.app/',
    image: '/project3.png',
    category: 'E-COMMERCE'
  }
]

// Scroll reveal animation
function Reveal({ children, className = '' }) {
  const revealRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const target = revealRef.current

    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(target)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={revealRef}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

// Reusable section heading
function SectionHeading({ eyebrow, title, note }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>

      {note && <p className="section-note">{note}</p>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-active', menuOpen)

    return () => {
      document.body.classList.remove('menu-active')
    }
  }, [menuOpen])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)

      window.setTimeout(() => {
        setCopied(false)
      }, 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const closeMenu = () => setMenuOpen(false)

  const navItems = [
    ['About', '#about'],
    ['Projects', '#projects'],
    ['Skills', '#skills'],
    ['Contact', '#contact']
  ]

  return (
    <div className="portfolio">

      {/* BACKGROUND */}
      <div className="background-grid" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />
      <div className="ambient ambient-four" />

      <div className="top-line" />

      {/* HEADER */}
      <header className="header">
        <nav className="nav-container">

          <a href="#home" className="brand" onClick={closeMenu}>
            SKP<span>.</span>
          </a>

          <div className="nav-links">
            {navItems.map(([label, href]) => (
              <a href={href} key={label}>
                {label}
              </a>
            ))}
          </div>

          <a href="#contact" className="nav-cta">
            Let's talk <ArrowUpRight size={16} />
          </a>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </nav>

        <div className={`mobile-links ${menuOpen ? 'mobile-links-open' : ''}`}>

          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={closeMenu}
            >
              {label} <ArrowUpRight size={15} />
            </a>
          ))}

          <a href="#contact" onClick={closeMenu}>
            Let's work together <ArrowUpRight size={15} />
          </a>

        </div>
      </header>

      <main>

        {/* HERO SECTION */}
        <section id="home" className="hero container">

          <div className="hero-content">

            <div className="availability">
              <span className="status-dot" />
              OPEN TO LEARNING & OPPORTUNITIES
            </div>

            <p className="hero-greeting">Hello, I'm</p>

            <h1 className="hero-title">
              Salil
              <span>
                Kumar Polai<span className="title-dot">.</span>
              </span>
            </h1>

            <div className="hero-role">
              <span className="role-line" />
              <span>B.TECH STUDENT</span>
              <span className="role-separator">/</span>
              <span>DEVELOPER</span>
            </div>

            <p className="hero-description">
              {profile.intro}
            </p>

            <div className="hero-buttons">

              <a href="#projects" className="btn-primary">
                Explore my work <ArrowDownRight size={17} />
              </a>

              <a href="#contact" className="btn-secondary">
                Get in touch <ArrowUpRight size={17} />
              </a>

              <a href="/resume.pdf" download className="resume-link">
                Download Resume <ArrowDownRight size={16} />
              </a>

            </div>

            <div className="socials">

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>

              <button onClick={copyEmail} aria-label="Copy email">
                <Mail />
              </button>

              <span>
                {copied ? 'Email copied!' : `Based in ${profile.location}`}
              </span>

            </div>
          </div>

          {/* PROFILE VISUAL */}
          <div className="hero-visual">

            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="photo-glow" />

            <div className="photo-frame">

              <img
                src="/myphoto.png"
                alt="Salil Kumar Polai"
                className="profile-photo"
              />

              <div className="photo-shade" />

              <div className="photo-top-label">
                <span className="status-dot" />
                STUDENT DEVELOPER
              </div>

              <div className="photo-bottom-label">
                <span>CURIOUS BY DEFAULT</span>
                <span>001 / 026</span>
              </div>

            </div>

            {/* REPLACED SPARKLE WITH CODE ICON */}
            <div className="floating-note note-one">
              <Code2 size={19} />
              <span>Code. Create. Repeat.</span>
            </div>

            <div className="floating-note note-two">
              <GraduationCap size={20} />

              <div>
                <small>Currently learning</small>
                <strong>React & UI Design</strong>
              </div>
            </div>

            <div className="floating-note note-three">
              <Zap size={16} />
              <span>Building the future</span>
            </div>

            <span className="decor-cross cross-one">+</span>
            <span className="decor-cross cross-two">+</span>

          </div>

          <a href="#about" className="scroll-indicator">
            <span /> SCROLL TO EXPLORE
          </a>

          <div className="hero-index">
            PORTFOLIO / 2026
          </div>

        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section container">

          <Reveal>

            <SectionHeading
              eyebrow="01 / ABOUT ME"
              title="Learning by making."
              note="The best way to learn technology is to stay curious and keep building."
            />

            <div className="about-grid">

              <div className="about-copy">

                <p className="about-main">
                  I'm a student developer exploring the world of web development —
                  one project, one bug, and one breakthrough at a time.
                </p>

                <p className="about-description">
                  Right now, I'm building a strong foundation in web development,
                  practicing clean code, and learning how to make interfaces
                  that feel as good as they work. This portfolio is a snapshot
                  of my progress, not the finish line.
                </p>

                <a href="#contact" className="text-link">
                  Have a project in mind? <ArrowUpRight size={16} />
                </a>

              </div>

              <div className="facts">

                {[
                  ['01', 'Currently studying', 'B.Tech / Engineering'],
                  ['02', 'Learning', 'Web development & programming'],
                  ['03', 'Outside the code', 'Curiosity, ideas & good design']
                ].map(([number, title, description]) => (

                  <div className="fact" key={number}>

                    <span>{number}</span>

                    <div>
                      <strong>{title}</strong>
                      <p>{description}</p>
                    </div>

                    <ArrowUpRight size={17} />

                  </div>

                ))}

              </div>
            </div>

          </Reveal>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section container">

          <Reveal>

            <SectionHeading
              eyebrow="02 / SELECTED WORK"
              title="Things I've been building."
              note="A collection of projects where ideas turn into real digital experiences."
            />

          </Reveal>

          <div className="projects-grid">

            {projects.map((project, index) => (

              <Reveal key={project.number} className="project-reveal">

                <article
                  className="project-card"
                  style={{ '--card-index': index }}
                >

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-image"
                  >

                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                    />

                    <span className="image-overlay">
                      View project <ArrowUpRight size={20} />
                    </span>

                    <span className="project-category">
                      {project.category}
                    </span>

                  </a>

                  <div className="project-info">

                    <div className="project-meta">
                      <span>{project.number} / PROJECT</span>
                      <MoveUpRight size={18} />
                    </div>

                    <h3>{project.name}</h3>

                    <p>{project.description}</p>

                    <div className="tech-stack">
                      {project.stack.map(item => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>

                    <div className="project-links">

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github size={16} /> Source
                      </a>

                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live demo <ArrowUpRight size={15} />
                      </a>

                    </div>
                  </div>

                </article>

              </Reveal>

            ))}

          </div>

          <div className="github-more">

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Explore GitHub <ArrowRight size={16} />
            </a>

          </div>

        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section container">

          <Reveal>

            <SectionHeading
              eyebrow="03 / MY TOOLKIT"
              title="Tools I'm learning."
              note="A growing toolkit focused on strong fundamentals and practical development."
            />

            <div className="skills-grid">

              {skills.map((group, index) => {

                const Icon = group.icon

                return (

                  <div className="skill-card" key={group.title}>

                    <div className="skill-top">
                      <span>0{index + 1}</span>
                      <Icon size={23} />
                    </div>

                    <h3>{group.title}</h3>

                    <div className="skill-list">

                      {group.items.map(item => (
                        <span key={item}>{item}</span>
                      ))}

                    </div>

                  </div>

                )

              })}

            </div>

            <div className="learning-banner">

              {/* REPLACED SPARKLE WITH GRADUATION CAP */}
              <div className="learning-icon">
                <GraduationCap size={25} />
              </div>

              <div>
                <span>ALWAYS IN PROGRESS</span>
                <h3>
                  The next skill is always one project away.
                </h3>
              </div>

              <ArrowUpRight className="learning-arrow" size={24} />

            </div>

          </Reveal>

        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section container">

          <Reveal>

            <div className="contact-panel">

              <div className="contact-glow" />
              <div className="contact-orb" />

              <p className="eyebrow">
                04 / SAY HELLO
              </p>

              <h2>
                Let's make
                <span>something useful.</span>
              </h2>

              <p className="contact-description">
                Open to learning opportunities, collaboration, feedback,
                and meeting people who enjoy making things for the web.
              </p>

              <div className="contact-buttons">

                <a
                  href={`mailto:${profile.email}`}
                  className="btn-primary"
                >
                  <Mail size={17} /> Email me <ArrowUpRight size={16} />
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <Github size={17} /> GitHub
                </a>

              </div>

              <span className="contact-decoration">
                hello<span>.</span>
              </span>

            </div>

          </Reveal>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">

        <div className="container footer-inner">

          <a href="#home" className="footer-brand">
            SKP<span>.</span>
          </a>

          <p>
            © {new Date().getFullYear()} {profile.name}. Made with curiosity.
          </p>

          <a href="#home" className="back-top">
            Back to top <ArrowUpRight size={15} />
          </a>

        </div>

      </footer>

    </div>
  )
}

export default App