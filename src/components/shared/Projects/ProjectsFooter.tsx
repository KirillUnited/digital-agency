import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function ProjectsFooter() {
	return (
		<section className="section">
			<div className="container">
				<div className='heading max-w-3xl'>
					<h2 className="heading-2">Let's build something great together</h2>
					<p className="paragraph text-foreground/70 mt-6">Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
					<Button asChild className='w-fit self-center mt-5 lg:mt-10'>
						<Link href={'/contact'}>Contact Us</Link>
					</Button>
				</div>
			</div>
		</section>
	)
}
