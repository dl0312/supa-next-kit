import React, { ReactElement, ReactNode } from 'react'

import { APPLICATION_NAME } from '@/constants/config'

import Footer from './Footer'

interface Props {
  children: ReactNode
}

function Layout({ children }: Props): ReactElement {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <div className="mx-auto my-0 flex min-h-screen w-full max-w-screen-lg flex-col items-center justify-between">
        <div>
          <div className="sticky top-0 z-10 flex w-full flex-col items-center justify-between">
            <div className="flex w-full items-center justify-between p-4">
              <div className="text-xl font-bold">{APPLICATION_NAME}</div>
            </div>
          </div>
          <main className="flex w-full flex-col items-center p-4">{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
