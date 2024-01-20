import ProjectPreview from '@/components/shared/Projects/ProjectPreview';
import ProjectsFooter from '@/components/shared/Projects/ProjectsFooter';
import ProjectsHeader from '@/components/shared/Projects/ProjectsHeader';
import getProjects from '@/lib/getProjects'
import React from 'react'

const Portfolio = async () => {
    const projects = await getProjects();

    return (
        <>
            <ProjectsHeader/>
            <section className="section">
                <div className="container">
                    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(min(400px,_100%),_1fr))] gap-8  lg:gap-y-16">
                        {
                            projects.map(({ ...data }, index) => {
                                return (
                                    <li key={`${data.title}-${index}`}>
                                        <ProjectPreview {...data}/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
            <ProjectsFooter/>
        </>
    )
}

export default Portfolio