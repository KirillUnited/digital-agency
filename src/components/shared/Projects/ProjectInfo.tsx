import React from 'react'

type ProjectInfoProps = {
    [propName: string]: string
}

export default function ProjectInfo({ client, service, deliverable }: ProjectInfoProps) {
    return (
        <div className='border-b border-foreground/30 pb-4 lg:pb-8'>
            <ul className='flex flex-wrap justify-between gap-3'>
                <li>
                    <span className='text-foreground/80 font-medium'>Client</span>
                    {client && <h6 className='heading-6'>{client}</h6>}
                </li>
                <li>
                    <span className='text-foreground/80 font-medium'>Service</span>
                    {service && <h6 className='heading-6'>{service}</h6>}
                </li>
                <li>
                    <span className='text-foreground/80 font-medium'>Deliverable</span>
                    {deliverable && <h6 className='heading-6'>{deliverable}</h6>}
                </li>
            </ul>
        </div>
    )
}
