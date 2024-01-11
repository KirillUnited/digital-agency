import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href={`/`}>
            <Image
                src={`images/Logo.svg`}
                width={122}
                height={24}
                alt='DigitalAgency Logo' />
        </Link>
    )
}

export default Logo