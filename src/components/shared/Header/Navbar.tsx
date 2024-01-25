'use client'
import { navbar, pricing } from '@/content';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import styles from './styles.module.css'

type NavbarType = {
    variant?: 'primary' | 'secondary',
    enableSubmenu?: boolean
}

const Navbar = ({ variant, enableSubmenu }: NavbarType) => {
    const pathname = usePathname();

    return (
        <NavigationMenu>
            <NavigationMenuList className='flex flex-wrap flex-col lg:flex-row items-center justify-center gap-x-8 gap-y-2'>
                {navbar.map((link) => {
                    const isActive = pathname === link.route;

                    return (
                        <NavigationMenuItem
                            key={link.label}
                        >
                            {
                                (link.menu) &&
                                <>
                                    <NavigationMenuTrigger className={cn(
                                        "p-0 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent h-auto focus:bg-transparent focus:text-foregroundSecondary",
                                        "text-base font-medium transition-colors duration-300 hover:text-foreground/70",
                                        {
                                            "text-neutral-300 hover:text-white": variant == 'primary'
                                        },
                                        {
                                            "text-white text-lg": variant == 'primary' && isActive,
                                        },
                                        {
                                            "text-foreground": variant == 'secondary'
                                        },
                                    )}>
                                        <NavigationMenuLink href={`${link.route}`}>
                                            {link.label}
                                        </NavigationMenuLink>
                                    </NavigationMenuTrigger>
                                    {enableSubmenu &&
                                        <NavigationMenuContent className='z-[999]'>
                                            <ul className='flex flex-col py-4 w-max max-w-64 bg-background'>
                                                {
                                                    pricing.map((item) => {
                                                        return (
                                                            <li key={item.title}>
                                                                <NavigationMenuLink href={item.link} className='flex capitalize hover:font-medium hover:bg-accent py-2 px-6 transition'>
                                                                    {item.title}
                                                                </NavigationMenuLink>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </NavigationMenuContent>
                                    }
                                </>
                            }
                            {
                                !link.menu &&
                                <Link href={link.route}
                                    className={cn(
                                        "flex text-base font-medium transition-colors duration-300 hover:text-foreground/70",
                                        {
                                            "text-neutral-300 hover:text-white": variant == 'primary'
                                        },
                                        {
                                            "text-white text-lg": variant == 'primary' && isActive,
                                        },
                                        {
                                            "text-foreground": variant == 'secondary'
                                        },
                                    )}
                                >
                                    {link.label}
                                </Link>
                            }
                        </NavigationMenuItem>
                    )
                })}
            </NavigationMenuList>
        </NavigationMenu>
    )
    return (
        <ul className='flex flex-wrap flex-col lg:flex-row items-center justify-center gap-x-8 gap-y-2'>
            {navbar.map((link) => {
                const isActive = pathname === link.route;

                return (
                    <li
                        key={link.label}
                    >
                        <Link href={link.route}
                            className={cn(
                                "flex text-base font-medium transition-colors duration-300 hover:text-foreground/70",
                                {
                                    "text-neutral-300 hover:text-white": variant == 'primary'
                                },
                                {
                                    "text-white": variant == 'primary' && isActive,
                                },
                                {
                                    "text-foreground": variant == 'secondary'
                                },
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