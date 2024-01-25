import React from 'react'
import ProjectCard from './ProjectCard';
import getProjects from '@/lib/getProjects';
import ProjectsFilter from './ProjectsFilter';

export default async function Projects() {
    const projects = await getProjects();

    return (
        <section className="section">
            <div className="container">
                <ProjectsFilter/>
                <ul className="grid grid-cols-[repeat(auto-fit,_minmax(min(400px,_100%),_1fr))] gap-8 gap-y-12 lg:gap-y-16">
                    {
                        projects.map(({ ...data }, index) => {
                            return (
                                <li key={`${data.title}-${index}`}>
                                    <ProjectCard {...data} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}
