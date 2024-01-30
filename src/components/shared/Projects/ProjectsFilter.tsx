import { badgeVariants } from '@/components/ui/badge'
import { pricing } from '@/content'
import Link from 'next/link'
import React from 'react'

export default function ProjectsFilter() {
    return (
        <div className='flex flex-wrap items-center justify-center gap-4 mb-12'>
            <ul className='flex flex-wrap gap-x-8 gap-y-3 items-center justify-center text-foreground/70 hover:text-foreground/70 text-base lg:text-lg capitalize'>
                <li>
                    <Link href={`/portfolio`} className={badgeVariants({ variant: 'default' })}>Все категории</Link>
                </li>
                {
                    pricing?.map((item) => <li key={item.title} className=''>
                        <Link href={`/`} className={badgeVariants({ variant: 'secondary' })}>{item.title}</Link>
                    </li>)
                }
            </ul>
        </div>
    )
}
