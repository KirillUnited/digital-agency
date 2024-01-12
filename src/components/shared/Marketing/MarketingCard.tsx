import { MoveRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css';
import { cn } from '@/lib/utils';

type MarketingCardType = {
    title: string,
    description?: string,
    image: string
}

const MarketingCard = ({ title, description, image }: MarketingCardType) => {
    return (
        <div className={cn(
            "grid lg:flex",
            styles.card
        )}>
            <Image src={image} width={515} height={336} alt={title} className={cn(styles["card-image"])} />
            <div className="flex flex-col gap-4">
                <h3 className="heading-3">{title}</h3>
                <p className="paragraph text-foreground/70">{description}</p>
                <Link href={'/'} className='link'>Подробнее <MoveRightIcon /></Link>
            </div>
        </div>
    )
}

export default MarketingCard