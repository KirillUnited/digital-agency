import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'
import React from 'react'
import styles from './styles.module.css'

interface DateProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    date: string
}

export default function PostDate({ date, className }: DateProps) {
    const formatDate = new Date(date).toUTCString();

    return (
        <div className={cn(styles.date, className)}>
            <CalendarIcon />
            <span className='truncate'>{`${formatDate}`}</span>
        </div>
    )
}
