import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'
import { Button } from '../ui/button'
import MobileMenu from './MobileMenu'

const Header = () => {
    return (
        <header className='sticky top-0 bg-background-secondary'>
            <div className="container">
                <div className="flex items-center justify-between min-h-24 py-4">
                    <Link href={`/`}>
                        <Image
                            src={`images/Logo.svg`}
                            width={122}
                            height={24}
                            alt='DigitalAgency Logo' />
                    </Link>
                    <nav className="lg:flex hidden items-center justify-end gap-12">
                        <Navbar />
                        <Button>Обратная связь</Button>
                    </nav>
                    <MobileMenu />
                </div>
            </div>
        </header>
    )
}

export default Header