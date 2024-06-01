'use client'

import { IProduct } from '@/definitions/interfaces'
import PRODUCTS from '@/mocks/products'
import { searchBarOpenAtom } from '@/state/atoms'
import { Transition } from '@headlessui/react'
import { useAtom } from 'jotai'
import { usePathname } from 'next/navigation'
import { Fragment, useEffect, useState } from 'react'
import ProductCard from '../common/ProductCard'

//TODO use dialog headless comp to get keyboard shortcuts
export default function SearchBar() {
	const [searchBarOpen, setSearchBarOpen] = useAtom(searchBarOpenAtom)
	const closeSearchBar = () => setSearchBarOpen(false)

	useEffect(() => {
		const style = document.body.style
		if (searchBarOpen) style.overflow = 'hidden'
		else style.overflow = 'auto'

		return () => {
			style.overflow = 'auto'
		}
	}, [searchBarOpen])

	const [searchTerm, setSearchTerm] = useState('')
	const [products, setProducts] = useState<IProduct[]>([])
	useEffect(() => {
		if (searchTerm.length === 0) setProducts([])
		else if (searchTerm.length < 3) return
		else
			setProducts(
				PRODUCTS.filter((product) =>
					product.name
						.toLowerCase()
						.includes(searchTerm.toLowerCase())
				)
			)
	}, [searchTerm])

	const pathname = usePathname()
	useEffect(() => setSearchBarOpen(false), [pathname, setSearchBarOpen])

	return (
		<Transition
			as={Fragment}
			show={searchBarOpen}
			enterFrom='opacity-0'
			enterTo='opacity-100'
			enter='duration-300'
			leave='duration-300'
			leaveFrom='opacity-100'
			leaveTo='opacity-0'
		>
			<div className='fixed left-0 top-0 z-20 h-screen w-screen'>
				<form className='flex h-20 items-center gap-4 rounded bg-white p-5 text-xl dark:bg-dark'>
					<i className='ri-search-line' />
					<input
						className='flex-grow rounded bg-transparent outline-none'
						type='text'
						placeholder='Search Products'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<i
						className='ri-close-line cursor-pointer'
						onClick={closeSearchBar}
					/>
				</form>
				<div className='z-20 h-full bg-black/75'>
					<ul className='flex flex-wrap justify-center gap-5 py-14'>
						{products.map((product, index) => (
							<li
								key={index}
								className='rounded bg-neutral-100 p-5 dark:bg-slate-900'
							>
								<ProductCard product={product} />
							</li>
						))}
					</ul>
				</div>
			</div>
		</Transition>
	)
}
