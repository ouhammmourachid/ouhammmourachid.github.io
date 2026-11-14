'use client'

import { useEffect, useState } from 'react'

// The 404 page is one static file, so the requested path is only known in the browser
export default function MissingPath() {
  const [path, setPath] = useState('')
  useEffect(() => setPath(window.location.pathname), [])
  const name = path.replace(/^\/|\/$/g, '')
  return <>{name ? `${name}.dwg` : 'sheet.dwg'}</>
}
