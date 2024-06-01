'use client'

import { APPARELS, PERFUMES, SHOES } from '@/constants/brands'
import PRODUCTS from '@/mocks/products'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import ProductCard from '../common/ProductCard'

export default function ProductsMenu() {
	const products = [PRODUCTS[9], PRODUCTS[11], PRODUCTS[10]]
	const [showProductMenu, setShowProductMenu] = useState(false)

	const pathname = usePathname()
	useEffect(() => setShowProductMenu(false), [pathname])

	return (
		<li
			onMouseEnter={() => setShowProductMenu(true)}
			onMouseLeave={() => setShowProductMenu(false)}
		>
			<Link
				href='/products/all'
				className='flex cursor-pointer gap-1 py-7'
			>
				<span>Products</span>
				<i className='ri-arrow-down-s-line' />
			</Link>

			<Transition
				show={showProductMenu}
				enterFrom='translate-y-2 opacity-0'
				enterTo='translate-y-0 opacity-100'
				enter='duration-300 ease-in-out'
				leave='duration-300 ease-in-out'
				leaveTo='translate-y-2 opacity-0'
				leaveFrom='translate-y-0 opacity-100'
				as='div'
				className='fixed right-0 top-20 z-20 flex w-screen justify-center gap-10 bg-white p-4 text-sm capitalize shadow-lg dark:bg-dark'
			>
				<ul className='flex max-h-[calc(100vh-80px-2rem)] flex-wrap justify-center gap-10 overflow-y-auto'>
					{products.map((product) => (
						<li key={product.id}>
							<ProductCard product={product} />
						</li>
					))}
				</ul>

				<div className='flex flex-wrap gap-10 text-gray-400'>
					<ul className='w-32 space-y-4'>
						<li className='text-black dark:text-white'>Apparel</li>
						{APPARELS.map((apparel, index) => (
							<li
								key={index}
								className='group flex cursor-pointer items-center gap-2 hover:text-black dark:hover:text-white'
							>
								<span className='-ml-4 h-2 w-2 rounded-full bg-dark opacity-0 duration-300 group-hover:opacity-100 dark:bg-white' />
								{apparel}
							</li>
						))}
					</ul>

					<ul className='w-32 space-y-4'>
						<li className='text-black dark:text-white'>Shoes</li>
						{SHOES.map((shoe, index) => (
							<li
								key={index}
								className='group flex cursor-pointer items-center gap-2 hover:text-black dark:hover:text-white'
							>
								<span className='-ml-4 h-2 w-2 rounded-full bg-dark opacity-0 duration-300 group-hover:opacity-100 dark:bg-white' />
								{shoe}
							</li>
						))}
					</ul>

					<ul className='w-32 space-y-4'>
						<li className='text-black dark:text-white'>Perfumes</li>
						{PERFUMES.map((perfume, index) => (
							<li
								key={index}
								className='group flex cursor-pointer items-center gap-2 hover:text-black dark:hover:text-white'
							>
								<span className='-ml-4 h-2 w-2 rounded-full bg-dark opacity-0 duration-300 group-hover:opacity-100 dark:bg-white' />
								{perfume}
							</li>
						))}
					</ul>
				</div>
			</Transition>
		</li>
	)
}
