'use client'
import React, { HtmlHTMLAttributes, useCallback } from 'react'
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { MoveRightIcon } from 'lucide-react'
import { OrderForm } from '@/components/shared/order'
import { cn } from '@/lib/utils'

export interface CTAModalProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string,
    description?: string
}

export default function CTAModal(
    {
        title = 'Отправить запрос',
        description = 'Укажите в заявке ваше имя и номер телефона. Наши менеджеры свяжутся с вами, ответят на все вопросы и подготовят коммерческое предложение!',
        className,
        ...props
    }: CTAModalProps) {
    return (
        <DialogContent
            className={cn(
                className
            )}
            {...props}
        >
            <DialogHeader className='space-y-4'>
                <DialogTitle className='text-3xl'>{title}</DialogTitle>
                {description &&
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                }
            </DialogHeader>
            <div className="py-4">
                <OrderForm />
            </div>
            <div className='flex flex-col gap-6'>
                <DialogClose asChild>
                    <a href={`/#order_section`} className='link self-center'>
                        Свяжитесь с нами <MoveRightIcon />
                    </a>
                </DialogClose>
            </div>
        </DialogContent>
    )
}
