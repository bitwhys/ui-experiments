'use client'

import { Sliders } from '@phosphor-icons/react'
import { useTheme } from 'next-themes'

import { ExperimentSliders } from '@/components/experiment-sliders'

export const ExperimentHeader = () => {
  const { theme, setTheme } = useTheme()
  /* FIXME: dark mode is ugly */
  return (
    <header
      data-slote="experiment-header"
      className="relative top-24 col-start-3 flex h-fit items-center justify-center"
    >
      {/*<Logo className="mx-auto h-12" />*/}
      <ExperimentSliders />
    </header>
  )
}
