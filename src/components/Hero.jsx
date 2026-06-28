import { Mail, Github, Linkedin } from 'lucide-react'

/* Google Scholar icon */
function GoogleScholarIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5h3.5v7C2.6 17.2 2 18.3 2 19.5 2 21.4 3.6 23 5.5 23c1.2 0 2.3-.6 3-1.5H12h3.5c.7.9 1.8 1.5 3 1.5 1.9 0 3.5-1.6 3.5-3.5 0-1.2-.6-2.3-1.5-3V9.5H24L12 0z"/>
    </svg>
  )
}

/* ORCID iD icon (official SVG path) */
function OrcidIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="128" cy="128" r="128" fill="#A6CE39"/>
      <path d="M86.3 186.2H70.9V79.1h15.4v107.1zM108.9 79.1h41.6c39.6 0 57 28.3 57 53.6 0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1zm15.4 93.3h25.6c34.2 0 42.7-26.4 42.7-39.7 0-21.5-12.8-39.7-43.5-39.7h-24.8v79.4zM88.7 56.8c0 5.5-4.5 10.1-10.1 10.1s-10.1-4.6-10.1-10.1c0-5.6 4.5-10.1 10.1-10.1s10.1 4.5 10.1 10.1z" fill="white"/>
    </svg>
  )
}

const SOCIAL_LINKS = [
  {
    href: 'mailto:simon.keil@tum.de',
    label: 'Email',
    icon: <Mail size={15} />,
  },
  {
    href: 'https://github.com/simonkeil',
    label: 'GitHub',
    icon: <Github size={15} />,
  },
  {
    href: 'https://www.linkedin.com/in/simon-keil/',
    label: 'LinkedIn',
    icon: <Linkedin size={15} />,
  },
  {
    href: 'https://scholar.google.com/citations?user=LLBkOxMAAAAJ',
    label: 'Google Scholar',
    icon: <GoogleScholarIcon size={15} />,
  },
  {
    href: 'https://orcid.org/0009-0002-0429-3616',
    label: 'ORCID',
    icon: <OrcidIcon size={15} />,
  },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-inner">

          <div className="hero-avatar">
            <img src="/photo.png" alt="Simon Keil" />
          </div>

          <div className="hero-content">
            <h1 className="hero-name">Simon Keil</h1>
            <p className="hero-title">Doctoral Candidate · <a href="https://www.tum.de" target="_blank" rel="noopener noreferrer">Technical University of Munich</a></p>

            <p className="hero-bio">
              I am a doctoral candidate at <a href="https://www.tum.de" target="_blank" rel="noopener noreferrer">TU Munich</a> in the <a href="https://www.math.cit.tum.de/en/math/research/groups/discrete-optimization/" target="_blank" rel="noopener noreferrer">Discrete Optimization group</a> supervised by <a href="https://www.weltge.de" target="_blank" rel="noopener noreferrer">Stefan Weltge</a>. I am particularly interested in the theory of integer programming, polyhedral combinatorics, and combinatorial optimization.
            </p>

            {/* Mini CV chips */}
            <div className="hero-cv-chips">
              <span className="chip">🎓 PhD candidate, TUM (2025–present)</span>
              <span className="chip">🎓 M.Sc. Mathematics, TUM (2025)</span>
              <span className="chip">🎓 B.Sc. Mathematics, TUM (2023)</span>
            </div>

            {/* Social links */}
            <div className="social-links">
              {SOCIAL_LINKS.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  className="social-link"
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
