import React from 'react'
import Benefits from '@/components/shared/benefits'
import Faq from '@/components/shared/Faq/Faq'
import MarketingCard, { MarketingCardProps } from '@/components/shared/Marketing/MarketingCard'
import { cn } from '@/lib/utils'
import styles from './styles.module.css'
import { getPost } from '@/lib/getProjects'
import Hero from '@/components/shared/Hero/Hero'
import AboutUs from '../about/components/AboutUs/AboutUs'

export async function generateMetadata() {
    const data = await getPost('features', 'articles');

    return {
        title: data?.title
    }
}

export default async function FeaturesPage() {
    const { hero_sections, article_image_sections }: any = await getPost('features', 'articles');
    const marketing_cols = article_image_sections.filter((section: any) => section.type === 'marketing_cols');
    const marketing_row = article_image_sections.filter((section: any) => section.type === 'marketing_row');

    return (
        <>
            {hero_sections[0].type === "hero" &&
                <Hero
                    title={hero_sections[0].title}
                    description={hero_sections[0].description}
                    image={hero_sections[0].image}
                    links={hero_sections[0].hero_links}
                />
            }
            <Benefits />
            {marketing_cols.length > 0 && (
                marketing_cols.map((section: any) => {
                    return <AboutUs key={section.title} title={section.title} content={section.content} image={section.image} />
                })
            )
            }
            {marketing_row.length > 0 &&
                <div className="marketing-grid">
                    {
                        marketing_row.map((item: MarketingCardProps) => {
                            return (
                                <section key={item.title} className={cn("section", styles.section)}>
                                    <MarketingCard {...item} className='container' />
                                </section>
                            )
                        })
                    }
                </div>
            }
            <Faq />
        </>
    )
}
