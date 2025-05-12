'use client'

import { useTheme } from 'next-themes'

export const ExperimentHeader = () => {
  const { theme, setTheme } = useTheme()
  return (
    <header
      data-slote="experiment-header"
      className="relative top-24 col-start-3 flex h-fit items-center justify-center"
    >
      {/*<Logo className="mx-auto h-12" />*/}
      <div
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="ring-brd-line bg-main size-9 rounded-full shadow-sm ring transition-shadow active:shadow-xs"
      ></div>
    </header>
  )
}
