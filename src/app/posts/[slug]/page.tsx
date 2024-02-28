import { getPost, getPosts } from '@/lib/getProjects'
import React from 'react';
import ReactMarkdown from 'react-markdown'
import PostHero from './components/PostHero';

type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
    const post = await getPost(params.slug, 'posts');

    return {
        title: post?.title,
    }
}

export async function generateStaticParams() {
    const posts = await getPosts('posts');

    return posts.map((post) => ({
        slug: post?.slug,
    }))
}

const PostTemplate = async ({ params }: Props) => {
    const post = await getPost(params.slug, 'posts');

    return (
        <>
            <PostHero
                title={post?.title}
                description={post?.description}
                thumbnail={post?.thumbnail}
            />
            <section className='section'>
                <div className="container max-w-4xl">
                    <article className='prose'>
                        <ReactMarkdown>{post?.body}</ReactMarkdown>
                    </article>
                </div>
            </section>
        </>
    )
}

export default PostTemplate