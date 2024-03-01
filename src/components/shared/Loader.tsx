import { Loader2 } from 'lucide-react'
import React from 'react'

const Loader = () => {
  return (
    <div className="fixed grid place-items-center top-0 left-0 right-0 bottom-0 bg-muted/70">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>
  )
}

export default Loader