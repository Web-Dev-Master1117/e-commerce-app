'use client'

import { compareItemsAtom } from '@/state/atoms'
import { useAtomValue } from 'jotai'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function CompareHoverButton() {
	const [hasCompareItems, setHasCompareItems] = useState(false)
	const compareItemsNumber = useAtomValue(compareItemsAtom).length
	useEffect(
		() => setHasCompareItems(Boolean(compareItemsNumber)),
		[compareItemsNumber]
	)

	if (!hasCompareItems) return null
	return (
		<div className='fixed bottom-2 left-2 hidden sm:max-md:block'>
			<Link
				href='/compare'
				className='flex h-10 w-10 items-center justify-center rounded-full bg-teal-400 text-xl text-white'
			>
				<i className='ri-arrow-left-right-fill' />
			</Link>
			<span className='fixed bottom-8 left-9 flex h-5 w-5 items-center justify-center rounded-full bg-red-400 text-xs font-semibold text-white'>
				{compareItemsNumber}
			</span>
		</div>
	)
}
