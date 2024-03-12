import { cn } from '@/lib/utils'
import React from 'react'
import BenefitIcon from './benefit-icon'

export interface BenefitsCardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    image?: string,
    title: string,
    description?: string
}

export default function BenefitCard({ image, title, description, className }: BenefitsCardProps) {
    return (
        <div className={cn('flex flex-col gap-5 bg-accent h-full p-6 lg:p-12', className)}>
            <BenefitIcon icon={image} />
            <div className='flex flex-col gap-3'>
                <h5 className="heading-5 md:text-2xl font-medium">{title}</h5>
                <p className="paragraph text-foreground/70">{description}</p>
            </div>
        </div>
    )
}
