import Marketing from '@/components/shared/marketing'
import Hero from '@/components/shared/hero'
import FeaturedProjectList from '@/components/shared/project/featured-project-list'
import StepList from '@/components/shared/step/step-list'
import Faq from '@/components/shared/faq'
import { OrderSection } from '@/components/shared/order'
import { ScrollLink } from '@/components/shared/link'
import { MoveUpIcon } from 'lucide-react'
import styles from '@/components/shared/link/styles.module.css'

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
      <Hero
        links={hero_links}
        particlesEffect={true}
      />
      <StepList />
      <FeaturedProjectList />
      <Marketing />
      <OrderSection className='bg-background-secondary' />
      <Faq />
    </>
  )
}
