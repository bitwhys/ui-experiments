import { type ReactNode } from 'react'

import { cx } from '@/lib/utils'
import ConfigSlider from '@/components/config-slider'
import { ExperimentHeader } from '@/components/experiment-header'
import { Logo } from '@/components/logo'

const ExperimentalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      data-slot="experiment-layout"
      className="bg-page-tertiary dark:bg-page relative grid min-h-screen grid-cols-[1fr_2.5rem_auto_2.5rem_1fr] grid-rows-[1fr_1px_auto_1px_1fr] overflow-hidden [--pattern-fg:var(--color-gray-4)]"
    >
      {/*Add a data-slot attribute for the off chance we need to target the container*/}
      <ExperimentHeader />
      <div
        data-slot="experiment-container"
        className={cx(
          'bg-gray-a2 dark:bg-gray-1 col-start-3 row-start-3',
          'flex max-w-lg flex-col p-2 dark:[--card-background-color:var(--color-gray-1)]',
          'dark:[&>[data-slot=card]]:shadow-none',
        )}
      >
        {children}
      </div>
      {/*FIXME: just to test the concept, place a widget for controlling visual elements of a design in the middle box to the right */}
      {/*<div className="relative -left-px col-span-full col-start-5 row-span-2 row-start-2 py-2 pt-6 pr-16 pl-5">*/}
      {/*  <div className="size-full">*/}
      {/*    <ConfigSlider />*/}
      {/*  </div>*/}
      {/*</div>*/}

      <h2 className="font-display text-gray-8 relative top-2 -right-px z-10 col-start-2 row-span-full row-start-2 text-xl/7 font-bold tracking-tight [writing-mode:vertical-lr]">
        Case Log 3X-782
      </h2>
      <div className="font-display relative -right-px col-start-2 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      <div className="relative -left-px col-start-4 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      <div className="relative -bottom-px col-span-full col-start-1 row-start-2 h-px bg-(--pattern-fg)"></div>
      <div className="relative -top-px col-span-full col-start-1 row-start-4 h-px bg-(--pattern-fg)"></div>
    </div>
  )
}

export default ExperimentalLayout
