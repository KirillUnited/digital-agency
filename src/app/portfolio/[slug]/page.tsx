import { getProject } from '@/lib/getProjects'
import React from 'react'

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
        <div>{project?.title}</div>
    )
}

export default ProjectTemplate