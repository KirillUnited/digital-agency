import { cache } from 'react'
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs/promises'

const PATH = './src/content/widgets';

type WidgetProps = {
    title: string,
    description?: string,
    body: string,
    form_title?: string,
    form_description?: string,
    fileName: string,
    content?: any
}

export const getWidgets = cache(async () => {
    const items = await fs.readdir(`${PATH}`);

    return Promise.all(
        items
            .filter((file) => path.extname(file) === '.md')
            .map(async (file) => {
                const filePath = `${PATH}/${file}`
                const fileContent = await fs.readFile(filePath, 'utf8')
                const { data, content } = matter(fileContent)

                if (data.published === false) {
                    return null
                }

                return { ...data, body: content, fileName: file } as WidgetProps
            })
    )
});

export async function getWidget(file: string) {
    const filePath = `${PATH}/${file}`;
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContent)

    return { ...data, body: content } as WidgetProps
}

export default getWidgets;