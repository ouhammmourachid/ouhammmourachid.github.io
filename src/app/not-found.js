import Link from 'next/link'
import SheetBar from './components/SheetBar'
import MissingPath from './components/MissingPath'
import { products } from './work/products'
import { copy, pathFor } from '../content/site'

export const metadata = { title: 'Sheet not found | Rachid Ouhammou', robots: { index: false } }

export default function NotFound() {
  return (
    <main className="wrap">
      <SheetBar active="" />
      <section className="nf-sheet">
        <p className="cs-cmd"><b>{copy.plotter.command}</b> OPEN <MissingPath /></p>
        <p className="cs-cmd nf-err">Error: file not found</p>
        <p className="nf-code" aria-hidden="true">404</p>
        <h1>{copy.notFound.title}</h1>
        <p>{copy.notFound.text}</p>
        <ul className="nf-links">
          <li><Link href={pathFor()}>Back to model</Link></li>
          {products.map((p) => (
            <li key={p.slug}><Link href={pathFor(`work/${p.slug}`)}>{p.name}</Link></li>
          ))}
        </ul>
      </section>
    </main>
  )
}
