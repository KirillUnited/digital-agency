import { brands } from '@/content'
import Image from 'next/image'
import React from 'react'
import styles from './styles.module.css'
import { cn } from '@/lib/utils'

export const BrandList = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) => (
    <ul
        className={cn(
            styles.list,
            className
        )}
        {...props}
    >
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
);

export default function Brands() {
    return (
        <div className='flex flex-wrap items-center justify-center gap-7 lg:gap-x-14'>
            <div className=''>
                <h3 className="heading-3">{brands?.count}</h3>
                <p className="paragraph text-foreground/70">{brands?.title}</p>
            </div>
            <div className='overflow-hidden'>
                <BrandList />
            </div>
        </div>
    )
}
