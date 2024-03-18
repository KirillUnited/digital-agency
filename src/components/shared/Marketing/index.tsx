import React from 'react'
import MarketingCard from './marketing-card'
import { getCollection } from '@/lib/collections'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Marketing = async () => {
    const data = await getCollection('services');

    return (
        <section className="section bg-accent">
            <div className="container">
                <div className="heading items-center mb-8 lg:mb-12 max-w-3xl">
                    <h2 className="heading-2">Реализуем проекты с надежными технологиями и эффективным маркетингом.</h2>
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
                    <Button asChild variant={'secondary'}>
                        <Link href={'/services'} className='self-center'>Смотреть ещё</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Marketing