import { brands } from '@/content'
import Image from 'next/image'
import React from 'react'

export default function Brands() {
    return (
        <div className='flex flex-wrap items-center justify-center gap-7 lg:gap-x-14'>
            <div className=''>
                <h3 className="heading-3">{brands?.count}</h3>
                <p className="paragraph text-foreground/70">{brands?.title}</p>
            </div>
            <ul className='flex flex-wrap gap-4 lg:gap-10 items-center justify-center'>
                {
                    brands?.list?.map((item) => {
                        return (
                            <li key={item}>
                                <Image
                                    src={`${item}`}
                                    width={161}
                                    height={32}
                                    alt=''
                                    className='object-contain'
                                    quality={100}
                                />
                            </li>
                        )
                    }
                    )
                }
            </ul>
        </div>
    )
}
