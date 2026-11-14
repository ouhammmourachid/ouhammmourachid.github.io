import './globals.css'
import localFont from 'next/font/local'
import Providers from './components/Providers'

// Self-hosted (Latin subset from Google Fonts) so builds and dev never depend on a font download
const display = localFont({
  src: [{ path: './fonts/Archivo-Variable.woff2', weight: '100 900', style: 'normal' }],
  declarations: [{ prop: 'font-stretch', value: '62% 125%' }],
  variable: '--font-display',
  display: 'swap',
})

const mono = localFont({
  src: [
    { path: './fonts/IBMPlexMono-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/IBMPlexMono-Medium.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://ouhammmourachid.github.io'),
  title: 'Rachid Ouhammou, Software & AI Engineer',
  description:
    'Software and AI engineer in Casablanca. Founder of PocketsHub, Talla and WakilAds. I take products from idea to production.',
  openGraph: {
    title: 'Rachid Ouhammou, Software & AI Engineer',
    description: 'Founder of PocketsHub, Talla and WakilAds. I take products from idea to production.',
    url: '/',
    images: ['/rachid-portrait.jpg'],
    type: 'profile',
  },
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#1e252d' },
    { media: '(prefers-color-scheme: light)', color: '#f6f7f9' },
  ],
}

export default function RootLayout({ children }) {
  return (
    // next-themes writes data-theme on <html> before React hydrates
    <html lang="en" className={`${display.variable} ${mono.variable}`} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
