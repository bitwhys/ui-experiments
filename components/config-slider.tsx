import { Label } from '@/ui/label'
import { Slider } from '@/ui/slider'

import { cx } from '@/lib/utils'

export default function ConfigSlider() {
  const values = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
  const max = 6
  const skipInterval = 1 // Set to 1 to allow no text skipping
  const ticks = [...Array(max + 1)].map((_, i) => i)

  return (
    <div className="select-none *:not-first:mt-4">
      <Label className="text-cnt-tertiary font-medium">Border Radius</Label>
      <div>
        <Slider defaultValue={[5]} max={max} aria-label="Slider with ticks" />
        <span
          className="text-cnt-tertiary mt-3 flex w-full items-center justify-between gap-1 px-2.5 text-xs font-medium"
          aria-hidden="true"
        >
          {values.map((token, i) => (
            <span key={i} className="flex w-0 flex-col items-center justify-center gap-2">
              <span className={cx('bg-brd-ring h-1 w-px', i % skipInterval !== 0 && 'h-0.5')} />
              <span className={cx(i % skipInterval !== 0 && 'opacity-0')}>{token}</span>
            </span>
          ))}
        </span>
      </div>
    </div>
  )
}
