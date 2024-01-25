import { pricing } from '@/content'
import React from 'react'

export default function ProjectsFilter() {
    return (
        <div className='flex flex-wrap items-center justify-center gap-4 mb-12'>
            <ul className='flex flex-wrap gap-x-8 gap-y-3 items-center justify-center text-foreground/70 text-base lg:text-lg capitalize'>
                <li className='link'>Все категории</li>
                {
                    pricing?.map((item) => <li key={item.title} className=''>{item.title}</li>)
                }
            </ul>
        </div>
    )
}
