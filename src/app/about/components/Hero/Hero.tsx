import MarketingCard from '@/components/shared/Marketing/MarketingCard'
import { site } from '@/content'
import React from 'react'
import styles from './styles.module.css'

export default function Hero() {
    const title = site.about?.hero?.title
    const subtitle = site.about?.hero?.pageTitle
    const desccription = site.about?.hero?.description
    const image = site.about?.hero?.image

    return (
        <section className="section">
            <div className="container">
                <div className='marketing-grid'>
                    <MarketingCard subtitle={subtitle} title={title} description={desccription} image={image} className={styles.card} />
                </div>
            </div>
        </section>
    )
}
