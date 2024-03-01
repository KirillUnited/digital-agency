import React from 'react'
import MarketingCard from './MarketingCard'
import { marketing } from '@/content'
import { getPosts } from '@/lib/getProjects'
import Link from 'next/link'
import { MoveRightIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Marketing = async () => {
    const data = await getPosts('services');

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