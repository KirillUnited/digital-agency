'use client'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Navbar from './Navbar'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { Button } from '../ui/button'

const MobileMenu = () => {
    return (
        <nav className='flex items-center lg:hidden'>
            <Sheet>
                <SheetTrigger>
                    <Menu className='text-white' />
                </SheetTrigger>
                <SheetContent side={'left'} className='bg-background-secondary border-background-secondary text-white flex flex-col gap-6'>
                    <SheetTitle>
                        <Link href={`/`}>
                            <Image
                                src={`images/Logo.svg`}
                                width={122}
                                height={24}
                                alt='DigitalAgency Logo' />
                        </Link>
                    </SheetTitle>
                    <Navbar />
                    <Button>Обратная связь</Button>
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default MobileMenu