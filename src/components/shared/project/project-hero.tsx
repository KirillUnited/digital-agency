'use client'
import React from 'react'
import styles from './styles.module.css'
import ProjectInfo from '@/components/shared/project/project-info';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ProjectType } from '@/lib/getProjects';
import PostDate from '@/components/shared/date/post-date';

type Props = {
    project: ProjectType | null | undefined
}

export default function ProjectHero({ project }: Props) {
    return (
        <section className='section pb-0'>
            <div className='container max-w-5xl'>
                <div className='flex flex-col gap-6 lg:gap-12'>
                    <div className='flex flex-col gap-4 max-w-3xl'>
                        <h6 className="heading-6 text-foreground/80">{project?.service?.join(", ")}</h6>
                        <h2 className='heading-2'>{project?.title}</h2>
                        <p className="paragraph text-foreground/70 font-medium">{project?.description}</p>
                        {project?.date && <PostDate date={`${project?.date}`}/>}
                    </div>
                    <div className={cn(styles['preview-image-wrap'])}>
                        {project?.thumbnail && <Image
                            priority
                            src={`${project?.thumbnail}`}
                            width={880}
                            height={516}
                            alt={`${project?.title}`}
                            className={cn(styles['preview-image'])}
                        />}
                    </div>
                    <ProjectInfo {...project?.info} />
                </div>
            </div>
        </section>
    )
}
