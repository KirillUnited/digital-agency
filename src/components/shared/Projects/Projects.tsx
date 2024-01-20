import React from 'react'
import ProjectPreview from './ProjectPreview';
import getProjects from '@/lib/getProjects';

export default async function Projects() {
    const projects = await getProjects();

    return (
        <section className="section">
            <div className="container">
                <ul className="grid grid-cols-[repeat(auto-fit,_minmax(min(400px,_100%),_1fr))] gap-8  lg:gap-y-16">
                    {
                        projects.map(({ ...data }, index) => {
                            return (
                                <li key={`${data.title}-${index}`}>
                                    <ProjectPreview {...data} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}
