import React from 'react'
import MarketingCard from './MarketingCard'
import { marketing } from '@/content'
import { getPosts } from '@/lib/getProjects'

const Marketing = async () => {
    const data = await getPosts('services');

    return (
        <section className="section bg-accent">
            <div className="container">
                <div className="lg:text-center flex flex-col items-center mb-8 lg:mb-12">
                    <h2 className="heading-2 max-w-3xl">Реализуем проекты с надежными технологиями и эффективным маркетингом.</h2>
                </div>
                <div className="marketing-grid gap-12">
                    {
                        data.map((item, index) => <MarketingCard
                            key={index}
                            title={item?.title}
                            description={item?.description}
                            image={item?.thumbnail}
                            imageFit='contain'
                            link={`/services/${item?.slug}`}
                        />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Marketing