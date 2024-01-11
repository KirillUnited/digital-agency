import { MoveRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import ProjectCard from './ProjectCard'
import { site } from '@/content'
import styles from './styles.module.css'

const Projects = () => {
  const shownProjects = site.home?.projects.filter((item, index)=>index<3);

  return (
    <section className="section">
      <div className="container">
        <div className={`flex flex-wrap items-center justify-between pb-16`}>
          <h2 className="heading-2">View our projects</h2>
          <Link href={'/'} className='link text-link-secondary hover:text-link-secondary/70'>View More <MoveRightIcon /></Link>
        </div>
        <div className={`grid ${styles.grid}`}>
          {
            shownProjects.map((item)=><ProjectCard key={item.title} {...item} />)
          }
        </div>
      </div>
    </section>
  )
}

export default Projects