import { steps } from '@/content'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import StepsCard from './StepsCard'

const Steps = () => {
    return (
        <section className='section bg-background-accent'>
            <div className="container grid grid-cols-1 lg:grid-cols-[405px_1fr] gap-6">
                <div className="heading flex flex-col gap-6">
                    <h2 className="heading-2">Принципы нашей работы</h2>
                    <Link href='/' className='link inline-flex items-center self-start gap-4'>Подробнее о нас <MoveRight /></Link>
                </div>
                <ul className="content grid grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] w-full max-w-2xl mx-auto gap-6">
                    {
                        steps.map(({step, title, description }) => <li key={step}><StepsCard step={step} title={title} description={description} /></li>)
                    }
                </ul>
            </div>
        </section>
    )
}

export default Steps