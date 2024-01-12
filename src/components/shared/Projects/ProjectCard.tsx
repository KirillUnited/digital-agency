import { MoveRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css';
import { cn } from '@/lib/utils';

type ProjectCardType = {
    title: string,
    description?: string,
    cover?: string,
    link?: string
}

const ProjectCard = ({ title, description, cover, link }: ProjectCardType) => {
    return (
        <div className={cn(
            styles["card"],
        )}>
            <Image
                fill
                src={`${cover}`}
                alt={`${title}`}
                className={`${styles["card-image"]}`}
            />
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
                    {link && <Link href={link} className={cn(
                        "link",
                        styles["card-link"]
                    )}>
                        View project <MoveRightIcon />
                    </Link>}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard