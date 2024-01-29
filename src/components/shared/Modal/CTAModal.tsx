'use client'
import React from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { MoveRightIcon } from 'lucide-react'
import { Label } from '@/components/ui/label'

type Props = {
    triggerLabel: string
    triggerSize?: "default" | "sm" | "lg" | "icon" | null | undefined
}

export default function CTAModal({ triggerLabel, triggerSize }: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size={triggerSize}>{triggerLabel}</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className='space-y-4'>
                    <DialogTitle className='text-3xl'>Отправить запрос</DialogTitle>
                    <DialogDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Label htmlFor="name">Имя</Label>
                    <Input
                        id="name"
                        defaultValue=""
                        placeholder='Введите Ваше имя'
                    />

                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                        type='tel'
                        id="phone"
                        defaultValue=""
                        placeholder='Введите Ваш номер телефона'
                    />
                </div>
                <div className='flex flex-col gap-6'>
                    <Button>Заказать звонок</Button>
                    <DialogClose asChild>
                        <Link href={`/about`} className='link self-center'>
                            Свяжитесь с нами <MoveRightIcon />
                        </Link>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    )
}
