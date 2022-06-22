import 'nextra-theme-docs/style.css'
import { useTheme } from 'next-themes'
import React from 'react'

const TestTheme = ({ children }) => {
  const { theme, setTheme, systemTheme } = useTheme()
  console.log('theme', theme, systemTheme)
  return children
}

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || (page => page)
  return getLayout(
    <TestTheme>
      <Component {...pageProps} />
    </TestTheme>
  )
}