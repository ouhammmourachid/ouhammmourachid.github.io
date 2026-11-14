'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  // The saved theme is unknown during the static render, so hold the space until mounted
  if (!mounted) return <span className="pl-theme" style={{ visibility: 'hidden' }} aria-hidden="true">Light</span>

  const next = resolvedTheme === 'dark' ? 'light' : 'dark'
  return (
    <button type="button" className="pl-theme" onClick={() => setTheme(next)} aria-label={`Switch to ${next} theme`}>
      {next === 'light' ? (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
          <circle cx="8" cy="8" r="3" />
          <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.4 1.4M11.6 11.6 13 13M3 13l1.4-1.4M11.6 4.4 13 3" />
        </svg>
      ) : (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
          <path d="M13.5 9.5A5.5 5.5 0 0 1 6.5 2.5a5.5 5.5 0 1 0 7 7Z" />
        </svg>
      )}
      <span className="pl-theme-label">{next === 'light' ? 'Light' : 'Dark'}</span>
    </button>
  )
}
