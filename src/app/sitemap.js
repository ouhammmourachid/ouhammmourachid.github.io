import { products } from './work/products'
import { pathFor, SITE } from '../content/site'

export const dynamic = 'force-static'

export default function sitemap() {
  const lastModified = new Date('2026-11-14')
  return [
    { url: SITE + pathFor(), lastModified, changeFrequency: 'monthly', priority: 1 },
    ...products.map((p) => ({ url: SITE + pathFor(`work/${p.slug}`), lastModified, changeFrequency: 'monthly', priority: 0.8 })),
  ]
}
