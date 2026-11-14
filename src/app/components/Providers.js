'use client'

import { ThemeProvider } from 'next-themes'

// Sets data-theme="light" | "dark" on <html> before paint, following the system until the visitor picks one.
export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}
