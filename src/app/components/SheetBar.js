import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { products } from '../work/products'

// CAD layout tabs double as the site navigation: Model is the home sheet, each product is its own sheet.
export default function SheetBar({ active }) {
  const tabs = [{ key: 'model', label: 'Model', href: '/' }, ...products.map((p) => ({ key: p.slug, label: p.name, href: `/work/${p.slug}` }))]
  return (
    <div className="pl-bar">
      <nav className="pl-tabs" aria-label="Sheets">
        {tabs.map((t) => (
          <Link key={t.key} href={t.href} aria-current={t.key === active ? 'page' : undefined}>
            {t.label}
          </Link>
        ))}
      </nav>
      <ThemeToggle />
    </div>
  )
}
