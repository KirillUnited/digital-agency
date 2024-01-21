'use client'

import Link from 'next/link'
import React from 'react'
import FaqAccordian from './FaqAccordian'

const Faq = () => {
    return (
        <section id="faq" className='section'>
            <div className="container grid grid-cols-1 lg:grid-cols-[328px_1fr] gap-6 lg:gap-28">
                <div className="flex flex-col gap-4">
                    <h3 className="heading-3">Frequently asked questions</h3>
                    <Link href='/' className='link self-start'>Contact us for more info</Link>
                </div>
                <FaqAccordian />
            </div>
        </section>
    )
}

export default Faq