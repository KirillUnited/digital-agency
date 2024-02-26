'use client'
import CTAModal from '@/components/shared/Modal/CTAModal'
import StepsCard from '@/components/shared/Steps/StepsCard'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { ProjectType } from '@/lib/getProjects'
import React from 'react'

export default function ProcessSteps({ ...items }: ProjectType) {
    if (!items.steps?.length) return null;

    return (
        <section className='section bg-background-accent'>
            <div className="container">
                <div className={`flex flex-wrap items-center justify-between gap-4`}>
                    <h2 className="heading-2">Этапы работ</h2>
                </div>
                <ul className="content grid grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] gap-6 py-8 lg:py-16">
                    {
                        items?.steps?.map(({ description }, index: number) => <li key={index}><StepsCard step={index + 1} title={description} /></li>)
                    }
                </ul>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className='w-full sm:w-fit'>Заказать</Button>
                    </DialogTrigger>
                    <CTAModal />
                </Dialog>
            </div>
        </section>
    )
}
