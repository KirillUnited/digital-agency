import { getPost, getPosts } from '@/lib/getProjects'
import React from 'react';
import ReactMarkdown from 'react-markdown'
import ProjectsFooter from '@/app/portfolio/components/ProjectsFooter';
import ProjectKeys from '@/components/shared/Projects/ProjectKeys';
import Hero from '@/components/shared/Hero/Hero';

type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
    const post = await getPost(params.slug, 'services');

    return {
        title: post?.title,
    }
}

export async function generateStaticParams() {
    const posts = await getPosts('services');

    return posts.map((post) => ({
        slug: post?.slug,
    }))
}

const ServicePage = async ({ params }: Props) => {
    const post = await getPost(params.slug, 'services');

    return (
        <>
            <Hero
                {...post}
                links={post?.hero_links}
            />
            <section className='section'>
                <div className="container max-w-4xl">
                    <article className='prose'>
                        <ReactMarkdown>{post?.body}</ReactMarkdown>
                    </article>
                </div>
            </section>
            <section className='bg-background'>
                <div className="container max-w-5xl">
                    <ProjectKeys title='Тэги' keywords={post?.features} />
                </div>
            </section>
            <ProjectsFooter />
        </>
    )
}

export default ServicePage