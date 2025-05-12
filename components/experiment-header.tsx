'use client'

import { Sliders } from '@phosphor-icons/react'
import { useTheme } from 'next-themes'

export const ExperimentHeader = () => {
  const { theme, setTheme } = useTheme()
  /* FIXME: dark mode is ugly */
  return (
    <header
      data-slote="experiment-header"
      className="relative top-24 col-start-3 flex h-fit items-center justify-center"
    >
      {/*<Logo className="mx-auto h-12" />*/}
      <div
        // onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="ring-brd-line bg-main flex size-9 items-center justify-center rounded-full shadow-sm ring transition-shadow active:shadow-xs"
      >
        <Sliders weight="duotone" className="text-cnt-tertiary size-5" />
      </div>
    </header>
  )
}
