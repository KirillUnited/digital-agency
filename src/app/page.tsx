import Marketing from '@/components/shared/marketing'
import Hero from '@/components/shared/hero'
import FeaturedProjects from '@/components/shared/Projects/FeaturedProjects'
import Steps from '@/components/shared/Steps/Steps'
import Faq from '@/components/shared/faq'
import { OrderSection } from '@/components/shared/order'

const hero_links = [
  {
    CTA: true,
    label: 'Портфолио',
    link: '/portfolio'
  },
  {
    CTA: false,
    label: 'Подробнее',
    link: '/services'
  }
]

export default function Home() {
  return (
    <>
      <Hero links={hero_links} />
      <Steps />
      <FeaturedProjects />
      <Marketing />
      <Faq />
      <OrderSection />
    </>
  )
}
