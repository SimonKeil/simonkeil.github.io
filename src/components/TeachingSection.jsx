import { GraduationCap } from 'lucide-react'

const TEACHING = [
  {
    id: 1,
    icon: '📖',
    role: 'Tutor',
    title: 'Discrete Mathematics',
    institution: 'Technical University of Munich',
    terms: 'Summer 2022, 2024, 2025, 2026',
    description:
      'Held weekly exercise sessions',
  },
  {
    id: 2,
    icon: '📖',
    role: 'Teaching Assistant',
    title: 'Discrete Optimization',
    institution: 'Technical University of Munich',
    terms: 'Winter 2025/26',
    description:
      'Organized and held weekly exercise sessions, designed and graded exam',
  },
]

export default function TeachingSection() {
  return (
    <section className="section" id="teaching">
      <div className="container">
        <h2 className="section-heading">
          <GraduationCap size={20} aria-hidden="true" />
          Teaching
        </h2>

        <div className="entry-list">
          {TEACHING.slice().reverse().map((item) => (
            <div key={item.id} className="teaching-card">
              <span className="teaching-icon" aria-hidden="true">{item.icon}</span>
              <div>
                <p className="teaching-role">{item.role}</p>
                <p className="teaching-title">{item.title}</p>
                <p className="teaching-meta">{item.institution} · {item.terms}</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
