'use client'
import React from 'react'
import { Button } from '../../ui/button'
import { cn } from '@/lib/utils'
import FeatureEnabled from '@/assets/svg/pricing-feature-enabled.svg'
import FeatureDisabled from '@/assets/svg/pricing-feature-disabled.svg'
import Link from 'next/link'
import { MoveRightIcon } from 'lucide-react'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import CTAModal from '@/components/shared/modal/cta-modal'

type PricingCardType = {
    slug?: string,
    price?: string,
    title?: string,
    description?: string,
    subtitle?: string,
    variant?: string,
    features?: string[],
    link?: string
}

const ServiceCard = ({ price, title, description, subtitle, variant, features, slug }: PricingCardType) => {
    return (
        <div className={cn(
            'flex flex-col gap-8 lg:gap-16 bg-accent rounded-[12px] h-full px-6 lg:px-12 py-8 lg:py-16',
            { 'bg-background-secondary text-white': variant === 'primary' }
        )}>
            <div>
                <h3 className="heading-3 mb-5 flex items-center gap-2">
                    {price}
                    {subtitle && <span className={cn('paragraph text-link',
                        { 'text-primary': variant === 'primary' }
                    )}>{subtitle}</span>}
                </h3>
                <h6 className="heading-6 font-medium capitalize text-2xl line-clamp-2">
                    {title}
                </h6>
                <p className={cn('text-foreground/70 mt-2 line-clamp-2',
                    { 'text-white/70': variant === 'primary' }
                )}>
                    {description}
                </p>
            </div>
            {
                (features && features.length > 0) &&
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
                </ul>
            }
            <div className="flex flex-col gap-4 items-center mt-auto">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant={(variant === 'primary' ? 'default' : 'secondary')} className={cn(
                            'self-center',
                            {}
                        )}>Заказать</Button>
                    </DialogTrigger>
                    <CTAModal />
                </Dialog>
                {slug && <Link href={`services/${slug}`} className={cn('link',
                    { 'text-foregroundSecondary hover:text-foregroundSecondary/70': variant === 'primary' }
                )}>Подробнее <MoveRightIcon /></Link>}
            </div>
        </div>
    )
}

export default ServiceCard