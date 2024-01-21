'use client'
import React from 'react'
import styles from '@/components/shared/Projects/styles.module.css'
import ProjectInfo from '@/components/shared/Projects/ProjectInfo';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ProjectType } from '@/lib/getProjects';

type Props = {
    project: ProjectType | null | undefined
}

export default function ProjectHero({ project }: Props) {
    return (
        <section className='section pb-0'>
            <div className='container max-w-5xl'>
                <div className='flex flex-col gap-6 lg:gap-12'>
                    <div className='flex flex-col gap-4 max-w-3xl'>
                        <h6 className="heading-6 text-foreground/80">Web design and development</h6>
                        <h2 className='heading-2'>{project?.title}</h2>
                        <p className="paragraph text-foreground/70 font-medium">{project?.description}</p>
                    </div>
                    <div className={cn(styles['preview-image-wrap'])}>
                        <Image
                            src={`${project?.cover}`}
                            width={880}
                            height={516}
                            alt={`${project?.title}`}
                            className={cn(styles['preview-image'])}
                        />
                    </div>
                    <ProjectInfo {...project?.info} />
                </div>
            </div>
        </section>
    )
}