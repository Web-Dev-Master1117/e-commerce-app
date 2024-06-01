'use client'

import { IProduct } from '@/definitions/interfaces'
import { wishlistItemsState } from '@/recoil/atoms'
import { getDiscountedValue } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

function WishlistItem({ wishlistItem }: { wishlistItem: IProduct }) {
	const setWishlistItems = useSetRecoilState(wishlistItemsState)
	const removeItem = () =>
		setWishlistItems((prevItems) =>
			prevItems.filter((item) => item.id !== wishlistItem.id)
		)

	return (
		<li className='relative w-[28rem] rounded border-2 p-5 shadow-lg'>
			<button
				onClick={removeItem}
				className='absolute right-2 top-2 h-7 w-7 items-center justify-center rounded-full bg-red-400 text-lg text-white'
			>
				<i className='ri-close-fill'></i>
			</button>
			<div className='flex items-center gap-x-10'>
				<Link
					href={`/products/${wishlistItem.category}/${wishlistItem.id}`}
					className='contents'
				>
					<Image
						src={wishlistItem.image}
						alt='product image'
						placeholder='blur'
						className='h-56 w-auto rounded'
					/>
				</Link>

				<ul className='flex flex-col gap-y-1 font-semibold'>
					<li className='font-secondary text-xl'>
						{wishlistItem.name}
					</li>
					<li className='capitalize text-gray-400'>
						Color: {wishlistItem.color}
					</li>
					<li className='space-x-2'>
						<span>Price:</span>
						<span
							className={
								wishlistItem.discount
									? 'text-gray-400 line-through'
									: ''
							}
						>
							${wishlistItem.price.toFixed(2)}
						</span>
						<span>
							{Boolean(wishlistItem.discount) &&
								'$' +
									getDiscountedValue(
										wishlistItem.price,
										wishlistItem.discount
									).toFixed(2)}
						</span>
					</li>
				</ul>
			</div>
		</li>
	)
}

export default function WishlistItems() {
	const wishlistItems = useRecoilValue(wishlistItemsState)
	const [showCartItems, setShowCartItems] = useState(false)
	useEffect(
		() => setShowCartItems(Boolean(wishlistItems.length)),
		[wishlistItems.length]
	)

	return (
		<>
			{showCartItems && (
				<ul className='flex flex-wrap justify-center gap-5'>
					{Array.from(wishlistItems.values()).map(
						(cartItem, index) => (
							<WishlistItem key={index} wishlistItem={cartItem} />
						)
					)}
				</ul>
			)}
		</>
	)
}
