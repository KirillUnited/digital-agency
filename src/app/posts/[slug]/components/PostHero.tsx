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
			<div className="container max-w-7xl">
				<div className='heading max-w-3xl'>
					{subtitle && <p className='paragraph text-foreground/70'>{subtitle}</p>}
					<h2 className="heading-2">{title}</h2>
					{description && <p className="paragraph text-foreground/70 mt-6">{description}</p>}
				</div>
				{thumbnail &&
					<Image
						priority
						src={`${thumbnail}`}
						alt={`${title}`}
						width={1280}
						height={477}
						className='w-full mt-8 lg:mt-16 aspect-[1280/477] object-cover'
					/>
				}
			</div>
		</section>
	)
}
