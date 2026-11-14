import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { products } from '../work/products'
import { copy, pathFor } from '../../content/site'

// CAD layout tabs double as the site navigation: Model is the home sheet, each product is its own sheet.
export default function SheetBar({ active }) {
  const tabs = [
    { key: 'model', label: copy.tabs.model, href: pathFor() },
    ...products.map((p) => ({ key: p.slug, label: p.name, href: pathFor(`work/${p.slug}`) })),
  ]
  return (
    <div className="pl-bar">
      <nav className="pl-tabs" aria-label="Sheets">
        {tabs.map((tab) => (
          <Link key={tab.key} href={tab.href} aria-current={tab.key === active ? 'page' : undefined}>
            {tab.label}
          </Link>
        ))}
      </nav>
      <div className="pl-tools">
        <ThemeToggle />
      </div>
    </div>
  )
}
