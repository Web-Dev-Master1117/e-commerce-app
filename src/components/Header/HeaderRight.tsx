'use client'

import { searchBarOpenAtom, shoppingCartOpenAtom } from '@/state/atoms'
import { cartStatsAtom } from '@/state/selectors'
import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect, useState } from 'react'

export default function HeaderRight() {
	const SearchBarOpen = useSetAtom(searchBarOpenAtom)
	const setShoppingCartOpen = useSetAtom(shoppingCartOpenAtom)
	const openShoppingCart = () => setShoppingCartOpen(true)

	const { itemsNumber } = useAtomValue(cartStatsAtom)
	const [showItemsNumber, setShowItemsNumber] = useState(false)
	useEffect(() => setShowItemsNumber(Boolean(itemsNumber)), [itemsNumber])

	return (
		<ul className='flex w-16 items-center justify-end gap-4 text-xl'>
			<li className='cursor-pointer hover:opacity-50'>
				<i
					className='ri-search-line'
					onClick={() => SearchBarOpen(true)}
				/>
			</li>
			<li
				className='relative cursor-pointer hover:opacity-50'
				onClick={openShoppingCart}
			>
				{showItemsNumber && (
					<span className='absolute bottom-4 left-3 flex h-5 w-5 items-center justify-center rounded-full bg-teal-400 text-xs font-semibold text-white'>
						{itemsNumber}
					</span>
				)}
				<span>
					<i className='ri-shopping-bag-line' />
				</span>
			</li>
		</ul>
	)
}
