import { brands } from '@/content'
import React from 'react'
import BrandList from './brand-list'
import BrandCarousel from './brand-carousel'

export default function Brands() {
    return (
        <div className='flex flex-wrap items-center justify-center gap-7 lg:gap-x-14'>
            <div className=''>
                <h3 className="heading-3">{brands?.count}</h3>
                <p className="paragraph text-foreground/70">{brands?.title}</p>
            </div>
            <BrandCarousel brands={brands.list} />
        </div>
    )
}
