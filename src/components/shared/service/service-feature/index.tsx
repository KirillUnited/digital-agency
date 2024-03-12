import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import React from 'react'
import styles from './styles.module.css'

export default function ServiceFeature({ feature }: { feature: string }) {
    return (
        <div className={cn(styles.root)}>
            <div className={cn(styles['icon-wrap'])}>
                <Check className={cn(styles['icon'])} />
            </div>
            <span>{feature}</span>
        </div>
    )
}
