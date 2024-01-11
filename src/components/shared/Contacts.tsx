import React from 'react'

const Contacts = () => {
    return (
        <div className='bg-primary text-foreground px-9 py-4'>
            <ul className='flex flex-wrap gap-6'>
                <li>
                    <p className='text-lg font-medium'>Email me at</p>
                    <a href="mailto:contact@website.com">contact@website.com</a>
                </li>
                <li>
                    <p className='text-lg font-medium'>Call us</p>
                    <a href="tel:0927627728525">0927 6277 28525</a>
                </li>
            </ul>
        </div>
    )
}

export default Contacts