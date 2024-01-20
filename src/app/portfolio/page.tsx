import Projects from '@/components/shared/Projects/Projects';
import ProjectsFooter from '@/components/shared/Projects/ProjectsFooter';
import ProjectsHeader from '@/components/shared/Projects/ProjectsHeader';
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