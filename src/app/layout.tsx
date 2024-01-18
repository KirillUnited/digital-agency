import type { Metadata } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import '@/styles/globals.css'
import MobileMenu from '@/components/shared/MobileMenu'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/shared/Navbar'
import Logo from '@/components/shared/Logo'
import Contacts from '@/components/shared/Contacts'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   variable: "--font-sans"
// });

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: {
    default: 'Digital Agency | Разработка современных решений для бизнеса',
    template: `%s | Digital Agency | Разработка современных решений для бизнеса`,
  },
  description: 'Совмещая современный стиль, передовые технологии и инновационные подходы в интернет-маркетинге, мы разрабатываем эффективные средства для продвижения вашего бизнеса в онлайн-пространстве.',
  keywords: ['Digital', 'Agency', 'web-Разработка', 'интернет-маркетинге']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <div className='wrapper'>
          <Header />
          {/* <header className='sticky z-50 top-0 bg-background-secondary'>
            <div className="container">
              <div className="flex items-center justify-between min-h-24 py-4">
                <Logo />
                <nav className="lg:flex hidden items-center justify-end gap-12">
                  <Navbar variant='primary' />
                  <Button size={'sm'}>Обратная связь</Button>
                </nav>
                <MobileMenu />
              </div>
            </div>
          </header> */}
          <main className='flex-1'>{children}</main>
          {/* <footer>
            <section className='bg-background-secondary text-foregroundSecondary'>
              <div className="container pt-8 lg:pt-24">
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(min(400px,_100%),_1fr))] gap-6">
                  <div className='flex flex-col gap-6'>
                    <Logo />
                    <p className='paragraph lg:max-w-lg text-background-accent'>We are always open to discuss your project and improve your online presence.</p>
                    <div className='lg:mt-14 lg:max-w-lg'>
                      <Contacts />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 pb-8">
                    <h2 className="heading-2">Lets Talk!</h2>
                    <p className="paragraph lg:max-w-lg text-background-accent">We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                  </div>
                </div>
              </div>
            </section>
            <section className='bg-background text-foreground'>
              <div className="container">
                <div className="flex flex-col lg:flex-row flex-wrap items-center justify-between gap-8 py-8">
                  <p className='paragraph order-1 lg:-order-1'>Copyright {new Date().getFullYear()}, Digital Agency</p>
                  <Navbar />
                </div>
              </div>
            </section>
          </footer> */}
          <Footer />
        </div>
      </body>
    </html>
  )
}
