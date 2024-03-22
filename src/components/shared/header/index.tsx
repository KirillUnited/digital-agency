'use client'
import React from 'react'
import Navbar from './navbar'
import { Button } from '../../ui/button'
import Logo from '../logo'
import HeaderDrawer from './header-drawer'
import { cn } from '@/lib/utils'
import styles from './styles.module.css'
import PhoneCall from '@/components/shared/phone-call'
import CTAModal from '@/components/shared/modal/cta-modal'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

const Header = () => {
    return (
        <header className={cn('sticky z-50 top-0 left-0', styles.header)}>
            <div className="container">
                <div className="flex items-center justify-between gap-6 min-h-24 py-4">
                    <Logo />
                    <div className="lg:flex hidden items-center justify-end gap-8">
                        <Navbar variant='primary' enableSubmenu />
                        <PhoneCall />
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button size={'sm'}>Обратная связь</Button>
                            </DialogTrigger>
                            <CTAModal />
                        </Dialog>
                    </div>
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