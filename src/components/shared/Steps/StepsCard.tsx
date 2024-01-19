import Image from 'next/image'
import React from 'react'

type StepsCardType = {
    step: string,
    title: string,
    description?: string
}
const StepsCard = ({ step, title, description }: StepsCardType) => {
    return (
        <div className='flex flex-col sm:items-stretch gap-4' key={step}>
            <div className="relative w-12 h-12 bg-link rounded-md grid place-items-center">
                <Image
                    src={'/images/step.svg'}
                    alt='step'
                    className='absolute top-0 left-0 w-full h-full'
                    width={50}
                    height={50}
                />
                <span className='relative text-white text-lg font-medium'>{step}</span>
            </div>
            <div className='flex flex-col gap-2'>
                <h5 className="heading-5 font-medium">{title}</h5>
                <p className="paragraph text-foreground/70">{description}</p>
            </div>
        </div>
    )
}

export default StepsCard