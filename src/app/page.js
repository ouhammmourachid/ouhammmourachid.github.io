import Link from 'next/link'
import Plotter from './components/Plotter'
import SheetBar from './components/SheetBar'
import { copy, LINKS, pathFor, SITE } from '../content/site'

const { meta, home: h, plotter } = copy

export const metadata = {
  title: meta.homeTitle,
  description: meta.homeDesc,
  alternates: { canonical: '/' },
  openGraph: {
    title: meta.homeTitle,
    description: meta.homeDesc,
    url: '/',
    type: 'profile',
    images: [{ url: '/og/home.png', width: 1200, height: 630, alt: meta.homeTitle }],
  },
  twitter: { card: 'summary_large_image', title: meta.homeTitle, description: meta.homeDesc, images: ['/og/home.png'] },
}

// Tells search engines who the site is about
const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rachid Ouhammou',
  url: `${SITE}/`,
  image: `${SITE}/rachid-portrait.jpg`,
  jobTitle: meta.jobTitle,
  email: `mailto:${LINKS.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Casablanca', addressCountry: 'MA' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'ENSAM Casablanca' },
  knowsLanguage: ['ar', 'fr', 'en'],
  sameAs: [LINKS.github, LINKS.linkedin],
}

export default function Home() {
  return (
    <main className="wrap">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <h1 className="sr-only">{h.h1}</h1>
      <SheetBar active="model" />
      <Plotter />

      <p className="pl-about">
        {h.about} <span>{h.aboutMore}</span>
      </p>

      <div className="pl-grid">
        <section aria-labelledby="h-layers">
          <h2 id="h-layers">{h.layersH}</h2>
          <ul className="pl-list">
            {h.layers.map((l) => (
              <li key={l.name}>
                <i className="sw" style={{ background: l.color }} aria-hidden="true" />
                <div><b>{l.name}</b> <span>{l.items}</span></div>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="h-blocks">
          <h2 id="h-blocks">{h.blocksH}</h2>
          <ul className="pl-list">
            {h.blocks.map((b) => (
              <li key={b.name}>
                <div>
                  <b>{b.slug ? <Link href={pathFor(`work/${b.slug}`)}>{b.name}</Link> : b.name}</b>{' '}
                  <span>{b.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="h-history">
          <h2 id="h-history">{h.historyH}</h2>
          <ul className="pl-list">
            {h.history.map((x) => (
              <li key={x.text}>
                <div><b>{x.year}</b> <span>{x.text}</span></div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="pl-mail">
        <b>{plotter.command}</b> MAIL <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>{' '}
        <span className="pl-blink" aria-hidden="true" />
      </div>
      <footer className="pl-foot">
        <span>{h.foot}</span>
        <nav aria-label="Elsewhere">
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${LINKS.email}`}>Email</a>
          <a href={LINKS.cv} target="_blank" rel="noopener">CV (PDF)</a>
        </nav>
      </footer>
    </main>
  )
}
