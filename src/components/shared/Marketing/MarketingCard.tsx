import { MoveRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css';
import { cn } from '@/lib/utils';

interface MarketingCardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string,
    subtitle?: string,
    description?: string,
    image?: string,
    link?: string
}

const MarketingCard = ({ subtitle, title, description, image, link, className }: MarketingCardProps) => {
    return (
        <div className={cn(
            "grid lg:flex",
            styles.card,
            className
        )}>
            <Image src={`${image}`} width={515} height={336} alt={title} className={cn(styles["card-image"])} />
            <div className={cn(
                styles["card-content"]
            )}>
                {subtitle && <h6 className="text-base lg:text-lg font-medium">{subtitle}</h6>}
                <h3 className="heading-3">{title}</h3>
                <p className="paragraph text-foreground/70">{description}</p>
                {link && <Link href={`${link}`} className='link'>Подробнее <MoveRightIcon /></Link>}
            </div>
        </div>
    )
}

export default MarketingCard