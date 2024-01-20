import { MoveRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils';
import styles from './styles.module.css'

type ProjectPreviewType = {
    title: string,
    description?: string,
    cover?: string,
    link?: string
}

const ProjectPreview = ({ title, description, cover, link }: ProjectPreviewType) => {
    return (
        <div className={cn("flex flex-col gap-3 lg:gap-6 h-full")}>
            <div className={cn(styles['preview-image'])}>
                <Image
                    width={620}
                    height={380}
                    src={`${cover}`}
                    alt={`${title}`}
                    className={cn("w-full object-cover aspect-video")}
                />
            </div>
            <div className={cn("flex flex-col lg:gap-2 flex-1")}>
                <h3 className="heading-3 line-clamp-2">{title}</h3>
                {description && <p className="paragraph line-clamp-2 text-foreground/70">{description}</p>}
            </div>
            <div className="mt-auto">
                {link && <Link href={link} className={cn("link text-link-secondary hover:text-link-secondary/70")}>
                    View project <MoveRightIcon />
                </Link>}
            </div>
        </div>
    )
}

export default ProjectPreview