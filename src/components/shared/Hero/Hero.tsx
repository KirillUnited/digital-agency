import React from 'react'
import styles from './styles.module.css'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/content'
import heroImage from '../../../../public/images/hero.png'

const Hero = () => {
    const title = site.home?.hero?.title;
    const description = site.home?.hero?.description;
    const image = site.home?.hero?.image;

    return (
        <section className={`section ${styles.section}`}>
            <div className={`container ${styles.container}`}>
                <div className={`${styles.content}`}>
                    <h1 className="heading-1 lg:tracking-[-0.03em]">{title}</h1>
                    <p className="paragraph text-foregroundSecondary/70">
                        {description}
                    </p>
                    <div className={`${styles.footer}`}>
                        <Button asChild className='w-full sm:w-fit'>
                            <Link href={'/portfolio'}>Портфолио</Link>
                        </Button>
                        <Link href={'/pricing'} className='link text-foregroundSecondary hover:text-foregroundSecondary/70'>Подробнее <MoveRight /></Link>
                    </div>
                </div>
                <Image
                    src={heroImage}
                    width={638}
                    height={360}
                    alt={title}
                    className={`${styles.image}`}
                    placeholder='blur'
                />
            </div>
        </section>
    )
}

export default Hero