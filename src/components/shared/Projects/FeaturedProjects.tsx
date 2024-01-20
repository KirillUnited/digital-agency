import { MoveRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import FeaturedProjectCard from './FeaturedProjectCard'
import styles from './styles.module.css'
import getProjects from '@/lib/getProjects'

const FeaturedProjects = async () => {
  const projects = await getProjects();
  const shownProjects = projects.filter((item, index) => index < 3);

  return (
    <section className="section">
      <div className="container">
        <div className={`flex flex-wrap items-center justify-between gap-4 pb-8 lg:pb-16`}>
          <h2 className="heading-2">Наши проекты</h2>
          <Link href={'/portfolio'} className='link text-link-secondary hover:text-link-secondary/70'>Смотреть ещё <MoveRightIcon /></Link>
        </div>
        <div className={`flex flex-col lg:grid gap-4 lg:gap-8 ${styles.grid}`}>
          {
            shownProjects.map(({...data}, index) => {
              return (
                  <FeaturedProjectCard key={data?.title} {...data} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects