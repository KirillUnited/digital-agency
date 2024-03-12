import Marketing from '@/components/shared/marketing'
import Hero from '@/components/shared/hero'
import FeaturedProjectList from '@/components/shared/project/featured-project-list'
import StepList from '@/components/shared/step/step-list'
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
      <StepList />
      <FeaturedProjectList />
      <Marketing />
      <Faq />
      <OrderSection />
    </>
  )
}
