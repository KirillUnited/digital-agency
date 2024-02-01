import matter from 'gray-matter'
import path from 'path'
import fs from 'fs/promises'
import { cache } from 'react'

export type ProjectType = {
    slug: string,
    title: string,
    description?: string,
    date?: string,
    thumbnail?: string,
    link?: string,
    info?: object,
    keywords?: string[]
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
                const filePath = `${PROJECTS_PATH}${file}`
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

export default getProjects