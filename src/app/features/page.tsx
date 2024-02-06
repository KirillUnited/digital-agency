import React from 'react'
import Hero from './components/Hero'
import Benefits from '@/app/about/components/Benefits'
import Faq from '@/components/shared/Faq/Faq'
import { site } from '@/content'
import MarketingCard from '@/components/shared/Marketing/MarketingCard'
import { cn } from '@/lib/utils'
import styles from './styles.module.css'

export async function generateMetadata() {
    const title = site?.features?.hero?.pageTitle;
    
    return {
        title
    }
}

export default function FeaturesPage() {
    return (
        <>
            <Hero />
            <Benefits />
            <div className="marketing-grid">
                {
                    site.features?.content.map((item, index) => {
                        return (
                            <section key={item.title} className={cn("section", styles.section)}>
                                <MarketingCard {...item} className='container' />
                            </section>
                        )
                    })
                }
            </div>
            <Faq />
        </>
    )
}
