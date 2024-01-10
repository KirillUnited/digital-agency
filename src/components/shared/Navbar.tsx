'use client'
import { navbar } from '@/content';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Navbar = () => {
    const pathname = usePathname();

    return (
        <ul className='flex flex-wrap flex-col lg:flex-row items-center justify-center gap-x-8 gap-y-2'>
            {navbar.map((link) => {
                const isActive = pathname === link.route;

                return (
                    <li
                        key={link.route}
                    >
                        <Link href={link.route}
                            className={cn(
                                "flex text-neutral-300 text-base font-medium transition-colors duration-300 hover:text-white",
                                {
                                    "text-white": isActive,
                                }
                            )}
                        >
                            {link.label}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Navbar