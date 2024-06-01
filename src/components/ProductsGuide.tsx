import { PRODUCTS_GUIDE } from '@/mocks'
import Image from 'next/image'

export default function ProductsGuide() {
	return (
		<section className='border border-gray-50 bg-gray-100 dark:border-slate-800 dark:bg-slate-900'>
			<h1 className='pt-14 text-center font-secondary text-4xl'>
				Products Guide
			</h1>
			<ul className='flex snap-x snap-mandatory gap-10 overflow-x-auto p-14 md:justify-center'>
				{PRODUCTS_GUIDE.map((productGuide, index) => (
					<li
						key={index}
						className='max-w-[290px] shrink-0 snap-center space-y-5 text-center md:max-w-[370px]'
					>
						<Image
							key={index}
							src={productGuide.image}
							width={370}
							height={250}
							quality={100}
							alt='product guide image'
							className='rounded duration-300 hover:scale-105'
						/>
						<h3 className='text-lg font-semibold'>
							{productGuide.title}
						</h3>
						<p className='text-gray-400'>{productGuide.body}</p>
					</li>
				))}
			</ul>
		</section>
	)
}
