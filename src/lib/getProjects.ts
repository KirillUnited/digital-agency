import matter from 'gray-matter'
import path from 'path'
import fs from 'fs/promises'
import { cache } from 'react'
import { HeroLinkProps } from '@/components/shared/Hero/Hero'

export type ProjectType = {
    service?: string[]
    slug: string,
    title: string,
    description?: string,
    date?: string,
    thumbnail?: string,
    hero_links?: Array<HeroLinkProps>
    link?: string,
    info?: object,
    keywords?: string[]
    features?: string[]
    body: string
}
// `cache` is a React 18 feature that allows you to cache a function for the lifetime of a request.
// this means getPosts() will only be called once per page build, even though we may call it multiple times
// when rendering the page.
export const getProjects = cache(async () => {
    const PROJECTS_PATH = './src/content/_posts/portfolio';
    const projects = await fs.readdir(`${PROJECTS_PATH}`);

    return Promise.all(
        projects
            .filter((file) => path.extname(file) === '.md')
            .map(async (file) => {
                const filePath = `${PROJECTS_PATH}/${file}`
                const projectContent = await fs.readFile(filePath, 'utf8')
                const { data, content } = matter(projectContent)

                if (data.published === false) {
                    return null
                }

                return { ...data, body: content } as ProjectType
            })
    )
})

export async function getProject(slug: string) {
    const projects = await getProjects()
    return projects.find((project: any) => project.slug === slug)
}

// TODO: remove hardcode, do refact getProjects() to common getPosts() & getPost()
export const getPosts = cache(async (type: string) => {
    const PATH = `./src/content/_posts/${type}`;
    const posts = await fs.readdir(`${PATH}`);

    return Promise.all(
        posts
            .filter((file) => path.extname(file) === '.md')
            .map(async (file) => {
                const filePath = `${PATH}/${file}`
                const postContent = await fs.readFile(filePath, 'utf8')
                const { data, content } = matter(postContent)

                if (data.published === false) {
                    return null
                }

                return { ...data, body: content } as ProjectType
            })
    )
});

export async function getPost(slug: string, type: string) {
    const posts = await getPosts(type);
    return posts.find((post) => post?.slug === slug)
}

export default getProjects