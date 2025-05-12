import { type ReactNode } from 'react'

import { Logo } from '@/components/logo'

const ExperimentalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      data-slot="experiment-layout"
      className="bg-page-tertiary relative grid min-h-screen grid-cols-[1fr_2.5rem_auto_2.5rem_1fr] grid-rows-[1fr_1px_auto_1px_1fr] [--pattern-fg:var(--color-gray-4)]"
    >
      {/*Add a data-slot attribute for the off chance we need to target the container*/}
      <ExperimentHeader />
      <div
        data-slot="experiment-container"
        className="bg-gray-a2 col-start-3 row-start-3 flex max-w-lg flex-col p-2"
      >
        {children}
      </div>
      <h2 className="font-display text-gray-8 relative -right-px z-10 col-start-2 row-span-full row-start-2 text-xl/7 font-bold tracking-tight [writing-mode:vertical-lr]">
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

function ExperimentHeader() {
  return (
    <header
      data-slote="experiment-header"
      className="relative top-24 col-start-3 flex h-fit items-center justify-center"
    >
      {/*<img*/}
      {/*  alt="Your Company"*/}
      {/*  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"*/}
      {/*  className="mx-auto h-10 w-auto"*/}
      {/*/>*/}
      {/*<Logo className="mx-auto h-12" />*/}
      <div className="ring-brd-line bg-main size-12 rounded-full shadow-sm ring transition-shadow active:shadow-xs"></div>
    </header>
  )
}
