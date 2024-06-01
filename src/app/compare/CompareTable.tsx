'use client'

import { compareItemsAtom } from '@/state/atoms'
import { getDiscountedValue } from '@/utils'
import { useAtom } from 'jotai'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function CompareTable() {
	const [hasCompareItems, setHasCompareItems] = useState(false)
	const [compareItems, setCompareItems] = useAtom(compareItemsAtom)

	useEffect(
		() => setHasCompareItems(Boolean(compareItems.length)),
		[compareItems.length]
	)

	const removeItem = (productId: number) => () =>
		setCompareItems((prev) => prev.filter((item) => item.id !== productId))

	if (!hasCompareItems) return null

	return (
		<table className='mx-auto block overflow-x-auto rounded border capitalize'>
			<thead>
				<tr className='bg-neutral-100 dark:bg-neutral-900'>
					<th></th>
					{compareItems.map((product, index) => (
						<th key={index} className='space-y-3 px-4 pb-3 pt-6'>
							<Link
								href={`products/${product.category}/${product.id}`}
							>
								<Image
									alt='product image'
									src={product.image}
									quality={100}
									placeholder='blur'
									className='h-72 w-auto min-w-[214.8px] rounded border'
								/>
							</Link>
							<button
								onClick={removeItem(product.id)}
								className='mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-red-400 text-white'
							>
								<i className='ri-close-fill text-lg'></i>
							</button>
						</th>
					))}
				</tr>
			</thead>
			<tbody className='space-x-3 divide-y whitespace-nowrap'>
				<tr className='border-t'>
					<td className='px-4 py-2 font-semibold'>Name</td>
					{compareItems.map((product, index) => (
						<td className='px-4 py-2' key={index}>
							{product.name}
						</td>
					))}
				</tr>
				<tr className='bg-neutral-100 dark:bg-neutral-900'>
					<td className='px-4 py-2 font-semibold'>Color</td>
					{compareItems.map((product, index) => (
						<td className='px-4 py-2' key={index}>
							{product.color}
						</td>
					))}
				</tr>
				<tr>
					<td className='px-4 py-2 font-semibold'>Price</td>
					{compareItems.map((product, index) => (
						<td className='space-x-2 px-4 py-2' key={index}>
							<span
								className={
									product.discount
										? 'text-gray-400 line-through'
										: ''
								}
							>
								${product.price.toFixed(2)}
							</span>
							<span>
								{Boolean(product.discount) &&
									'$' +
										getDiscountedValue(
											product.price,
											product.discount
										).toFixed(2)}
							</span>
						</td>
					))}
				</tr>
			</tbody>
		</table>
	)
}
