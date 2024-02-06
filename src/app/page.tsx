import Marketing from '@/components/shared/Marketing/Marketing'
import Hero from '@/components/shared/Hero/Hero'
import FeaturedProjects from '@/components/shared/Projects/FeaturedProjects'
import Steps from '@/components/shared/Steps/Steps'
import Faq from '@/components/shared/Faq/Faq'
import { OrderSection } from '@/components/shared/Form'

export default function Home() {
  return (
    <>
      <Hero />
      <Steps />
      <FeaturedProjects />
      <Marketing />
      <Faq />
      <OrderSection />
    </>
  )
}
