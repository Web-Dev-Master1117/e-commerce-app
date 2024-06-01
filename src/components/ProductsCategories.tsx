'use client'

import { TCategory } from '@/common/types'
import { CATEGORIES } from '@/constants'
import PRODUCTS from '@/mocks/products'
import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import ProductCard from './common/ProductCard'

export default function ProductsCategories() {
	const [category, setCategory] = useState<TCategory>('all')
	return (
		<section className='border border-gray-50 bg-gray-100 dark:border-slate-800 dark:bg-slate-900'>
			<h1 className='py-14 text-center font-secondary text-4xl'>
				Products Categories
			</h1>
			<div className='mx-auto font-secondary text-2xl'>
				<Listbox value={category} onChange={setCategory}>
					<div className='relative'>
						<div className='flex items-center justify-center gap-3'>
							<span className='text-gray-400'>In</span>
							<span className='capitalize'>{category}</span>
							<Listbox.Button>
								<i className='ri-arrow-down-s-line'></i>
							</Listbox.Button>
						</div>

						<Transition
							as={Fragment}
							leave='transition ease-in duration-100'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'
						>
							<Listbox.Options className='absolute right-1/2 z-10 mt-3 max-h-60 translate-x-1/2 overflow-auto bg-white font-primary text-xl shadow-lg'>
								{CATEGORIES.map((cat, index) => (
									<Listbox.Option
										key={index}
										className='flex justify-between gap-3 px-5 py-2 ui-selected:bg-black ui-selected:text-white ui-active:bg-black ui-active:text-white dark:bg-black dark:ui-selected:bg-white dark:ui-selected:text-black dark:ui-active:bg-white dark:ui-active:text-black'
										value={cat}
									>
										<span>{cat}</span>
										<i className='ri-check-line invisible ui-selected:visible'></i>
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				</Listbox>
			</div>

			<ul className='mx-auto flex max-w-5xl flex-wrap justify-center gap-10 py-14'>
				{PRODUCTS.filter((product) => {
					if (category === 'all') return true
					else return product.category === category
				}).map((product) => (
					<li
						key={product.id + category}
						className='animate-fade-slide'
					>
						<ProductCard product={product} />
					</li>
				))}
			</ul>
		</section>
	)
}
