import React from 'react'

type Props = {
    title?: string,
    keywords: string[] | undefined
}

export default function ProjectKeys({ title, keywords }: Props) {
    return (
        <div className='flex flex-wrap items-center justify-center gap-y-4 gap-x-14 border-y border-foreground/30 py-6'>
            <h6 className="heading-6 text-link">{title || 'Keywords'}</h6>
            <ul className='flex flex-wrap gap-y-4 gap-x-14 items-center justify-center text-foreground/70 font-medium'>
                {
                    keywords?.map((key) => <li key={key} className='text-center'>{key}</li>)
                }
            </ul>
        </div>
    )
}
