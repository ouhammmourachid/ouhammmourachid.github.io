import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import SheetBar from '../../components/SheetBar'
import { getProduct, products } from '../products'
import { copy, fill, LINKS, pathFor } from '../../../content/site'

// Static export builds one page per product; unknown slugs hit notFound() below.
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = getProduct(slug)
  if (!p) return {}
  const title = fill(copy.meta.caseTitle, { name: p.name })
  const url = pathFor(`work/${slug}`)
  return {
    title,
    description: p.summary,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: p.summary,
      url,
      type: 'article',
      images: [{ url: `/og/${slug}.png`, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description: p.summary, images: [`/og/${slug}.png`] },
  }
}

export default async function CaseStudy({ params }) {
  const { slug } = await params
  const p = getProduct(slug)
  if (!p) notFound()
  const next = products[(products.indexOf(p) + 1) % products.length]

  return (
    <main className="wrap">
      <SheetBar active={p.slug} />

      <article className="cs-sheet">
        <header className="cs-head">
          <p className="cs-cmd"><b>{copy.plotter.command}</b> OPEN {p.slug}.dwg</p>
          <p className="cs-sheetno">{fill(copy.cs.sheet, { n: p.sheet, total: products.length + 1 })}</p>
          <h1 className="cs-title" data-text={p.name}>{p.name}</h1>
          <p className="cs-tag">{p.tagline}</p>
          <dl className="cs-meta">
            <div><dt>Role</dt><dd>{p.role}</dd></div>
            <div><dt>Since</dt><dd>2025</dd></div>
            <div><dt>Status</dt><dd><span className={`cs-status ${p.live ? 'live' : ''}`} aria-hidden="true" />{p.status}</dd></div>
            <div><dt>Live at</dt><dd><a href={p.url} target="_blank" rel="noopener noreferrer">{p.domain}</a></dd></div>
          </dl>
        </header>

        <figure className="cs-fig">
          <div className="cs-dim" aria-hidden="true"><i /><span>1440 px</span><i /></div>
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="cs-shot">
            <Image src={p.image} alt={p.imageAlt} width={1440} height={900} unoptimized priority />
            <span className="cs-tint" aria-hidden="true" />
          </a>
          <figcaption><b>Fig. 1</b> {fill(copy.cs.fig, { domain: p.domain })}</figcaption>
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
          <p className="cs-note">{p.plans.note} {fill(copy.cs.listed, { domain: p.domain })}</p>
        </div>
      </section>

      <section className="cs-sec" aria-labelledby="h-with">
        <h2 id="h-with">Works with</h2>
        <ul className="cs-chips">
          {p.platforms.map((x) => <li key={x}>{x}</li>)}
        </ul>
      </section>

      <nav className="cs-next" aria-label="More sheets">
        <Link href={pathFor()}>Back to model</Link>
        <Link href={pathFor(`work/${next.slug}`)} className="go">Next sheet: <b>{next.name}</b></Link>
      </nav>

      <div className="pl-mail">
        <b>{copy.plotter.command}</b> MAIL <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>{' '}
        <span className="pl-blink" aria-hidden="true" />
      </div>
    </main>
  )
}
