import PricingCard from '@/components/shared/Pricing/PricingCard'
import { faq, pricing } from '@/content'
import React from 'react'
import FaqAccordian from '@/components/shared/Faq/FaqAccordian'
import Link from 'next/link'
import { getWidget } from '@/lib/getWidgets'
import { getPosts } from '@/lib/getProjects'

export async function generateMetadata() {
    return {
        title: 'Услуги',
    }
}

const Pricing = async () => {
    const data = await getPosts('services')
    const faqList = await getWidget('faq.md');

    return (
        <section className='section'>
            <div className="container flex flex-col gap-8 lg:gap-16 items-center">
                <div className='text-center max-w-xl'>
                    <h2 className="heading-2">Наши тарифные планы</h2>
                    <p className='mt-4'>Когда вы готовы выйти за рамки прототипирования, Мы готовы помочь вам воплотить ваши проекты в жизнь.</p>
                </div>
                <ul className='flex flex-col lg:grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-8 self-stretch'>
                    {
                        data.map((item) => {
                            return <li key={item?.title}><PricingCard {...item} /></li>
                        })
                    }
                </ul>
                <div className='self-stretch'>
                    <div className="grid grid-cols-1 lg:grid-cols-[328px_1fr] gap-6 lg:gap-28">
                        <div className="flex flex-col gap-4">
                            <h3 className="heading-3">{faqList?.title}</h3>
                            <Link href={faq.link.href} className='link self-start'>{faq.link.label}</Link>
                        </div>
                        <FaqAccordian items={faqList?.content} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing