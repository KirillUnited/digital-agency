import getProjects, { ProjectType, getProject } from '@/lib/getProjects'
import React from 'react';
import ReactMarkdown from 'react-markdown'
import ProjectsFooter from '@/app/portfolio/components/ProjectsFooter';
import ProjectKeys from '@/components/shared/Projects/ProjectKeys';
import ProjectHero from '@/components/shared/Projects/ProjectHero';

type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
    const project = await getProject(params.slug);

    return {
        title: project?.title,
    }
}

export async function generateStaticParams() {
    const posts = await getProjects();
   
    return posts.map((post) => ({
      slug: post?.slug,
    }))
  }

const ProjectTemplate = async ({ params }: Props) => {
    const project = await getProject(params.slug);

    return (
        <>
            <ProjectHero project={project} />
            <section className='section'>
                <div className="container max-w-4xl">
                    <article className='prose'>
                        <ReactMarkdown>{project?.body}</ReactMarkdown>
                    </article>
                </div>
            </section>
            <section className='bg-background'>
                <div className="container max-w-5xl">
                    <ProjectKeys keywords={project?.keywords} />
                </div>
            </section>
            <ProjectsFooter />
        </>
    )
}

export default ProjectTemplate