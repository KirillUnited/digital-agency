'use client';
import React from 'react'
import { IBrandList } from './brand-list'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'
import { cn } from '@/lib/utils';
import styles from './styles.module.css'

export default function BrandCarousel({ brands }: IBrandList) {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 3000,
                }),
            ]}
        >
            <CarouselContent
                className={cn(
                    "items-center"
                )}>
                {
                    brands?.map((item) => {
                        return (
                            <CarouselItem
                                key={item}
                                className={cn(
                                    styles['carousel-item']
                                )}
                            >
                                <Image
                                    src={`${item}`}
                                    width={161}
                                    height={32}
                                    alt=''
                                    className='object-contain'
                                    quality={100}
                                />
                            </CarouselItem>
                        )
                    }
                    )
                }
            </CarouselContent>
        </Carousel>
    )
}
