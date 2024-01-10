import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Button variant={'link'} className='gap-4'>TEST <MoveRight /></Button>
    </div>
  )
}
