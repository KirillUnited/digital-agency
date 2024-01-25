import { contacts } from '@/content'
import React from 'react'

const Contacts = () => {
    return (
        <div className='bg-primary text-foreground px-4 lg:px-9 py-4'>
            <ul className='flex flex-wrap gap-6'>
                {
                    contacts.map(({ title, href, label }) => {
                        return (
                            <li key={href}>
                                <p className='text-lg font-medium'>{title}</p>
                                <a href={href} className='hover:text-foreground/70'>{label}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Contacts