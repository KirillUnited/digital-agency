'use client'
import { badgeVariants } from '@/components/ui/badge'
import { navbar, pricing } from '@/content'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'
import { usePathname } from 'next/navigation'
import { cva } from 'class-variance-authority'

const filterItemStyle = cva(
    "leading-6 whitespace-nowrap",
    {
        variants: {
            variant: {
                primary: badgeVariants({ variant: 'default', className: "sm:text-base" }),
                secondary: badgeVariants({ variant: 'secondary' })
            }
        }
    }
)

export default function ProjectsFilter() {
    const pathname = usePathname();
    const PROJECTS_ROUTE = navbar.filter((item) => item.label === 'Портфолио')[0].route;
    const allFilters = pathname === PROJECTS_ROUTE;

    return (
        <div className={cn(styles['filter'])}>
            <ul className={cn(styles['filter-list'])}>
                <li>
                    <Link href={`${PROJECTS_ROUTE}`} className={filterItemStyle({
                        variant: allFilters ? "primary" : "secondary"
                    })}>
                        Все категории
                    </Link>
                </li>
                {
                    pricing?.map((item) => {
                        const activeFilter = pathname === item.link;

                        return (
                            <li key={item.title} className=''>
                                <Link href={`${item.link}`} className={filterItemStyle({
                                    variant: activeFilter ? "primary" : "secondary"
                                })}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
