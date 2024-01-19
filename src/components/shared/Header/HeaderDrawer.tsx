'use client'
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Menu } from "lucide-react"

import React from 'react'
import Logo from "../Logo"
import Navbar from "./Navbar"
import { Button } from "@/components/ui/button"

const HeaderDrawer = () => {
    return (
        <Drawer shouldScaleBackground>
            <DrawerTrigger className='lg:hidden'>
                <Menu className='text-white' />
            </DrawerTrigger>
            <DrawerContent className='bg-background-secondary border-background-secondary'>
                <div className="flex flex-col gap-6 overflow-auto">
                    <DrawerHeader className="flex flex-col items-center">
                        <DrawerTitle>
                            <Logo />
                        </DrawerTitle>
                    </DrawerHeader>
                    <DrawerFooter>
                        <nav>
                            <Navbar variant='primary' />
                        </nav>
                    </DrawerFooter>
                    <DrawerFooter>
                        <Button size={'sm'}>Обратная связь</Button>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default HeaderDrawer