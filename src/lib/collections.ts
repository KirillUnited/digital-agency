import matter from 'gray-matter'
import path from 'path'
import fs from 'fs/promises'
import { cache } from 'react'
import { HeroLinkProps } from '@/components/shared/hero'

export type CollectionProps = {
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
    steps?: Array<{ description: string }>
}
// `cache` is a React 18 feature that allows you to cache a function for the lifetime of a request.
// this means getPosts() will only be called once per page build, even though we may call it multiple times
// when rendering the page.
const getCollection = cache(async (name: string) => {
    const PATH = `./src/content/_collections/${name}`;
    const files = await fs.readdir(`${PATH}`);

    return Promise.all(
        files
            .filter((file) => path.extname(file) === '.md')
            .map(async (file) => {
                const filePath = `${PATH}/${file}`
                const fileContent = await fs.readFile(filePath, 'utf8')
                const { data, content } = matter(fileContent)

                if (data.published === false) {
                    return null
                }

                return { ...data, body: content } as CollectionProps
            })
    )
});

async function getCollectionItem(slug: string, name: string) {
    const items = await getCollection(name);
    return items.find((item) => item?.slug === slug)
}

export {
    getCollection,
    getCollectionItem
}