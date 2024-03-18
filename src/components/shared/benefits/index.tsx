import { site } from '@/content';
import React from 'react'
import BenefitCard from './benefit-card';
import Brands from '@/components/shared/_brands';

const Benefits = () => {
    const title = site.about?.benefits?.title;
    const content = site.about?.benefits?.content;

    return (
        <section className='section'>
            <div className="container flex flex-col gap-8 lg:gap-12">
                <div className='heading max-w-2xl'>
                    <h2 className="heading-2">{title}</h2>
                </div>
                <ul className='grid grid-cols-[repeat(auto-fit,_minmax(min(320px,_100%),_1fr))] gap-8'>
                    {
                        content.map((item) => {
                            return (
                                <li key={item.title}>
                                    <BenefitCard {...item} />
                                </li>
                            )
                        })
                    }
                </ul>
                <Brands />
            </div>
        </section>
    )
}

export default Benefits