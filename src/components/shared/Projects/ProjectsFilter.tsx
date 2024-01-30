'use client'
import { badgeVariants } from '@/components/ui/badge'
import { pricing } from '@/content'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'
import { usePathname } from 'next/navigation'
import { cva } from 'class-variance-authority'

const filterItemStyle = cva(
    cn(badgeVariants({ variant: 'secondary' })),
    {
        variants: {
            variant: {
                primary: ""
            },
            state: {
                active: [cn(badgeVariants({ variant: 'default' })), "text-base lg:text-lg"]
            }
        }
    }
)

export default function ProjectsFilter() {
    const pathname = usePathname();
    const allFilters = pathname === '/portfolio';

    return (
        <div className={cn(styles['filter'])}>
            <ul className={cn(styles['filter-list'])}>
                <li>
                    <Link href={`/portfolio`} className={cn(badgeVariants({ variant: 'default' }),
                        "leading-6",
                        {
                            "text-base lg:text-lg": allFilters
                        }
                    )}>Все категории</Link>
                </li>
                {
                    pricing?.map((item) => {
                        const activeFilter = pathname === item.link;

                        return (
                            <li key={item.title} className=''>
                                <Link href={`${item.link}`} className={cn(badgeVariants({ variant: 'secondary' }),
                                    "leading-6",
                                    {
                                        "text-base lg:text-lg": activeFilter
                                    }
                                )}>{item.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
