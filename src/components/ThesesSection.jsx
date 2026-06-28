import { BookOpen, ExternalLink } from 'lucide-react'
import Abstract from './Abstract'

const THESES = [
  {
    id: 1,
    type: "Bachelor's Thesis",
    title: 'Determinants in Integer Programming Formulations of Hard Problems',
    institution: 'Technical University of Munich',
    year: '2023',
    supervisor: 'Supervised by Prof. Dr. Stefan Weltge',
    links: [{ label: 'PDF',  href: '/bachelor.pdf' },],
    abstract: String.raw`A number of results in recent years (Veselov and Chirkov 2009; Artmann, Weismantel, and Zenklusen 2017; Fiorini, Joret, Weltge, Yuditski 2022; Nägele, Nöbel, Santiago, and Zenklusen 2023) suggest that integer programs that have constraint matrices whose subdeterminants are bounded by a constant might be solvable in polynomial time. If this conjecture were true, it would imply that any integer programming formulation of an NP-hard problem must necessarily feature unbounded subdeterminants (assuming P \(\neq\) NP).
    
    We give empirical evidence for the truth of this consequence by formulating three strategies to prove that a given integer programming formulation of an NP-hard problem has unbounded subdeterminants and successfully applying them to all standard integer programming formulations of the 21 NP-complete problems on the list compiled by Karp (1972). Moreover, we present a novel characterization of the determinant of matrices with entries in \(\{-1,0,+1\}\) and exactly two non-zeros per row.`
  },
  {
    id: 2,
    type: "Master's Thesis",
    title: 'Polyhedral Aspects of the Stable Set Problem in Relation to Odd Cycles',
    institution: 'Technical University of Munich',
    year: '2025',
    supervisor: 'Supervised by Prof. Dr. Stefan Weltge',
    links: [{ label: 'PDF',  href: '/master.pdf' },],
    abstract: String.raw`We establish properties of the stable set polytope for graphs that have few odd cycles in two different senses: First, we consider graphs for which the number of vertex-disjoint odd cycles is bounded by a constant. Second, we consider graphs which have an odd cycle transversal, i.\,e. a subset of vertices that intersects any odd cycle, whose size can be bounded by a constant.
    
    We show that for any fixed positive \(\varepsilon\), the multiplicative integrality gap of all standard 0/1-integer programming hierarchies is at most \(1+\varepsilon\) after a constant number of rounds for the first type of graphs, and for the second type is \(1\) after a constant number of rounds. In particular, this allows us to determine the optimal value, up to a factor of \(1+\varepsilon\), in polynomial time for the weighted stable set problem on graphs of the first type and yields a polynomial algorithm for the second type, with both of the algorithms being purely polyhedral.
  
    As a key ingredient, we show a graph theoretic result that is of independent interest: Any graph with vertex weights and no odd cycle of weight less than \(\varepsilon\) times the total weight of all vertices has an odd cycle transversal of size at most \(c_1/\varepsilon\ln\left(c_2/\varepsilon\right)\) for explicit constants \(c_1, c_2\), improving a result of Bock, Faenza, Moldenhauer, and Ruiz-Vargas (2014).
    
    Moreover, we provide an overview of some classes of graphs for which a complete linear description of their stable set polytopes is known, as well as of families of valid constraints for the stable set polytope. By specializing a result of Shepherd (1995), we obtain a complete linear description of the stable set polytope of graphs that have an odd cycle transversal of size at most three and that are the complement of so-called quasi-line graphs. Furthermore, we show that the CG rank of the fractional stable set polytope can be bounded by the size of an odd cycle transversal in this case.
    
    Lastly, we examine the role of the constraints that define the stable set polytope of complements of quasi-line graphs with an odd cycle transversal number of 2 for the stable set polytopes of general graphs with an odd cycle transversal of size 2, using computational experiments with random graphs. The results show that the constraint classes relevant in the restricted case explain many, but not all, facets in the general case, with the share of unexplained facets increasing as graph sizes increase.`
  },
]

const TYPE_COLORS = {
  "Master's Thesis":   { color: '#2563eb', bg: 'color-mix(in srgb, #2563eb 10%, transparent)', border: 'color-mix(in srgb, #2563eb 25%, transparent)' },
  "Bachelor's Thesis": { color: '#2563eb', bg: 'color-mix(in srgb, #2563eb 10%, transparent)', border: 'color-mix(in srgb, #2563eb 25%, transparent)' },
}

export default function ThesesSection() {
  return (
    <section className="section" id="theses">
      <div className="container">
        <h2 className="section-heading">
          <BookOpen size={20} aria-hidden="true" />
          Theses
        </h2>

        <div className="entry-list">
          {THESES.slice().reverse().map((thesis) => {
            const style = TYPE_COLORS[thesis.type] ?? {}
            return (
              <article key={thesis.id} className="entry-card">
                <div className="entry-header">
                  <span className="entry-title">{thesis.title}</span>
                  <span className="entry-year">{thesis.year}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.35rem', flexWrap: 'wrap' }}>
                  <span
                    className="tag"
                    style={{ color: style.color, background: style.bg, borderColor: style.border, fontWeight: 600 }}
                  >
                    {thesis.type}
                  </span>
                  <span className="entry-authors">{thesis.institution}</span>
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: '1.6' }}>
                  {thesis.description}
                </p>

                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem', fontStyle: 'italic' }}>
                  {thesis.supervisor}
                  {thesis.grade && <> · <strong style={{ fontStyle: 'normal' }}>{thesis.grade}</strong></>}
                </p>

                <Abstract text={thesis.abstract} />
                <div className="entry-links">
                  {thesis.links.map(({ label, href }) => (
                    <a key={label} href={href} className="entry-link-btn" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={11} />
                      {label}
                    </a>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
