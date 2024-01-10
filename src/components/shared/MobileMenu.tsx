import React from 'react'
import Navbar from './Navbar'

const MobileMenu = () => {
    return (
        <nav className='lg:hidden'>
            <Navbar />
        </nav>
    )
}

export default MobileMenu