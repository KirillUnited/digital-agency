'use client'
import React from 'react'
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import Link from 'next/link'
import { MoveRightIcon } from 'lucide-react'
import { OrderForm } from '@/components/shared/order'

type Props = {
}

export default function CTAModal() {
    return (
        <DialogContent>
            <DialogHeader className='space-y-4'>
                <DialogTitle className='text-3xl'>Отправить запрос</DialogTitle>
                <DialogDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </DialogDescription>
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
