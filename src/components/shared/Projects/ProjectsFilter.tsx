'use client'
import { badgeVariants } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import React from 'react'
import styles from './styles.module.css'
import { cva } from 'class-variance-authority'
import { ProjectType } from '@/lib/getProjects'

type Props = {
    selectedFilter: string,
    onSelect(filter: string): void,
    projects: Array<ProjectType>
}

const filterItemStyle = cva(
    "leading-6 whitespace-nowrap cursor-pointer transition-all duration-300",
    {
        variants: {
            variant: {
                primary: badgeVariants({ variant: 'default', className: "sm:text-base" }),
                secondary: badgeVariants({ variant: 'secondary' })
            }
        }
    }
)

export default function ProjectsFilter({ selectedFilter, onSelect, projects }: Props) {
    const splitServices = projects?.flatMap((project) => project?.service);
    const services = Array.from(new Set(splitServices));

    return (
        <div className={cn(styles['filter'])}>
            <ul className={cn(styles['filter-list'])}>
                <li>
                    <a className={filterItemStyle({
                        variant: !selectedFilter ? "primary" : "secondary"
                    })}
                        onClick={() => onSelect('')}
                    >
                        Все категории
                    </a>
                </li>
                {
                    services?.map((item, i) => {
                        const activeFilter = selectedFilter === item;

                        return (
                            <li key={i} className=''>
                                <a className={filterItemStyle({
                                    variant: activeFilter ? "primary" : "secondary"
                                })}
                                    onClick={() => onSelect(`${item}`)}
                                >
                                    {`${item}`}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
