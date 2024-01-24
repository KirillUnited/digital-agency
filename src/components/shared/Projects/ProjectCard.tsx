import { MoveRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils';
import styles from './styles.module.css'

type ProjectCardType = {
    title: string,
    description?: string,
    thumbnail?: string,
    link?: string
}

const ProjectCard = ({ title, description, thumbnail, link }: ProjectCardType) => {
    return (
        <div className={cn("flex flex-col gap-3 lg:gap-6 h-full")}>
            <div className={cn(styles['preview-image-wrap'])}>
                {thumbnail && <Image
                    width={620}
                    height={380}
                    src={`${thumbnail}`}
                    alt={`${title}`}
                    className={cn(styles['preview-image'])}
                />}
            </div>
            <div className={cn("flex flex-col gap-2 flex-1")}>
                <h3 className="heading-3 line-clamp-2">{title}</h3>
                {description && <p className="paragraph line-clamp-2 text-foreground/70">{description}</p>}
            </div>
            <div className="mt-auto">
                {link && <Link href={link} className={cn("link text-link-secondary hover:text-link-secondary/70")}>
                    Подробнее <MoveRightIcon />
                </Link>}
            </div>
        </div>
    )
}

export default ProjectCard