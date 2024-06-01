'use client'

import { ICartItem } from '@/common/interfaces'
import useCheckout from '@/hooks/checkout'
import { cartItemsState, shoppingCartOpenState } from '@/recoil/atoms'
import { getDiscountedValue } from '@/utils'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import Stripe from 'stripe'
import CostDetails from './common/CostDetails'

//TODO use dialog headless comp to get keyboard shortcuts
export default function ShoppingCart() {
	const [sidebarOpen, setSidebarOpen] = useRecoilState(shoppingCartOpenState)
	const [cartItems, setCartItems] = useRecoilState(cartItemsState)
	const [showCartItems, setShowCartItems] = useState(false)
	useEffect(() => setShowCartItems(Boolean(cartItems.size)), [cartItems.size])

	const closeSidebar = () => setSidebarOpen(false)

	const handleChangeQuantity = (cartItem: ICartItem, quantity: number) => {
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

	const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] =
		Array.from(cartItems.values()).map(({ quantity, stripePriceId }) => ({
			quantity,
			price: stripePriceId,
		}))

	const { checkout, isLoading, isError } = useCheckout(lineItems)

	return (
		<Transition show={sidebarOpen}>
			<Transition.Child
				as={Fragment}
				enterFrom='opacity-0'
				enterTo='opacity-100'
				leaveFrom='opacity-100'
				leaveTo='opacity-0'
				leave='duration-300 ease-in-out'
				enter='duration-300 ease-in-out'
			>
				<div
					className='fixed left-0 top-0 z-30 h-screen w-screen bg-black/75 text-xl'
					onClick={closeSidebar}
				/>
			</Transition.Child>
			<Transition.Child
				as={Fragment}
				enterFrom='opacity-0'
				enterTo='opacity-100'
				leaveFrom='opacity-100'
				leaveTo='opacity-0'
				leave='duration-300 ease-in-out'
				enter='duration-300 ease-in-out'
			>
				<div
					className='fixed right-80 top-3 z-30 mr-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-red-400 text-xl text-white'
					onClick={closeSidebar}
				>
					<i className='ri-close-line' />
				</div>
			</Transition.Child>
			<Transition.Child
				as={Fragment}
				enterFrom='translate-x-80'
				enterTo='translate-x-0'
				leaveFrom='translate-x-0'
				leaveTo='translate-x-80'
				leave='duration-300 ease-in-out'
				enter='duration-300 ease-in-out'
			>
				<aside className='fixed right-0 top-0 z-30 flex h-screen w-80 flex-col gap-y-5 overflow-y-auto bg-white text-base shadow-lg dark:bg-dark'>
					<h3 className='px-5 pt-5 font-secondary text-3xl'>
						Shopping Cart
					</h3>
					{showCartItems && (
						<ul className='space-y-3 overflow-auto pl-5'>
							{Array.from(cartItems.values()).map(
								(cartItem, index) => (
									<li
										key={index}
										className='flex gap-x-3 text-sm'
									>
										<div className='flex flex-col items-center text-lg text-black'>
											<button
												disabled={
													cartItem.quantity <= 0
												}
												onClick={() =>
													handleChangeQuantity(
														cartItem,
														cartItem.quantity - 1
													)
												}
												className='h-8 w-8 rounded-t bg-gray-200'
											>
												-
											</button>
											<span className='flex h-8 w-8 items-center justify-center bg-gray-200'>
												{cartItem.quantity}
											</span>
											<button
												onClick={() =>
													handleChangeQuantity(
														cartItem,
														cartItem.quantity + 1
													)
												}
												className='h-8 w-8 rounded-b bg-gray-200'
											>
												+
											</button>
										</div>
										<Image
											src={cartItem.image}
											alt='product image'
											placeholder='blur'
											className='h-24 w-auto rounded'
										/>
										<ul className='flex flex-col'>
											<li className='font-semibold'>
												{cartItem.name}
											</li>
											<li className='capitalize text-gray-400'>
												Color: {cartItem.color}
											</li>
											<li className='text-gray-400'>
												Size: {cartItem.size}
											</li>
											<li className='mt-auto space-x-1'>
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
													{Boolean(
														cartItem.discount
													) &&
														'$' +
															getDiscountedValue(
																cartItem.price,
																cartItem.discount
															).toFixed(2)}
												</span>
											</li>
										</ul>
									</li>
								)
							)}
						</ul>
					)}

					<div className='mt-auto space-y-3 border border-gray-50 bg-gray-100 p-5 dark:border-slate-800 dark:bg-slate-900'>
						<CostDetails />
						<div className='space-y-3 font-semibold'>
							<form
								action='/checkout_sessions'
								method='post'
							></form>
							<button
								disabled={isLoading}
								className={`${
									isError ? 'bg-red-400' : 'bg-teal-400'
								} w-full rounded py-2 text-white duration-300`}
								onClick={checkout}
							>
								{isLoading
									? 'Loading...'
									: isError
										? 'Try Again'
										: 'Checkout'}
							</button>

							<Link
								href='/cart'
								type='button'
								className='flex h-10 w-full items-center justify-center rounded border duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
								onClick={closeSidebar}
							>
								View Cart
							</Link>
						</div>
					</div>
				</aside>
			</Transition.Child>
		</Transition>
	)
}
