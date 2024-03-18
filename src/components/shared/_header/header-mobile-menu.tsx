'use client'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Navbar from './_navbar'
import { Menu } from 'lucide-react'
import { Button } from '../../ui/button'
import Logo from '../_logo'

const MobileMenu = () => {
    return (
        <nav className='flex items-center lg:hidden'>
            <Sheet>
                <SheetTrigger>
                    <Menu className='text-white' />
                </SheetTrigger>
                <SheetContent side={'left'} className='bg-background-secondary border-background-secondary text-white flex flex-col gap-6'>
                    <SheetTitle>
                        <Logo />
                    </SheetTitle>
                    <Navbar variant='primary' />
                    <Button size={'sm'}>Обратная связь</Button>
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default MobileMenu