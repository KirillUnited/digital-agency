import Marketing from '@/components/shared/Marketing/Marketing'
import Hero from '@/components/shared/Hero/Hero'
import Projects from '@/components/shared/Projects/Projects'
import Steps from '@/components/shared/Steps/Steps'
import Faq from '@/components/shared/Faq/Faq'

export default function Home() {
  return (
    <>
      <Hero />
      <Steps />
      <Projects />
      <Marketing />
      <Faq />
    </>
  )
}
