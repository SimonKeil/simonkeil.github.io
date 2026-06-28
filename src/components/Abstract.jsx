import { ChevronDown } from 'lucide-react'
import katex from 'katex'
import 'katex/dist/katex.min.css'

/**
 * Renders a string that may contain:
 *  - \(...\)  or $...$   inline math
 *  - \[...\]  or $$...$$ display math
 *  - \cite{key}  → [key]
 *  - \,  → thin space
 */
function renderMathText(raw) {
  // Pre-process non-math LaTeX conventions
  const text = raw
    .replace(/\\cite\{([^}]+)\}/g, '[$1]')
    .replace(/\\,/g, '\u2009') // thin space

  // $$...$$ must come before $...$ in the alternation to avoid mis-matching
  const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[^$\n]+?\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\))/)

  return parts.map((part, i) => {
    const isDisplay = (part.startsWith('$$') && part.endsWith('$$')) ||
                      (part.startsWith('\\[') && part.endsWith('\\]'))
    const isInline  = (!isDisplay && part.startsWith('$') && part.endsWith('$')) ||
                      (part.startsWith('\\(') && part.endsWith('\\)'))
    if (isDisplay || isInline) {
      const inner  = isDisplay && part.startsWith('$$') ? part.slice(2, -2)
                   : isInline  && part.startsWith('$')  ? part.slice(1, -1)
                   : part.slice(2, -2)
      const html = katex.renderToString(inner, {
        throwOnError: false,
        displayMode: isDisplay,
      })
      return (
        <span
          key={i}
          // KaTeX output is sanitised and contains no user-controlled HTML
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )
    }
    return <span key={i}>{part}</span>
  })
}

export default function Abstract({ text }) {
  if (!text) return null
  const paragraphs = text.split(/\n[\t ]*\n/).map((p) => p.trim()).filter(Boolean)
  return (
    <details className="abstract">
      <summary className="abstract-toggle">
        <ChevronDown size={13} className="abstract-chevron" aria-hidden="true" />
        Abstract
      </summary>
      <div className="abstract-text">
        {paragraphs.map((p, i) => (
          <p key={i} style={{ marginTop: i > 0 ? '0.75em' : 0 }}>
            {renderMathText(p)}
          </p>
        ))}
      </div>
    </details>
  )
}
