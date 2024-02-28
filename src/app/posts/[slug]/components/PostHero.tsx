import Image from 'next/image'
import React from 'react'

type Props = {
	title: string | undefined,
	subtitle?: string | undefined,
	description?: string | undefined,
	thumbnail?: string | undefined,
}

export default function PostHero({ title, subtitle, description, thumbnail }: Props) {
	return (
		<section className="section">
			<div className="container">
				<div className='heading max-w-3xl'>
					{subtitle && <p className='paragraph text-foreground/70'>{subtitle}</p>}
					<h2 className="heading-2">{title}</h2>
					{description && <p className="paragraph text-foreground/70 mt-6">{description}</p>}
				</div>
				{thumbnail &&
					<Image
						src={`${thumbnail}`}
						alt={`${title}`}
						width={1280}
						height={477}
						className='w-full mt-16'
					/>
				}
			</div>
		</section>
	)
}
