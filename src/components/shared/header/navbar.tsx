'use client'
import { navbar, services } from '@/content';
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
import { cva } from 'class-variance-authority';

const menuLinkStyle = cva(
    "inline-flex text-base font-medium transition-colors duration-300 hover:text-foreground/70",
    {
        variants: {
            variant: {
                primary: "text-neutral-300 hover:text-white",
                secondary: "text-foreground"
            }
        }
    }
)

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

                    if (link.menu && enableSubmenu) {
                        return (
                            <NavigationMenuItem
                                key={link.label}
                            >
                                <NavigationMenuTrigger className={cn(
                                    "p-0 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent h-auto focus:bg-transparent focus:text-foregroundSecondary",
                                    menuLinkStyle({ variant }),
                                    {
                                        "text-white text-lg": variant == 'primary' && isActive,
                                    },
                                )}>
                                    {link.label}
                                </NavigationMenuTrigger>
                                {enableSubmenu &&
                                    <NavigationMenuContent className='z-[999]'>
                                        <ul className='flex flex-col py-4 w-max max-w-64 bg-background'>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link href={`${link.route}`} className='text-link flex capitalize hover:font-medium hover:bg-accent py-2 px-6 transition'>
                                                        Все категории
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            {
                                                services.map((item) => {
                                                    return (
                                                        <li key={item.title}>
                                                            <NavigationMenuLink asChild>
                                                                <Link href={item.link} className='flex capitalize hover:font-medium hover:bg-accent py-2 px-6 transition'>
                                                                    {item.title}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </NavigationMenuContent>
                                }
                            </NavigationMenuItem>
                        )
                    }
                    return (
                        <NavigationMenuItem key={link.label}>
                            <NavigationMenuLink asChild>
                                <Link href={link.route}
                                    className={cn(
                                        menuLinkStyle({ variant }),
                                        {
                                            "text-white text-lg": variant == 'primary' && isActive,
                                        },
                                    )}
                                >
                                    {link.label}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    )
                })}
                <NavigationMenuIndicator />
            </NavigationMenuList>
            <NavigationMenuViewport />
        </NavigationMenu>
    )
}

export default Navbar