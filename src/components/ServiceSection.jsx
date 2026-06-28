import { Users } from 'lucide-react'

const SERVICE = [
  {
    id: 1,
    role: 'Seminar Organizer',
    title: 'Research Seminar of the Discrete Optimization Group',
    institution: 'Technical University of Munich',
    period: '2025–present',
    description: <>I coordinate the research seminar of our research group. See the <a href="https://mathcal.ma.tum.de/" target="_blank" rel="noopener noreferrer">Munich Mathematical Calendar</a> (filter for 'Forschungsseminar M9: Angewandte Geometrie und Diskrete Mathematik') for upcoming talks.</>,
  },
]

export default function ServiceSection() {
  return (
    <section className="section" id="service">
      <div className="container">
        <h2 className="section-heading">
          <Users size={20} aria-hidden="true" />
          Service
        </h2>

        <div className="entry-list">
          {SERVICE.slice().reverse().map((item) => (
            <div key={item.id} className="teaching-card">
              <div>
                <p className="teaching-role">{item.role}</p>
                <p className="teaching-title">{item.title}</p>
                <p className="teaching-meta">{item.institution} · {item.period}</p>
                {item.description && (
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: '1.6' }}>
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
