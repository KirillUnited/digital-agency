import React from 'react'
import styles from './styles.module.css'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className={`${styles.section}`}>
            <div className={`container ${styles.container}`}>
                <div className={`${styles.content}`}>
                    <h1 className="heading-1">Building stellar websites for early startups</h1>
                    <p className="paragraph text-foregroundSecondary/70">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                    <div className={`${styles.footer}`}>
                        <Button asChild className='w-full sm:w-fit'>
                            <Link href={'/projects'}>View our work</Link>
                        </Button>
                        <Link href={'/'} className='inline-flex items-center gap-4'>View Pricing <MoveRight /></Link>
                    </div>
                </div>
                <Image
                    src={`/images/hero.png`}
                    width={638}
                    height={360}
                    alt='Building stellar websites for early startups'
                    className={`${styles.image}`}
                />
            </div>
        </section>
    )
}

export default Hero