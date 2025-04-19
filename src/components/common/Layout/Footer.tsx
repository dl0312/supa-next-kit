import React, { ReactElement } from 'react'
import { Zap } from 'lucide-react'

function Footer(): ReactElement {
  return (
    <div className="flex w-full flex-col">
      <div className="m-4 self-center text-base">
        <Zap className="mr-2 inline-block size-4" />
        Powered by Quakka
      </div>
    </div>
  )
}

export default Footer
