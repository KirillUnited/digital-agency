import { MoveRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css';
import { cn } from '@/lib/utils';
import { ProjectType } from '@/lib/getProjects';

const FeaturedProjectCard = ({ title, description, thumbnail, link, slug }: ProjectType) => {
    return (
        <div className={cn(
            styles["card"],
        )}>
            {thumbnail && <Image
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={`${thumbnail}`}
                alt={`${title}`}
                className={`${styles["card-image"]}`}
            />}
            <div className={cn(
                "flex items-end",
                styles["card-body"],
            )}>
                <div className={cn(
                    "flex flex-col gap-4",
                    styles["card-content"],
                )}>
                    <h6 className="heading-6 line-clamp-2">{title}</h6>
                    {description && <p className="paragraph line-clamp-2">{description}</p>}
                    {slug && <Link href={`/portfolio/${slug}`} className={cn(
                        "link",
                        styles["card-link"]
                    )}>
                        Подробнее <MoveRightIcon />
                    </Link>}
                </div>
            </div>
        </div>
    )
}

export default FeaturedProjectCard