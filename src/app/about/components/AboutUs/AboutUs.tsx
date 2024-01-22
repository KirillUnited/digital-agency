import { site } from '@/content'
import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
    const title = site.about?.aboutus?.title;
    const content = site.about?.aboutus?.content;
    const image = site.about?.aboutus?.image;

    return (
        <section className='bg-background'>
            <div className="container">
                <div className="bg-neutral-100 p-10 lg:p-20">
                    <p className='font-medium'>{title}</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-14">
                        {
                            content.map(({ title, description }) => {
                                return (
                                    <div key={title} className="flex flex-col gap-4">
                                        <h3 className='heading-3'>{title}</h3>
                                        <p className='paragraph text-foreground/70'>{description}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <Image
                    width={1280}
                    height={340}
                    src={`${image}`}
                    alt={title}
                    className='w-full max-h-80 object-cover object-top'
                />
            </div>
        </section>
    )
}
