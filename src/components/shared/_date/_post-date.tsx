import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'
import React from 'react'
import styles from './styles.module.css'

interface IDate extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    date: string
}

export default function PostDate({ date, className }: IDate) {
    const formatDate = new Intl.DateTimeFormat("ru", { dateStyle: "medium" }).format(new Date(date));

    return (
        <div className={cn(styles.date, className)}>
            <CalendarIcon />
            <span className='truncate'>{`${formatDate}`}</span>
        </div>
    )
}
