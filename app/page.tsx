import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Button>Primary</Button>
      <Button variant={'secondary'}>Button text</Button>
      <h1 className="heading-1">Sample text helps you understand how real text may look.</h1>
      <h2 className="heading-2">Sample text helps you understand how real text may look.</h2>
      <h3 className="heading-3">Sample text helps you understand how real text may look.</h3>
      <h4 className="heading-4">Sample text helps you understand how real text may look.</h4>
      <h5 className="heading-5">Sample text helps you understand how real text may look.</h5>
      <h6 className="heading-6">Sample text helps you understand how real text may look.</h6>
      <p className="paragraph">Sample text helps you understand how real text may look.</p>
    </div>
  )
}
