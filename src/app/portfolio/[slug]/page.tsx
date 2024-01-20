import { getProject } from '@/lib/getProjects'
import Image from 'next/image';
import React from 'react';
import styles from '@/components/shared/Projects/styles.module.css'
import { cn } from '@/lib/utils';

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
        <section className='section'>
            <div className='container'>
                <h6 className="heading-6 text-foreground/80">Web design and development</h6>
                <h2 className='heading-2'>{project?.title}</h2>
                <p className="paragraph text-foreground/70">{project?.description}</p>
                <div className={cn(styles['preview-image'])}>
                    <Image
                        src={`${project?.cover}`}
                        width={880}
                        height={516}
                        alt={`${project?.title}`}
                    />
                </div>
            </div>
        </section>
    )
}

export default ProjectTemplate