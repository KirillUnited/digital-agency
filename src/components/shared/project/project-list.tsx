'use client'
import React, { useState } from 'react'
import ProjectCard from './project-card';
import ProjectListFilter from './project-list-filter';
import { ProjectType } from '@/lib/getProjects';
import { cn } from '@/lib/utils';
import styles from './styles.module.css'
import Loader from '../Loader';

type Props = {
    projects: (ProjectType | null)[]
}

export default function ProjectList({ projects = [] }: Props) {
    const [selectedFilter, setSelectedFilter] = useState('');
    const [loading, setLoading] = useState(false);
    const filteredProjectsByService = selectedFilter
        ? projects?.filter((project) => project?.service?.includes(selectedFilter))
        : projects;
    const handleSelect = (filter: string) => {
        setLoading(true);
        setTimeout(() => {
            setSelectedFilter(filter);
            setLoading(false);
        }, 600);
    }

    return (
        <>
            <section className="section pb-0">
                <div className="container">
                    <ProjectListFilter
                        selectedFilter={selectedFilter}
                        onSelect={handleSelect}
                        projects={projects || []}
                    />
                </div>
            </section>
            <section className="section relative">
                {loading && <Loader />}
                {!loading &&
                    <div className="container">
                        <ul className={cn("grid", styles.grid)}>
                            {
                                filteredProjectsByService?.map(({ ...data }, index: number) => {
                                    return (
                                        <li key={`${data.title}-${index}`}>
                                            <ProjectCard {...data} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                }
            </section>
        </>
    )
}
