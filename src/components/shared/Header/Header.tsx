'use client'
import React from 'react'
import Navbar from './Navbar'
import { Button } from '../../ui/button'
import MobileMenu from './MobileMenu'
import Logo from '../Logo'
import HeaderDrawer from './HeaderDrawer'
import { cn } from '@/lib/utils'
import styles from './styles.module.css'

const Header = () => {
    return (
        <header className={cn('sticky z-50 top-0 left-0', styles.header)}>
            <div className="container">
                <div className="flex items-center justify-between min-h-24 py-4">
                    <Logo />
                    <nav className="lg:flex hidden items-center justify-end gap-12">
                        <Navbar variant='primary' />
                        <Button size={'sm'}>Обратная связь</Button>
                    </nav>
                    <HeaderDrawer />
                </div>
            </div>
        </header>
    )
}

export default Header