import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'
import React from 'react'
interface DateProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    date: string
}
export default function PostDate({ date, className }: DateProps) {
    const formatDate = new Date(date);
    
    return (
        <div className={cn('inline-flex gap-2 items-center truncate text-sm text-gray-400', className)}>
            <CalendarIcon />{`${formatDate}`}
        </div>
    )
}
