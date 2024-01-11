import React from 'react'
import styles from './styles.module.css'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/content'

const Hero = () => {
    const title = site.home?.hero?.title;
    const description = site.home?.hero?.description;
    const image = site.home?.hero?.image;

    return (
        <section className={`${styles.section}`}>
            <div className={`container ${styles.container}`}>
                <div className={`${styles.content}`}>
                    <h1 className="heading-1 lg:tracking-[-0.03em]">{title}</h1>
                    <p className="paragraph text-foregroundSecondary/70">
                        {description}
                    </p>
                    <div className={`${styles.footer}`}>
                        <Button asChild className='w-full sm:w-fit'>
                            <Link href={'/projects'}>Портфолио</Link>
                        </Button>
                        <Link href={'/'} className='inline-flex items-center gap-4 transition-colors duration-300 hover:text-foregroundSecondary/70'>Подробнее <MoveRight /></Link>
                    </div>
                </div>
                <Image
                    src={image}
                    width={638}
                    height={360}
                    alt={title}
                    className={`${styles.image}`}
                />
            </div>
        </section>
    )
}

export default Hero