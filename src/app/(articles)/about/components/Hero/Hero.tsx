import MarketingCard from '@/components/shared/Marketing/MarketingCard'
import React from 'react'
import styles from './styles.module.css'

type Props = {
    title: string,
    subtitle?: string,
    desccription?: string,
    image?: string
}
export default function Hero({ title, subtitle, desccription, image }: Props) {
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
