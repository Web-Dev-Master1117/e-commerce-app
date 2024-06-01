'use client'

import { APPARELS, PERFUMES, SHOES, SPECIALS } from '@/constants/brands'
import { sidebarOpenState } from '@/recoil/atoms'
import { tw } from '@/utils'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

//TODO use dialog headless comp to get keyboard shortcuts
export default function Sidebar() {
	const [productsMenuOpen, setProductsMenuOpen] = useState(false)
	const [specialsMenuOpen, setSpecialsMenuOpen] = useState(false)
	const toggleProductsMenu = () => {
		setProductsMenuOpen((prev) => !prev)
		setSpecialsMenuOpen(false)
	}
	const toggleSpecialsMenu = () => {
		setSpecialsMenuOpen((prev) => !prev)
		setProductsMenuOpen(false)
	}

	const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarOpenState)
	const pathname = usePathname()
	useEffect(() => setSidebarOpen(false), [pathname, setSidebarOpen])
	const closeSidebar = () => setSidebarOpen(false)

	const specialsMenuRotate = specialsMenuOpen ? tw`rotate-0` : tw`rotate-90`
	const productsMenuRotate = productsMenuOpen ? tw`rotate-0` : tw`rotate-90`

	useEffect(() => {
		const style = document.body.style
		if (sidebarOpen) style.overflow = 'hidden'
		else style.overflow = 'auto'

		return () => {
			style.overflow = 'auto'
		}
	}, [sidebarOpen])

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
					className='fixed left-72 top-3 z-30 ml-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-teal-400 text-xl text-white'
					onClick={closeSidebar}
				>
					<i className='ri-close-line' />
				</div>
			</Transition.Child>
			<Transition.Child
				as={Fragment}
				enterFrom='-translate-x-72'
				enterTo='translate-x-0'
				leaveFrom='translate-x-0'
				leaveTo='-translate-x-72'
				leave='duration-300 ease-in-out'
				enter='duration-300 ease-in-out'
			>
				<aside className='fixed left-0 top-0 z-30 flex h-screen w-72 flex-col overflow-y-auto bg-white p-5 text-base font-semibold shadow-lg dark:bg-dark'>
					<ul className='space-y-5'>
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>
							<div className='flex items-center justify-between'>
								<Link href='/products/all'>Products</Link>
								<i
									className={`ri-arrow-down-s-line ${productsMenuRotate} cursor-pointer transition-transform duration-500`}
									onClick={toggleProductsMenu}
								/>
							</div>

							<Transition
								as={Fragment}
								show={productsMenuOpen}
								unmount={false}
								enterFrom='max-h-0'
								enterTo='max-h-[800px]'
								leaveFrom='max-h-[800px]'
								leaveTo='max-h-0'
								leave='duration-500 ease-in-out'
								enter='duration-500 ease-in-out'
							>
								<div className='space-y-5 overflow-hidden pl-10'>
									<ul className='space-y-3 text-gray-400'>
										<li className='-ml-5 mt-3 text-black dark:text-white'>
											Apparel
										</li>
										{APPARELS.map((apparel, index) => (
											<li
												key={index}
												className='group flex cursor-pointer items-center gap-2 text-sm hover:text-black dark:hover:text-white'
											>
												<span className='-ml-5 h-2 w-2 rounded-full bg-dark opacity-0 duration-300 group-hover:opacity-100 dark:bg-white' />
												{apparel}
											</li>
										))}
									</ul>

									<ul className='space-y-3 text-gray-400'>
										<li className='-ml-5 text-black dark:text-white'>
											Shoes
										</li>
										{SHOES.map((shoe, index) => (
											<li
												key={index}
												className='group flex cursor-pointer items-center gap-2 text-sm hover:text-black dark:hover:text-white'
											>
												<span className='-ml-5 h-2 w-2 rounded-full bg-dark opacity-0 duration-300 group-hover:opacity-100 dark:bg-white' />
												{shoe}
											</li>
										))}
									</ul>

									<ul className='space-y-3 text-gray-400'>
										<li className='-ml-5 text-black dark:text-white'>
											Perfumes
										</li>
										{PERFUMES.map((perfume, index) => (
											<li
												key={index}
												className='group flex cursor-pointer items-center gap-2 text-sm hover:text-black dark:hover:text-white'
											>
												<span className='-ml-5 h-2 w-2 rounded-full bg-dark opacity-0 duration-300 group-hover:opacity-100 dark:bg-white' />
												{perfume}
											</li>
										))}
									</ul>
								</div>
							</Transition>
						</li>
						<li className='cursor-pointer'>Discounts</li>
						<li>
							<div className='flex items-center justify-between gap-1'>
								<span>Specials</span>
								<i
									className={`ri-arrow-down-s-line ${specialsMenuRotate} cursor-pointer transition-transform duration-500`}
									onClick={toggleSpecialsMenu}
								/>
							</div>
							<Transition
								as={Fragment}
								show={specialsMenuOpen}
								unmount={false}
								enterFrom='max-h-0'
								enterTo='max-h-[800px]'
								leaveFrom='max-h-[800px]'
								leaveTo='max-h-0'
								leave='duration-500 ease-in-out'
								enter='duration-500 ease-in-out'
							>
								<ul className='overflow-hidden text-gray-400'>
									{SPECIALS.map((perfume, index) => (
										<li
											key={index}
											className='dark:hover:text-whit group mt-3 flex cursor-pointer items-center gap-2 pl-5 text-sm hover:text-black'
										>
											<span className='-ml-5 h-2 w-2 rounded-full bg-dark opacity-0 duration-300 group-hover:opacity-100 dark:bg-white' />
											{perfume}
										</li>
									))}
								</ul>
							</Transition>
						</li>
						<li className='cursor-pointer'>
							<span>Sales</span>
						</li>
					</ul>
				</aside>
			</Transition.Child>
		</Transition>
	)
}
