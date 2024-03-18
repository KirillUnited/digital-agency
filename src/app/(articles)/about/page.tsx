import React from 'react'
import Hero from './components/hero'
import AboutUs from './components/about-us';
import Benefits from '@/components/shared/benefits';
import MarketingCard, { MarketingCardProps } from '@/components/shared/marketing/marketing-card';
import { getCollectionItem } from '@/lib/collections';

export async function generateMetadata() {
    const data = await getCollectionItem('about', 'articles');

    return {
        title: data?.title,
    }
}

export default async function AboutPage() {
    const { hero_sections, article_image_sections }: any = await getCollectionItem('about', 'articles');
    const marketing_cols = article_image_sections.filter((section: any) => section.type === 'marketing_cols');
    const marketing_row = article_image_sections.filter((section: any) => section.type === 'marketing_row');

    return (
        <>
            {hero_sections[0].type === "marketing" &&
                <Hero title={hero_sections[0].title} desccription={hero_sections[0].description} subtitle={hero_sections[0].subtitle} image={hero_sections[0].image} />
            }
            {marketing_cols.length > 0 && (
                marketing_cols.map((section: any) => {
                    return <AboutUs key={section.title} title={section.title} content={section.content} image={section.image} />
                })
            )
            }
            {marketing_row.length > 0 && (
                <section className="section bg-accent">
                    <div className="container">
                        <div className="marketing-grid gap-14 lg:gap-24">
                            {
                                marketing_row.map((item: MarketingCardProps) => {
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
            <Benefits />
        </>
    )
}
