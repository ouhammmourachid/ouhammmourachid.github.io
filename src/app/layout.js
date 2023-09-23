import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio : rachid ouhammou',
  description: 'A portfolio website using next js and tailwind css',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        </body>
    </html>
  )
}
