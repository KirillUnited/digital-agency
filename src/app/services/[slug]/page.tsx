import { getPost, getPosts } from '@/lib/getProjects'
import React from 'react';
import ReactMarkdown from 'react-markdown'
import ProjectsFooter from '@/app/portfolio/components/ProjectsFooter';
import ProjectKeys from '@/components/shared/Projects/ProjectKeys';
import Hero from '@/components/shared/Hero/Hero';
import ProcessSteps from './components/ProcessSteps';
import ServiceFeature from '../../../components/shared/Pricing/ServiceFeature/ServiceFeature';

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
    const hasFeatures = post?.features;

    return (
        <>
            <Hero
                {...post}
                image={post?.thumbnail}
                links={post?.hero_links}
            />
            {hasFeatures &&
                <section className='section bg-secondary'>
                    <div className="container">
                        <ul className='grid grid-cols-[repeat(auto-fill,_minmax(min(320px,_100%),_1fr))] gap-4'>
                            {
                                post?.features?.map((feature) => {
                                    return (
                                        <li key={feature}>
                                            <ServiceFeature feature={feature} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </section>
            }
            <section className='section'>
                <div className="container">
                    <article className='prose'>
                        <ReactMarkdown>{post?.body}</ReactMarkdown>
                    </article>
                </div>
            </section>
            {
                post?.steps &&
                <ProcessSteps {...post} />
            }
            {hasFeatures &&
                <section className='section pb-0 bg-background'>
                    <div className="container">
                        <ProjectKeys title='Тэги' keywords={post?.features} />
                    </div>
                </section>
            }
            <ProjectsFooter />
        </>
    )
}

export default ServicePage