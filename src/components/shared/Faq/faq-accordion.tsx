'use client'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import styles from './styles.module.css';

type FaqAccordianItemsProps = {
    title: string,
    description: string
}

const FaqAccordion = ({ items }: any) => {
  return (
    <Accordion type="single" collapsible>
        {
            items.map(({ title, description } : FaqAccordianItemsProps, index: number) => {
                const qNumber = (index + 1).toString().padStart(2, "0");

                return (
                    <AccordionItem key={`item-${index}`} value={`item-${index}`} className={cn(
                        styles["accordion-item"]
                    )}>
                        <AccordionTrigger className={cn(
                            styles["accordion-trigger"]
                        )}>
                            <div className='heading-6 flex gap-7 lg:gap-14'>
                                <span className='text-link'>{qNumber}</span>
                                <span className='text-left' >{title}</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className={cn(
                            styles["accordion-content"]
                        )}>
                            {description}
                        </AccordionContent>
                    </AccordionItem>
                )
            })
        }
    </Accordion>
  )
}

export default FaqAccordion