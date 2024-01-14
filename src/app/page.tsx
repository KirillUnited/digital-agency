import Marketing from '@/components/shared/Marketing/Marketing'
import Hero from '@/components/shared/Hero/Hero'
import Projects from '@/components/shared/Projects/Projects'
import Steps from '@/components/shared/Steps/Steps'
import Faq from '@/components/shared/Faq/Faq'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

export default function Home() {
  return (
    <>
    <Header/>
      <Hero />
      <Steps />
      <Projects />
      <Marketing />
      <Faq />
      <Footer/>
    </>
  )
}
