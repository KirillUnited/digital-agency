import Projects from '@/components/shared/Projects/Projects';
import ProjectsFooter from '@/app/portfolio/components/ProjectsFooter';
import ProjectsHeader from '@/app/portfolio/components/ProjectsHeader';
import React from 'react'

const Portfolio = () => {
    return (
        <>
            <ProjectsHeader/>
            <Projects/>
            <ProjectsFooter/>
        </>
    )
}

export default Portfolio