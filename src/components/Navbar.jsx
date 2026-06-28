import { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Papers',                 id: 'papers'      },
  { label: 'Theses',                 id: 'theses'      },
  { label: 'Workshops & Conferences', id: 'workshops'  },
  { label: 'Teaching',               id: 'teaching'    },
  { label: 'Service',                id: 'service'     },
]

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#top" className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Simon Keil
        </a>

        <ul className={`navbar-links${open ? ' open' : ''}`}>
          {NAV_ITEMS.map(({ label, id }) => (
            <li key={id}>
              <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id) }}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-right">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </nav>
  )
}
