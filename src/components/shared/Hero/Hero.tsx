import React from 'react'
import styles from './styles.module.css'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/content'

const siteTitle = site.home?.hero?.title;
const siteDescription = site.home?.hero?.description;
const siteImage = site.home?.hero?.image;

type HeroLinksProps = {
    CTA?: boolean,
    label?: string,
    link?: string
}
export interface HeroProps {
    title?: string,
    description?: string,
    image?: string,
    links?: Array<HeroLinksProps>
}

const Hero = (
    {
        title = siteTitle,
        description = siteDescription,
        image = siteImage,
        links = []
    }: HeroProps) => {
    return (
        <section className={`section ${styles.section}`}>
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
                                            <Button asChild className='w-full sm:w-fit'>
                                                <Link href={`${link}`}>{label}</Link>
                                            </Button>
                                        )

                                    }
                                    return (
                                        <Link
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