import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

type PricingCardType = {
    price: string, title: string, description: string, variant?: string
}

const PricingCard = ({ price, title, description, variant }: PricingCardType) => {
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
                <li className='paragraph grid grid-cols-[auto,_1fr] items-center gap-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                        <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_174_502)" stroke-width="3" />
                        <defs>
                            <linearGradient id="paint0_linear_174_502" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                    All limited links
                </li>
                <li className='paragraph grid grid-cols-[auto,_1fr] items-center gap-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                        <g style={{ "mixBlendMode": "luminosity" }}>
                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#FC80AD" />
                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" stroke="url(#paint0_linear_174_512)" stroke-width="3" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_174_512" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                    Own analytics platform
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