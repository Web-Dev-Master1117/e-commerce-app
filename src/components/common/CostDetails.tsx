'use client'

import { ICartStats } from '@/definitions/interfaces'
import { TShippingPlan } from '@/definitions/types'
import { cartInfoAtom } from '@/state/atoms'
import { cartStatsAtom } from '@/state/selectors'
import { useAtomValue, useSetAtom } from 'jotai'
import { ChangeEvent, useEffect, useState } from 'react'

export default function CostDetails() {
	const cartStats = useAtomValue(cartStatsAtom)
	const setCartInfo = useSetAtom(cartInfoAtom)
	const [{ subTotal, totalDiscount, totalPrice }, setCartStats] =
		useState<ICartStats>({
			itemsNumber: 0,
			subTotal: 0,
			totalDiscount: 0,
			totalPrice: 0,
		})

	useEffect(() => setCartStats(cartStats), [cartStats])

	const shippingPlan = useAtomValue(cartInfoAtom).shippingPlan
	const handleShippingPlan = (e: ChangeEvent<HTMLInputElement>) => {
		setCartInfo((prev) => ({
			...prev,
			shippingPlan: e.target.value as TShippingPlan,
		}))
	}

	return (
		<>
			<div className='flex justify-between rounded border bg-white p-2 dark:bg-dark'>
				<input
					type='text'
					placeholder='Coupon'
					className='w-40 bg-transparent outline-none'
				/>
				<button className='rounded bg-slate-500 px-5 py-1 text-white'>
					Apply
				</button>
			</div>
			<div className='divide-y px-2'>
				<ul className='space-y-1 pb-5 text-gray-400'>
					<li className='flex justify-between'>
						<span>Sub-Total</span>
						<span>${subTotal.toFixed(2)}</span>
					</li>
					<li className='space-y-1'>
						<span>Shipping</span>
						<ul className='ml-10'>
							<li className='flex justify-between'>
								<span className='flex items-center gap-x-1'>
									<input
										type='radio'
										name='shipping-plan'
										value='free'
										id='free'
										checked={shippingPlan === 'free'}
										onChange={handleShippingPlan}
									/>
									<label htmlFor='free'>Free</label>
								</span>
								<span>$0</span>
							</li>
							<li className='flex justify-between'>
								<span className='flex items-center gap-x-1'>
									<input
										type='radio'
										name='shipping-plan'
										value='express'
										id='express'
										checked={shippingPlan === 'express'}
										onChange={handleShippingPlan}
									/>
									<label htmlFor='express'>Express</label>
								</span>
								<span>$30</span>
							</li>
						</ul>
					</li>
					<li className='flex justify-between'>
						<span>Discount</span>
						<span>{totalDiscount}</span>
					</li>
				</ul>
				<span className='flex justify-between pt-5 font-semibold'>
					<span>Total</span>
					<span>${totalPrice.toFixed(2)}</span>
				</span>
			</div>
		</>
	)
}
