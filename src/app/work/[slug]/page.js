import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import SheetBar from '../../components/SheetBar'
import { getProduct, products } from '../products'

// Static export builds only these slugs; unknown ones hit notFound() below.
// (No `dynamicParams = false`: in Next 13.5 dev it wrongly reports generateStaticParams as missing.)
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const p = getProduct(params.slug)
  if (!p) return {}
  return {
    title: `${p.name}, case study | Rachid Ouhammou`,
    description: p.summary,
    openGraph: { title: `${p.name}, case study`, description: p.summary, images: [p.image] },
  }
}

export default function CaseStudy({ params }) {
  const p = getProduct(params.slug)
  if (!p) notFound()
  const next = products[(products.indexOf(p) + 1) % products.length]

  return (
    <main className="wrap">
      <SheetBar active={p.slug} />

      <article className="cs-sheet">
        <header className="cs-head">
          <p className="cs-cmd"><b>Command:</b> OPEN {p.slug}.dwg</p>
          <p className="cs-sheetno">Sheet {p.sheet} of {products.length + 1}</p>
          <h1 className="cs-title" data-text={p.name}>{p.name}</h1>
          <p className="cs-tag">{p.tagline}</p>
          <dl className="cs-meta">
            <div><dt>Role</dt><dd>{p.role}</dd></div>
            <div><dt>Since</dt><dd>2025</dd></div>
            <div><dt>Status</dt><dd><span className={`cs-status ${p.status === 'Live' ? 'live' : ''}`} aria-hidden="true" />{p.status}</dd></div>
            <div><dt>Live at</dt><dd><a href={p.url} target="_blank" rel="noopener noreferrer">{p.domain}</a></dd></div>
          </dl>
        </header>

        <figure className="cs-fig">
          <div className="cs-dim" aria-hidden="true"><i /><span>1440 px</span><i /></div>
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="cs-shot">
            <Image src={p.image} alt={p.imageAlt} width={1440} height={900} unoptimized priority />
            <span className="cs-tint" aria-hidden="true" />
          </a>
          <figcaption><b>Fig. 1</b> {p.domain}, home page, November 2026</figcaption>
        </figure>
      </article>

      <section className="cs-sec" aria-labelledby="h-problem">
        <h2 id="h-problem">Problem</h2>
        <p className="cs-lead">{p.problem}</p>
      </section>

      <section className="cs-sec" aria-labelledby="h-how">
        <h2 id="h-how">How it works</h2>
        <ol className="cs-steps">
          {p.steps.map((s) => (
            <li key={s.title}><b>{s.title}</b><span>{s.text}</span></li>
          ))}
        </ol>
      </section>

      <section className="cs-sec" aria-labelledby="h-built">
        <h2 id="h-built">What I built</h2>
        <ul className="cs-feat">
          {p.features.map((f) => <li key={f}>{f}</li>)}
        </ul>
      </section>

      <section className="cs-sec" aria-labelledby="h-plans">
        <h2 id="h-plans">Plans</h2>
        <div>
          <div className="cs-table">
            <table>
              <thead><tr><th>Plan</th><th>Price</th><th>Includes</th></tr></thead>
              <tbody>
                {p.plans.rows.map((r) => (
                  <tr key={r.name}><td>{r.name}</td><td>{r.price}</td><td>{r.detail}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cs-note">{p.plans.note} As listed on {p.domain} in November 2026.</p>
        </div>
      </section>

      <section className="cs-sec" aria-labelledby="h-with">
        <h2 id="h-with">Works with</h2>
        <ul className="cs-chips">
          {p.platforms.map((x) => <li key={x}>{x}</li>)}
        </ul>
      </section>

      <nav className="cs-next" aria-label="More sheets">
        <Link href="/">Back to model</Link>
        <Link href={`/work/${next.slug}`} className="go">Next sheet: <b>{next.name}</b></Link>
      </nav>

      <div className="pl-mail">
        <b>Command:</b> MAIL <a href="mailto:contact.ouhammou@gmail.com">contact.ouhammou@gmail.com</a>{' '}
        <span className="pl-blink" aria-hidden="true" />
      </div>
    </main>
  )
}
