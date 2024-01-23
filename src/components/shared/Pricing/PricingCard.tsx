import React from 'react'
import { Button } from '../../ui/button'
import { cn } from '@/lib/utils'
import FeatureEnabled from '@/assets/svg/pricing-feature-enabled.svg'
import FeatureDisabled from '@/assets/svg/pricing-feature-disabled.svg'

type PricingCardType = {
    price: string, title: string, description: string, variant?: string, features?: string[]
}

const PricingCard = ({ price, title, description, variant, features }: PricingCardType) => {
    return (
        <div className={cn(
            'flex flex-col gap-8 lg:gap-16 bg-accent rounded-[12px] h-full px-6 lg:px-12 py-8 lg:py-16',
            { 'bg-background-secondary text-white': variant === 'primary' }
        )}>
            <div>
                <h3 className="heading-3 mb-5 flex items-center gap-2">
                    {price}
                    <span className={cn('paragraph text-link',
                        { 'text-primary': variant === 'primary' }
                    )}>Multi Design</span>
                </h3>
                <h6 className="heading-6 font-medium capitalize text-2xl">
                    {title}
                </h6>
                <p className={cn('text-foreground/70 mt-2',
                    { 'text-white/70': variant === 'primary' }
                )}>
                    {description}
                </p>
            </div>
            <ul className='flex flex-col gap-4'>
                {
                    features?.map((item) => {
                        return (
                            <li key={item} className='paragraph grid grid-cols-[auto,_1fr] items-center gap-4'>
                                <FeatureEnabled />
                                {item}
                            </li>
                        )
                    })
                }
                <li className='paragraph grid grid-cols-[auto,_1fr] items-center gap-4'>
                    <FeatureDisabled />
                    Disabled feature
                </li>
            </ul>
            <Button variant={(variant === 'primary' ? 'default' : 'secondary')} className={cn(
                'mt-auto self-center',
                {}
            )}>Get started</Button>
        </div>
    )
}

export default PricingCard