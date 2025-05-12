import { Sliders } from '@phosphor-icons/react'

export const ExperimentSliders = () => {
  return (
    <div
      // onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="ring-brd-line bg-gray-3 active:ring-brd-interactive/60 hover:bg-gray-4 z-50 flex size-9 items-center justify-center rounded-full shadow-sm ring transition-all active:shadow-xs"
    >
      <Sliders weight="duotone" className="text-cnt-tertiary pointer-events-none size-5" />
    </div>
  )
}
