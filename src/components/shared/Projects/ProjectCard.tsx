import { MoveRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css';

type ProjectCardType = {
    title: string,
    description?: string,
    cover?: string
}

const ProjectCard = ({ title, description, cover }: ProjectCardType) => {
    return (
        <div className='relative' key={title}>
            <Image
                fill
                src={`${cover}`}
                alt={`${title}`}
                className='object-cover w-full transition-all duration-700'
            />
            <div className={`${styles["card-content"]}`}>
                <h6 className="heading-6">{title}</h6>
                <p className="paragraph">{description}</p>
                <Link href={'/'} className='link text-primary hover:text-primary/70'>View project <MoveRightIcon /></Link>
            </div>
        </div>
    )
}

export default ProjectCard