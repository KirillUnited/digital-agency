import React from 'react'

type Props = {
    keywords: string[] | undefined
}

export default function ProjectKeys({ keywords }: Props) {
    return (
        <div className='grid grid-cols-[auto,_1fr] items-center gap-4 lg:gap-14 border-y border-foreground/30 py-6'>
            <h6 className="heading-6 text-link">Keywords</h6>
            <ul className='flex flex-wrap gap-4 lg:gap-14 items-center'>
                {
                    keywords?.map((key) => <li key={key} className='text-foreground/70 font-medium'>{key}</li>)
                }
            </ul>
        </div>
    )
}
