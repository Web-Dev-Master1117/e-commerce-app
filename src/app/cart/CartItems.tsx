'use client'

import { ICartItem } from '@/definitions/interfaces'
import { cartItemsState } from '@/recoil/atoms'
import { getDiscountedValue } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

function CartItem({ cartItem }: { cartItem: ICartItem }) {
	const setCartItems = useSetRecoilState(cartItemsState)

	const handleChangeQuantity = (quantity: number) => {
		setCartItems((prevItems) => {
			const newItems = new Map(prevItems)
			quantity <= 0
				? newItems.delete(`${cartItem.size}.${cartItem.id}`)
				: newItems.set(`${cartItem.size}.${cartItem.id}`, {
						...cartItem,
						quantity,
					})
			return newItems
		})
	}

	const removeItem = () =>
		setCartItems((prevItems) => {
			const newItems = new Map(prevItems)
			newItems.delete(`${cartItem.size}.${cartItem.id}`)
			return newItems
		})

	return (
		<li className='w-[28rem] divide-y rounded border-2 p-5 shadow-lg'>
			<div className='flex items-center gap-x-10 pb-3'>
				<Link
					href={`/products/${cartItem.category}/${cartItem.id}`}
					className='contents'
				>
					<Image
						src={cartItem.image}
						alt='product image'
						placeholder='blur'
						className='h-56 w-auto rounded'
					/>
				</Link>

				<ul className='flex flex-col gap-y-1 font-semibold'>
					<li className='font-secondary text-xl'>{cartItem.name}</li>
					<li className='capitalize text-gray-400'>
						Color: {cartItem.color}
					</li>
					<li className='text-gray-400'>Size: {cartItem.size}</li>
					<li className='space-x-2'>
						<span>Price:</span>
						<span
							className={
								cartItem.discount
									? 'text-gray-400 line-through'
									: ''
							}
						>
							${cartItem.price.toFixed(2)}
						</span>
						<span>
							{Boolean(cartItem.discount) &&
								'$' +
									getDiscountedValue(
										cartItem.price,
										cartItem.discount
									).toFixed(2)}
						</span>
					</li>
				</ul>
			</div>

			<div className='flex items-center justify-between pt-3'>
				<div className='flex items-center rounded bg-gray-200 text-black'>
					<button
						disabled={cartItem.quantity <= 0}
						onClick={() =>
							handleChangeQuantity(cartItem.quantity - 1)
						}
						className='h-8 w-8'
					>
						-
					</button>
					<span className='flex h-8 w-8 items-center justify-center bg-gray-200'>
						{cartItem.quantity}
					</span>
					<button
						onClick={() =>
							handleChangeQuantity(cartItem.quantity + 1)
						}
						className='h-8 w-8'
					>
						+
					</button>
				</div>

				<span className='font-semibold'>
					Total: $
					{(
						getDiscountedValue(cartItem.price, cartItem.discount) *
						cartItem.quantity
					).toFixed(2)}
				</span>

				<button
					onClick={removeItem}
					className='flex h-6 w-6 items-center justify-center rounded-full bg-red-400 text-white'
				>
					<i className='ri-close-fill text-lg'></i>
				</button>
			</div>
		</li>
	)
}

export default function CartItems() {
	const cartItems = useRecoilValue(cartItemsState)
	const [showCartItems, setShowCartItems] = useState(false)
	useEffect(() => setShowCartItems(Boolean(cartItems.size)), [cartItems.size])

	return (
		<div>
			<h1 className='my-8 text-center font-secondary text-5xl'>Cart</h1>
			{showCartItems && (
				<ul className='flex flex-wrap justify-center gap-5'>
					{Array.from(cartItems.values()).map((cartItem, index) => (
						<CartItem key={index} cartItem={cartItem} />
					))}
				</ul>
			)}
		</div>
	)
}
