import './globals.css'
import localFont from 'next/font/local'
import Providers from './components/Providers'
import { SITE } from '../content/site'

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

// Defaults; each page sets its own title, description, alternates and share image
export const metadata = {
  metadataBase: new URL(SITE),
  title: 'Rachid Ouhammou',
  authors: [{ name: 'Rachid Ouhammou', url: SITE }],
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#1e252d' },
    { media: '(prefers-color-scheme: light)', color: '#f6f7f9' },
  ],
}

// Runs before paint: if this session already watched the drawing plot, show it finished.
const PLOTTED = `try{if(sessionStorage.getItem('plotted'))document.documentElement.classList.add('plotted')}catch(e){}`

export default function RootLayout({ children }) {
  return (
    // next-themes writes data-theme (and the script above a class) on <html> before React hydrates
    <html lang="en" className={`${display.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: PLOTTED }} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
