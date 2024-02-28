'use client'
import React, { useState } from 'react'
import ProjectCard from './ProjectCard';
import ProjectsFilter from './ProjectsFilter';
import { ProjectType } from '@/lib/getProjects';

type Props = {
    projects: Array<ProjectType>
}

export default function Projects({ projects }: Props) {
    const [selectedFilter, setSelectedFilter] = useState('');
    const filteredProjectsByService = selectedFilter
        ? projects.filter((project: ProjectType) => project?.service?.includes(selectedFilter))
        : projects;

    return (
        <>
            <section className="section pb-0">
                <div className="container">
                    <ProjectsFilter
                        selectedFilter={selectedFilter}
                        onSelect={setSelectedFilter}
                        projects={projects}
                    />
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <ul className="grid grid-cols-[repeat(auto-fill,_minmax(min(400px,_100%),_1fr))] gap-8 gap-y-12 lg:gap-y-16">
                        {
                            filteredProjectsByService.map(({ ...data }: ProjectType, index: number) => {
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
        </>
    )
}
