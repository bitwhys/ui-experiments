import { ComponentPropsWithoutRef, ComponentPropsWithRef, ReactNode } from 'react'

import { cx } from '@/lib/utils'

const ExperimentPage = () => {
  return (
    <Surface className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
      <ul className="divide-y divide-gray-100 px-4 py-2">
        <li className="flex py-4">
          <div className="mr-4 flex-1">
            <h4 className="text-lg font-medium text-gray-900">
              The Bank of England Risks Hiking Too Far Ahead
            </h4>
            <div className="mt-1 text-sm text-gray-400">
              <span>Business</span> • <time>18 Nov 2022</time>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
              className="h-20 w-20 rounded-lg object-cover"
              alt=""
            />
          </div>
        </li>
        <li className="flex py-4">
          <div className="mr-4 flex-1">
            <h4 className="text-lg font-medium text-gray-900">
              The Bank of England Risks Hiking Too Far Ahead
            </h4>
            <div className="mt-1 text-sm text-gray-400">
              <span>Business</span> • <time>18 Nov 2022</time>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1550510537-89d5433de5cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              className="h-20 w-20 rounded-lg object-cover"
              alt=""
            />
          </div>
        </li>
        <li className="flex py-4">
          <div className="mr-4 flex-1">
            <h4 className="text-lg font-medium text-gray-900">
              The Bank of England Risks Hiking Too Far Ahead
            </h4>
            <div className="mt-1 text-sm text-gray-400">
              <span>Business</span> • <time>18 Nov 2022</time>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1587614380862-0294308ae58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="h-20 w-20 rounded-lg object-cover"
              alt=""
            />
          </div>
        </li>
      </ul>
    </Surface>
  )
}

function Surface({ children, className }: ComponentPropsWithRef<'div'>) {
  return (
    <div className={cx('overflow-hidden rounded-lg bg-white shadow-sm', className)}>
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  )
}

export default ExperimentPage
