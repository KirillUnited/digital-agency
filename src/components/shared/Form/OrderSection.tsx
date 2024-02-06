import React from 'react'
import { OrderForm } from '.'
import { MoveRightIcon } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import styles from './styles.module.css'
import Image from 'next/image'

export default function OrderSection() {
    return (
        <section className={cn("section", styles.section)}>
            <div className={cn("container", styles.container)}>
                <div className={cn(styles['image-wrap'])}>
                    <Image
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt='Digital Agency'
                        src={`/images/contact-form-bg.png`}
                        className={cn(styles.image)}
                    />
                    <div className={cn(styles.heading, "relative h-full bg-background-secondary/50 pb-8 lg:pb-16")}>
                        <h2 className="heading-1">Создание великолепных веб-сайтов для ранних стартапов</h2>
                        <p className={cn("paragraph", styles.description)}>
                            Совмещая современный стиль, передовые технологии и инновационные подходы в интернет-маркетинге, мы разрабатываем эффективные средства для продвижения вашего бизнеса в онлайн-пространстве.
                        </p>
                    </div>
                </div>
                <div className={cn(styles.content)}>
                    <div className={cn(styles.heading)}>
                        <h5 className={cn("heading-5", styles.title)}>Отправить запрос</h5>
                        <p className={cn("paragraph", styles.description)}>
                            Eaque voluptates voluptas enim. Pariatur consequatur et rerum eius aut ratione.
                        </p>
                    </div>
                    <div className={cn(styles.body)}>
                        <OrderForm className={cn(styles.form)} />
                    </div>
                    <div className={cn(styles.footer)}>
                        <Link href={`/about`} className={cn('link', styles.link)}>
                            Свяжитесь с нами <MoveRightIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
