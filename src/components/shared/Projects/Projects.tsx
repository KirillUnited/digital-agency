import { MoveRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '@/content'
import styles from './styles.module.css'

const Projects = () => {
  const shownProjects = projects.filter((item, index) => index < 3);

  return (
    <section className="section">
      <div className="container">
        <div className={`flex flex-wrap items-center justify-between gap-4 pb-8 lg:pb-16`}>
          <h2 className="heading-2">View our projects</h2>
          <Link href={'/'} className='link text-link-secondary hover:text-link-secondary/70'>View More <MoveRightIcon /></Link>
        </div>
        <div className={`flex flex-col lg:grid gap-4 lg:gap-8 ${styles.grid}`}>
          {
            shownProjects.map((item, index) => {
              return (
                  <ProjectCard key={item.title} {...item} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Projects