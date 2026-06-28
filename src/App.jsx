import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PapersSection from './components/PapersSection'
import ThesesSection from './components/ThesesSection'
import WorkshopsSection from './components/WorkshopsSection'
import TeachingSection from './components/TeachingSection'
import ServiceSection from './components/ServiceSection'

function getInitialTheme() {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || stored === 'light') return stored
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
  }
  return 'light'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <PapersSection />
        <ThesesSection />
        <WorkshopsSection />
        <TeachingSection />
        <ServiceSection />
      </main>
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} Simon Keil · This website was built with generative AI
        </div>
      </footer>
    </>
  )
}
