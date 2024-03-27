import React from 'react'
import styles from './styles.module.css'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/content'
import ParticlesApp from '@/components/shared/particles';

const siteTitle = site.home?.hero?.title;
const siteDescription = site.home?.hero?.description;
const siteImage = site.home?.hero?.image;

export type HeroLinkProps = {
    CTA?: boolean,
    label?: string,
    link?: string
}
export interface HeroProps {
    title?: string,
    description?: string,
    image?: string,
    links?: Array<HeroLinkProps>,
    particlesEffect?: boolean
}

const Hero = (
    {
        title = siteTitle,
        description = siteDescription,
        image = siteImage,
        links = [],
        particlesEffect
    }: HeroProps) => {
    return (
        <section id='hero' className={`section ${styles.section}`}>
            {particlesEffect && <ParticlesApp />}
            <div className={`container ${styles.container}`}>
                <div className={`${styles.content}`}>
                    <h1 className="heading-1 lg:tracking-[-0.03em]">{title}</h1>
                    <p className="paragraph text-foregroundSecondary/70">
                        {description}
                    </p>
                    {
                        links?.length > 0 &&
                        <div className={`${styles.footer}`}>
                            {
                                links.map(({ CTA, label, link }) => {
                                    if (CTA) {
                                        return (
                                            <Button key={label} asChild className='w-full sm:w-fit'>
                                                <Link href={`${link}`}>{label}</Link>
                                            </Button>
                                        )

                                    }
                                    return (
                                        <Link key={label}
                                            href={`${link}`}
                                            className='link text-foregroundSecondary hover:text-foregroundSecondary/70'
                                        >
                                            {label} <MoveRight />
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
                <Image
                    src={image}
                    width={638}
                    height={360}
                    alt={title}
                    className={`${styles.image}`}
                    priority
                />
            </div>
        </section>
    )
}

export default Hero