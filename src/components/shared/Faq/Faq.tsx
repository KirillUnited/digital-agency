// 'use client'

import Link from 'next/link'
import React from 'react'
import FaqAccordian from './FaqAccordian'
import { faq, site } from '@/content'
import { getWidget } from '@/lib/getWidgets'

const Faq = async() => {
    const faqList = await getWidget('faq.md');

    return (
        <section id="faq" className='section'>
            <div className="container grid grid-cols-1 lg:grid-cols-[328px_1fr] gap-6 lg:gap-28">
                <div className="flex flex-col gap-4">
                    <h3 className="heading-3">{faqList?.title}</h3>
                    <Link href={faq.link.href} className='link self-start'>{faq.link.label}</Link>
                </div>
                <FaqAccordian />
            </div>
        </section>
    )
}

export default Faq