import { type ReactNode } from 'react'

const ExperimentalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center px-6 pt-30 pb-40">
      {/*Add a data-slot attribute for the off chance we need to target the container*/}
      <div data-slot="experiment-container" className="z-10 h-fit w-full max-w-2xl">
        {children}
      </div>
    </div>
  )
}

export default ExperimentalLayout
