import { getProject } from '@/lib/getProjects'
import Image from 'next/image';
import React from 'react';
import ReactMarkdown from 'react-markdown'
import styles from '@/components/shared/Projects/styles.module.css'
import { cn } from '@/lib/utils';
import ProjectsFooter from '@/app/portfolio/components/ProjectsFooter';
import ProjectInfo from '@/components/shared/Projects/ProjectInfo';

type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
    const project = await getProject(params.slug);

    return {
        title: project?.title,
    }
}

const ProjectTemplate = async ({ params }: Props) => {
    const project = await getProject(params.slug);

    return (
        <>
            <section className='section pb-0'>
                <div className='container'>
                    <div className='flex flex-col gap-6 lg:gap-12'>
                        <div className='flex flex-col gap-4 max-w-3xl'>
                            <h6 className="heading-6 text-foreground/80">Web design and development</h6>
                            <h2 className='heading-2'>{project?.title}</h2>
                            <p className="paragraph text-foreground/70">{project?.description}</p>
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
                        <ProjectInfo {...project?.info}/>
                    </div>
                </div>
            </section>
            <section className='section'>
                <div className="container max-w-4xl">
                    <article className='prose'>
                        <ReactMarkdown>{project?.body}</ReactMarkdown>
                    </article>
                </div>
            </section>
            <ProjectsFooter />
        </>
    )
}

export default ProjectTemplate