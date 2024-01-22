import MarketingCard from '@/components/shared/Marketing/MarketingCard'
import { site } from '@/content'
import React from 'react'

export default function Mission() {
    const content = site.about?.mission?.content;

    return (
        <section className="section bg-accent">
            <div className="container">
                <div className="marketing-grid gap-14 lg:gap-24">
                    {
                        content.map((item) => {
                            return (
                                <MarketingCard key={item.title} {...item} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
