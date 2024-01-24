'use client'
import React from 'react'
import Navbar from './Navbar'
import { Button } from '../../ui/button'
import Logo from '../Logo'
import HeaderDrawer from './HeaderDrawer'
import { cn } from '@/lib/utils'
import styles from './styles.module.css'
import PhoneCall from '@/components/PhoneCall'

const Header = () => {
    return (
        <header className={cn('sticky z-50 top-0 left-0', styles.header)}>
            <div className="container">
                <div className="flex items-center justify-between gap-6 min-h-24 py-4">
                    <Logo />
                    <nav className="lg:flex hidden items-center justify-end gap-8">
                        <Navbar variant='primary' />
                        <PhoneCall />
                        <Button size={'sm'}>Обратная связь</Button>
                    </nav>
                    <div className='flex gap-6 items-center lg:hidden'>
                        <PhoneCall />
                        <HeaderDrawer />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header