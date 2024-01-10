import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','600', '700'],
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
      <body className={poppins.variable}>{children}</body>
    </html>
  )
}
