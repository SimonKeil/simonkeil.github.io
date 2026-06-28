import { Globe, ExternalLink } from 'lucide-react'
import Abstract from './Abstract'

const EVENTS = [
  {
    id: 1,
    title: 'Workshop on Relaxation Methods in Optimization',
    location: 'Augsburg, Germany',
    year: 2026,
    links: [{ label: 'Website', href: 'https://www.uni-augsburg.de/en/fakultaet/mntf/math/tagungen/rmo2026/' }],
  },
  {
    id: 2,
    title: 'Friday@Noon 2026 – Bavarian Workshop on Optimization',
    location: 'Straubing, Germany',
    year: 2026,
    links: [{ label: 'Website', href: 'https://odm.cs.tum.de/en/conferences/fridaynoon-2026' }],
  },
  // {
  //   id: 3,
  //   title: 'TITLE',
  //   location: 'PLACE',
  //   year: 2026,
  //   contribution: { type: 'Talk', title: 'My Talk Title' },
  //   links: [{ label: 'Website', href: '#' }],
  //   abstract: 'ABSTRACT',
  // },
]

export default function WorkshopsSection() {
  return (
    <section className="section" id="workshops">
      <div className="container">
        <h2 className="section-heading">
          <Globe size={20} aria-hidden="true" />
          Workshops &amp; Conferences
        </h2>

        <div className="entry-list">
          {EVENTS.slice().reverse().map((item) => (
            <article key={item.id} className="entry-card">
              <div className="entry-header">
                <span className="entry-title">{item.title}</span>
                <span className="entry-year">{item.year}</span>
              </div>

              <p className="entry-authors" style={{ marginTop: '0.25rem' }}>
                📍 {item.location}
              </p>

              {item.contribution && (
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                  <span className="tag" style={{ marginRight: '0.4rem' }}>{item.contribution.type}</span>
                  {item.contribution.title}
                </p>
              )}

              <Abstract text={item.abstract} />
              {item.links?.length > 0 && (
                <div className="entry-links">
                  {item.links.map(({ label, href }) => (
                    <a key={label} href={href} className="entry-link-btn" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={11} />
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
