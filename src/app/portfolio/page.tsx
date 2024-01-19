import ProjectPreview from '@/components/shared/Projects/ProjectPreview';
import { Button } from '@/components/ui/button';
import getProjects, { ProjectType } from '@/lib/getProjects'
import Link from 'next/link';
import React from 'react'

const Portfolio = async () => {
    const projects = await getProjects();

    return (
        <>
            <section className="section bg-accent">
                <div className="container">
                    <div className='heading max-w-3xl'>
                        <p className='paragraph text-foreground/70'>What we created</p>
                        <h2 className="heading-2">Our Work Portfolio</h2>
                        <p className="paragraph text-foreground/70 mt-6">We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p>
                    </div>
                </div>
            </section>
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
            <section className="section">
                <div className="container">
                    <div className='heading max-w-3xl'>
                        <h2 className="heading-2">Let's build something great together</h2>
                        <p className="paragraph text-foreground/70 mt-6">Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
                        <Button asChild className='w-fit self-center mt-5 lg:mt-10'>
                            <Link href={'/contact'}>Contact Us</Link>
                            </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio