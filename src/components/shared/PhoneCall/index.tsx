import { cn } from '@/lib/utils'
import { PhoneCallIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type PhoneCallProps = {
    phone?: string,
    label?: string
}

export default function PhoneCall({ phone, label }: PhoneCallProps) {
    return (
        <Link href={`${phone || 'tel:0927627728525'}`} className={cn('group inline-flex gap-4 flex-wrap items-center justify-center')}>
            <PhoneCallIcon className='text-green-500 group-hover:text-green-500/70 transition-colors' />
            {label && <span>{label}</span>}
        </Link>
    )
}
