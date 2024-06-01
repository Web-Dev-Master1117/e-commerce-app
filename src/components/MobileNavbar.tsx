'use client'

import {
	compareItemsAtom,
	shoppingCartOpenAtom,
	wishlistItemsAtom,
} from '@/state/atoms'
import { cartStatsAtom } from '@/state/selectors'
import { useAtomValue, useSetAtom } from 'jotai'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function MobileNavbar() {
	const setShoppingCartOpen = useSetAtom(shoppingCartOpenAtom)

	const { itemsNumber } = useAtomValue(cartStatsAtom)
	const [showItemsNumber, setShowItemsNumber] = useState(false)
	useEffect(() => setShowItemsNumber(Boolean(itemsNumber)), [itemsNumber])

	const wishlistItemsNumber = useAtomValue(wishlistItemsAtom).length
	const [hasWishlistItems, setHasWishlistItems] = useState(false)
	useEffect(
		() => setHasWishlistItems(Boolean(wishlistItemsNumber)),
		[wishlistItemsNumber]
	)

	const [hasCompareItems, setHasCompareItems] = useState(false)
	const compareItemsNumber = useAtomValue(compareItemsAtom).length
	useEffect(
		() => setHasCompareItems(Boolean(compareItemsNumber)),
		[compareItemsNumber]
	)

	const { setTheme, theme } = useTheme()
	const [themeIcon, setThemeIcon] = useState('ri-computer-line')

	useEffect(() => {
		switch (theme) {
			case 'light':
				setThemeIcon('ri-sun-line')
				break
			case 'dark':
				setThemeIcon('ri-moon-line')
				break
			default:
				setThemeIcon('ri-computer-line')
				break
		}
	}, [setTheme, theme])

	const scrollToTop = () => {
		if (typeof window !== 'undefined')
			window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<nav className='fixed bottom-0 left-0 z-20 h-14 w-full bg-white shadow-t-lg dark:bg-dark sm:hidden'>
			<ul className='flex h-full items-center justify-around text-xl'>
				<li>
					<Link href='/'>
						<i className='ri-home-2-line'></i>
					</Link>
				</li>
				<li>
					<Link href='/compare' className='relative'>
						<i className='ri-arrow-left-right-fill'></i>
						{hasCompareItems && (
							<span className='absolute bottom-4 left-3 flex h-5 w-5 items-center justify-center rounded-full bg-teal-400 text-xs font-semibold text-white'>
								{compareItemsNumber}
							</span>
						)}
					</Link>
				</li>
				<li>
					<Link href='/wishlist' className='relative'>
						<i className='ri-star-line'></i>
						{hasWishlistItems && (
							<span className='absolute bottom-4 left-3 flex h-5 w-5 items-center justify-center rounded-full bg-teal-400 text-xs font-semibold text-white'>
								{wishlistItemsNumber}
							</span>
						)}
					</Link>
				</li>
				<li
					onClick={() => setShoppingCartOpen(true)}
					className='relative cursor-pointer'
				>
					<i className='ri-shopping-bag-2-line'></i>
					{showItemsNumber && (
						<span className='absolute bottom-4 left-3 flex h-5 w-5 items-center justify-center rounded-full bg-teal-400 text-xs font-semibold text-white'>
							{itemsNumber}
						</span>
					)}
				</li>
				<li className='group relative cursor-pointer'>
					<i className={themeIcon}></i>
					<ul className='invisible absolute bottom-14 right-1/2 translate-x-1/2 space-y-2 text-white opacity-0 duration-300 group-hover:visible group-hover:opacity-100'>
						<li
							className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-teal-400'
							onClick={() => setTheme('light')}
						>
							<i className='ri-sun-fill' />
						</li>
						<li
							className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-teal-400'
							onClick={() => setTheme('dark')}
						>
							<i className='ri-moon-line' />
						</li>
						<li
							className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-teal-400'
							onClick={() => setTheme('system')}
						>
							<i className='ri-computer-line' />
						</li>
					</ul>
				</li>
				<li onClick={scrollToTop} className='cursor-pointer'>
					<i className='ri-arrow-up-line'></i>
				</li>
			</ul>
		</nav>
	)
}
