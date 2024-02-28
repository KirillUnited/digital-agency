'use server'
import React, { useState } from 'react'
import { OrderForm } from '.'
import { MoveRightIcon } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import styles from './styles.module.css'
import Image from 'next/image'
import { getWidget } from '@/lib/getWidgets'

export default async function OrderSection() {
    let data;
    try {
        data = await getWidget('order-section.md');
    } catch (error) {
        console.error(error)
    }

    if (!data) return null;

    return (
        <section id="order_section" className={cn("section", styles.section)}>
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
                        <h2 className="heading-2">{data?.title}</h2>
                        <p className={cn("paragraph", styles.description)}>
                            {data?.description}
                        </p>
                    </div>
                </div>
                <div className={cn(styles.content)}>
                    <div className={cn(styles.heading)}>
                        <h5 className={cn("heading-5", styles.title)}>{data?.form_title}</h5>
                        <p className={cn("paragraph", styles.description)}>
                            {data?.form_description}
                        </p>
                    </div>
                    <div className={cn(styles.body)}>
                        <OrderForm className={cn(styles.form)} />
                    </div>
                    <div className={cn(styles.footer)}>
                        {/* <Link href={`/about`} className={cn('link', styles.link)}>
                            Свяжитесь с нами <MoveRightIcon />
                        </Link> */}
                        <p className='text-foregroundSecondary/70 text-sm'>Нажимая кнопку, ты разрешаешь обработку персональных данных и соглашаешься с <Link href={`/posts/privacy-policy`} className={cn('link inline', styles.link)}>политикой конфиденциальности.</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
