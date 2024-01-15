import type { Metadata } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import '@/styles/globals.css'
// import Header from '@/components/shared/Header'
// import Footer from '@/components/shared/Footer'

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
          {/* <Header /> */}
          <main className='flex-1'>{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  )
}
