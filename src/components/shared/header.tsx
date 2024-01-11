import React from 'react'
import Navbar from './Navbar'
import { Button } from '../ui/button'
import MobileMenu from './MobileMenu'
import Logo from './Logo'

const Header = () => {
    return (
        <header className='sticky top-0 bg-background-secondary'>
            <div className="container">
                <div className="flex items-center justify-between min-h-24 py-4">
                    <Logo/>
                    <nav className="lg:flex hidden items-center justify-end gap-12">
                        <Navbar variant='primary' />
                        <Button>Обратная связь</Button>
                    </nav>
                    <MobileMenu />
                </div>
            </div>
        </header>
    )
}

export default Header