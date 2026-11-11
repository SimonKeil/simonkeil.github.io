import { FileText, ExternalLink } from 'lucide-react'
import Abstract from './Abstract'

const PAPERS = [
  {
    id: 1,
    title: 'The relaxation complexity of the standard simplex is logarithmic',
    authors: 'Gennadiy Averkov, Simon Keil, Stefan Weltge',
    year: 2026,
    tags: [],
    links: [
      { label: 'PDF',     href: 'https://arxiv.org/pdf/2606.11852' },
      { label: 'arXiv',   href: 'https://arxiv.org/abs/2606.11852' },
    ],
    abstract: String.raw`For a set $X$ of integer points, the relaxation complexity $\operatorname{rc}(X)$ is the smallest number of facets of any polyhedron $P$ such that $P \cap \Z^d = X$. In this paper, we focus on the case where $X$ is the discrete standard simplex $\Delta_d = \{\mathbf{0}, e_1, \dots, e_d\}$. We show that $\operatorname{rc}(\Delta_d) = O(\log d)$ by an explicit, elementary construction.
    This improves upon the previously best-known upper bound $\operatorname{rc}(\Delta_d) = O(d / \sqrt{\log d})$ due to Aprile, Averkov, Di Summa, and Hojny (2024) and matches an asymptotic lower bound by Averkov and Schymura (2022).`
  },
  {
  id: 2,
  title: 'Combinatorial optimization with bounded subdeterminants',
  authors: 'Samuel Fiorini, J. Pascal Gollin, Tony Huynh, Simon Keil, O-joung Kwon, Sang-il Oum, Roohani Sharma, Stefan Weltge',
  year: 2026,
  tags: [],
  links: [
    { label: 'PDF',     href: 'https://arxiv.org/pdf/2611.13065' },
    { label: 'arXiv',   href: 'https://arxiv.org/abs/2611.13065' },
  ],
  abstract: String.raw`We take a first step toward a broader study of classical combinatorial optimization problems through the maximum subdeterminants of their standard integer programming formulations, yielding new positive results for several famous (NP-hard) problems.
  An integer matrix is totally $\Delta$-modular if every square submatrix has determinant of absolute value at most $\Delta$. 
  For every fixed $\Delta$, it has been known that maximum clique, maximum stable set, and minimum vertex cover can be solved in polynomial time on instances for which the coefficient matrix of the natural formulation is totally $\Delta$-modular. We extend this list by showing that the same holds for many other problems, including the weighted versions of maximum cut, the traveling salesman problem, feedback vertex set, odd cycle transversal, dominating set, max 2-sat, induced matching, and cluster vertex deletion, as well as for $k$-colorability and graph isomorphism.

  Our proofs reveal several new ways in which bounded subdeterminants impose combinatorial structure: they bound the size or maximum degree of the input graph, bound packings of cycles and other obstructions, or yield decompositions into tractable graph classes such as forests, chordal graphs, graphs of bounded treewidth, and graphs of bounded linear mim-width.`
  },
]

export default function PapersSection() {
  return (
    <section className="section" id="papers">
      <div className="container">
        <h2 className="section-heading">
          <FileText size={20} aria-hidden="true" />
          Papers
        </h2>

        <div className="entry-list">
          {PAPERS.slice().reverse().map((paper) => (
            <article key={paper.id} className="entry-card">
              <div className="entry-header">
                <span className="entry-title">{paper.title}</span>
                <span className="entry-year">{paper.year}</span>
              </div>
              <p className="entry-authors">{paper.authors}</p>
              <p className="entry-venue">{paper.venue}</p>
              {paper.tags.length > 0 && (
                <div className="entry-tags">
                  {paper.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              )}
              <Abstract text={paper.abstract} />
              <div className="entry-links">
                {paper.links.map(({ label, href }) => (
                  <a key={label} href={href} className="entry-link-btn" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={11} />
                    {label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
