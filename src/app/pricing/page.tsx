import PricingCard from '@/components/shared/Pricing/PricingCard'
import { pricing } from '@/content'
import React from 'react'
import FaqAccordian from '@/components/shared/Faq/FaqAccordian'
import Link from 'next/link'

const Pricing = () => {
    return (
        <section className='section'>
            <div className="container flex flex-col gap-8 lg:gap-16 items-center">
                <div className='text-center max-w-xl'>
                    <h2 className="heading-2">Our Pricing Plans</h2>
                    <p className='mt-4'>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
                </div>
                <ul className='flex flex-col lg:grid grid-cols-[repeat(auto-fit,_minmax(406px,_1fr))] gap-8 self-stretch'>
                    {
                        pricing.map((item) => {
                            return <li key={item.title}><PricingCard {...item} /></li>
                        })
                    }
                </ul>
                <div className='self-stretch'>
                    <div className="grid grid-cols-1 lg:grid-cols-[328px_1fr] gap-6 lg:gap-28">
                        <div className="flex flex-col gap-4">
                            <h3 className="heading-3">Frequently asked questions</h3>
                            <Link href='/contact' className='link self-start'>Contact us for more info</Link>
                        </div>
                        <FaqAccordian />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing