"use client"
import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from 'react-icons/fa'

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button className="mt-2" onClick={e => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
      {theme === 'dark' ? <FaMoon /> : <FaSun />}
    </button>
  )
}

export default DarkModeButton;