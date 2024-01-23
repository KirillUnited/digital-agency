import { MoveRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css';
import { cn } from '@/lib/utils';

interface MarketingCardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string,
    description: string,
    subtitle?: string,
    image?: string,
    link?: string,
    imageFit?: string
}

const MarketingCard = ({ subtitle, title, description, image, link, className, imageFit }: MarketingCardProps) => {
    return (
        <div className={cn(
            "marketing-card grid lg:flex",
            styles.card,
            className
        )}>
            <Image src={`${image}`} width={515} height={336} alt={title} className={cn(styles["card-image"],
                {
                    [styles["card-image-contain"]]: imageFit === 'contain'
                }
            )} />
            <div className={cn(
                styles["card-content"]
            )}>
                {subtitle && <span className="text-base lg:text-lg font-medium">{subtitle}</span>}
                <h3 className="heading-3">{title}</h3>
                <p className="paragraph text-foreground/70">{description}</p>
                {link && <Link href={`${link}`} className='link'>Подробнее <MoveRightIcon /></Link>}
            </div>
        </div>
    )
}

export default MarketingCard