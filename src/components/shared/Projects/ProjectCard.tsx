import { MoveRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css';

type ProjectCardType = {
    title: string,
    description?: string,
    cover?: string,
    link?: string
}

const ProjectCard = ({ title, description, cover, link }: ProjectCardType) => {
    return (
        <div className='relative h-full' key={title}>
            <Image
                fill
                src={`${cover}`}
                alt={`${title}`}
                className={`${styles["card-image"]}`}
            />
            <div className={`${styles["card-content"]}`}>
                <h6 className="heading-6">{title}</h6>
                {description && <p className="paragraph">{description}</p>}
                {link && <Link href={link} className='link text-primary hover:text-primary/70'>View project <MoveRightIcon /></Link>}
            </div>
        </div>
    )
}

export default ProjectCard