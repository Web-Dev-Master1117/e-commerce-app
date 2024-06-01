'use client'
import { IProduct } from '@/definitions/interfaces'
import { compareItemsState, wishlistItemsState } from '@/recoil/atoms'
import { tw } from '@/utils'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import Tooltip from '../Tooltip'

export default function ProductCardActions({ product }: { product: IProduct }) {
	const [wishlistItems, setWishlistItems] = useRecoilState(wishlistItemsState)
	const [isItemWished, setIsItemWished] = useState(false)
	useEffect(
		() =>
			setIsItemWished(
				!wishlistItems.every(({ id }) => id !== product.id)
			),
		[wishlistItems, product]
	)

	const handleAddRemoveWishlistItems = () =>
		isItemWished
			? setWishlistItems((prev) =>
					prev.filter((item) => item.id !== product.id)
				)
			: setWishlistItems((prev) => [product, ...prev])

	const wishlistIconClasses = isItemWished
		? tw`bg-yellow-400 text-white`
		: tw`bg-white text-black hover:bg-black hover:text-white`

	const [compareItems, setCompareItems] = useRecoilState(compareItemsState)
	const [isCompareItem, setIsCompareItem] = useState(false)
	useEffect(
		() =>
			setIsCompareItem(
				!compareItems.every(({ id }) => id !== product.id)
			),
		[compareItems, product]
	)

	const handleAddRemoveCompareItems = () =>
		isCompareItem
			? setCompareItems((prev) =>
					prev.filter((item) => item.id !== product.id)
				)
			: setCompareItems((prev) => [product, ...prev])

	const compareIconClasses = isCompareItem
		? tw`bg-teal-400 text-white`
		: tw`bg-white text-black hover:bg-black hover:text-white`

	return (
		<ul className='absolute bottom-5 z-20 flex w-full translate-y-5 justify-center gap-4 text-lg opacity-0 duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
			<li>
				<Tooltip title='Compare' postilion='top'>
					<button
						onClick={handleAddRemoveCompareItems}
						className={`${compareIconClasses} flex h-10 w-10 items-center justify-center rounded-full duration-300`}
					>
						<i className='ri-arrow-left-right-fill' />
					</button>
				</Tooltip>
			</li>
			<li>
				<Tooltip title='View' postilion='top'>
					<Link
						href={`/products/${product.category}/${product.id}`}
						className='flex h-10 w-10 items-center justify-center rounded-full bg-white text-black duration-300 hover:bg-black hover:text-white'
					>
						<i className='ri-eye-line' />
					</Link>
				</Tooltip>
			</li>
			<li>
				<Tooltip title='Wishlist' postilion='top'>
					<button
						onClick={handleAddRemoveWishlistItems}
						className={`${wishlistIconClasses} flex h-10 w-10 items-center justify-center rounded-full duration-300`}
					>
						<i className='ri-star-line' />
					</button>
				</Tooltip>
			</li>
		</ul>
	)
}
