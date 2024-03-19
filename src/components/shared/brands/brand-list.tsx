import Image from 'next/image'
import React from 'react'
import styles from './styles.module.css'
import { cn } from '@/lib/utils'

export interface IBrandList extends React.HTMLAttributes<HTMLElement> {
    brands: string[]
}
const BrandList = ({
    brands,
    className,
    ...props
}: IBrandList) => (
    <ul
        className={cn(
            styles.list,
            className
        )}
        {...props}
    >
        {
            brands?.map((item) => {
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

export default BrandList;