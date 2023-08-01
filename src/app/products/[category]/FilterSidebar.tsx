'use client';

import { CATEGORIES } from '@/constants';
import { APPARELS, PERFUMES, SHOES } from '@/constants/brands';
import { tw } from '@/utils';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment, useState } from 'react';

//TODO add filter functionality

function FilterMenu() {
	const [colorFilterExpanded, setColorFilterExpanded] = useState(true);
	const [sizeFilterExpanded, setSizeFilterExpanded] = useState(true);
	const [brandsFilterExpanded, setBrandsFilterExpanded] = useState(false);
	const [categoriesFilterExpanded, setCategoriesFilterExpanded] = useState(false);
	const [priceFilterExpanded, setPriceFilterExpanded] = useState(false);

	const arrowClasses = (rotate: boolean) => (rotate ? tw`rotate-0` : tw`rotate-90`);
	return (
		<>
			<h1 className='mb-8 text-xl'>Filter</h1>
			<ul className='space-y-5'>
				<li>
					<div className='flex items-center justify-between gap-1'>
						<span>Size</span>
						<i
							className={`ri-arrow-down-s-line ${arrowClasses(
								sizeFilterExpanded,
							)} cursor-pointer transition-transform duration-500`}
							onClick={() => setSizeFilterExpanded((prev) => !prev)}
						/>
					</div>
					<Transition
						show={sizeFilterExpanded}
						unmount={false}
						enterFrom='opacity-0 max-h-0'
						enterTo='opacity-100 max-h-[800px]'
						leaveFrom='opacity-100 max-h-[800px]'
						leaveTo='opacity-0 max-h-0'
						leave='duration-500'
						enter='duration-500'
					>
						<div className='space-x-3 pt-3 font-semibold'>
							<button className='h-8 w-8 rounded border border-black duration-300 hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
								S
							</button>
							<button className='h-8 w-8 rounded border border-black hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
								M
							</button>
							<button className='h-8 w-8 rounded border border-black hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
								L
							</button>
							<button className='h-8 w-8 rounded border border-black hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
								XL
							</button>
						</div>
					</Transition>
				</li>

				<li>
					<div className='flex items-center justify-between gap-1'>
						<span>Colors</span>
						<i
							className={`ri-arrow-down-s-line ${arrowClasses(
								colorFilterExpanded,
							)} cursor-pointer transition-transform duration-500`}
							onClick={() => setColorFilterExpanded((prev) => !prev)}
						/>
					</div>
					<Transition
						show={colorFilterExpanded}
						enterFrom='opacity-0 max-h-0'
						enterTo='opacity-100 max-h-[800px]'
						leaveFrom='opacity-100 max-h-[800px]'
						leaveTo='opacity-0 max-h-0'
						leave='duration-500'
						enter='duration-500'
					>
						<ul className='flex gap-x-3 pt-3'>
							<li>
								<button className='h-8 w-8 rounded-full border-2 border-teal-400 bg-teal-400 duration-300 hover:shadow-[inset_0_0_0_4px_white]'></button>
							</li>
							<li>
								<button className='h-8 w-8 rounded-full border-2 border-yellow-800 bg-yellow-800 duration-300 hover:shadow-[inset_0_0_0_4px_white]'></button>
							</li>
							<li>
								<button className='h-8 w-8 rounded-full border-2 border-blue-400 bg-blue-400 duration-300 hover:shadow-[inset_0_0_0_4px_white]'></button>
							</li>
						</ul>
					</Transition>
				</li>

				<li>
					<div className='flex items-center justify-between gap-1'>
						<span>Brands</span>
						<i
							className={`ri-arrow-down-s-line ${arrowClasses(
								brandsFilterExpanded,
							)} cursor-pointer transition-transform duration-500`}
							onClick={() => setBrandsFilterExpanded((prev) => !prev)}
						/>
					</div>
					<Transition
						show={brandsFilterExpanded}
						unmount={false}
						enterFrom='opacity-0 max-h-0'
						enterTo='opacity-100 max-h-[800px]'
						leaveFrom='opacity-100 max-h-[800px]'
						leaveTo='opacity-0 max-h-0'
						leave='duration-300'
						enter='duration-300'
					>
						<div className='space-y-5 overflow-hidden pl-10'>
							<ul className='space-y-3 text-gray-400'>
								<li className='-ml-5 mt-3 text-black dark:text-white'>Apparel</li>
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
								<li className='-ml-5 text-black dark:text-white'>Shoes</li>
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
								<li className='-ml-5 text-black dark:text-white'>Perfumes</li>
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

				<li>
					<div className='flex items-center justify-between gap-1'>
						<span>Categories</span>
						<i
							className={`ri-arrow-down-s-line ${arrowClasses(
								categoriesFilterExpanded,
							)} cursor-pointer transition-transform duration-500`}
							onClick={() => setCategoriesFilterExpanded((prev) => !prev)}
						/>
					</div>
					<Transition
						show={categoriesFilterExpanded}
						unmount={false}
						enterFrom='opacity-0 max-h-0'
						enterTo='opacity-100 max-h-[100vh]'
						leaveFrom='opacity-100 max-h-[100vh]'
						leaveTo='opacity-0 max-h-0'
						leave='duration-300'
						enter='duration-300'
					>
						<ul className='space-y-3 pl-5 pt-3 uppercase text-gray-400'>
							{CATEGORIES.map((category, index) => (
								<li key={index}>
									<Link
										href={`products/${category}`}
										className='group flex items-center gap-2 text-sm hover:text-black dark:hover:text-white'
									>
										<span className='-ml-5 h-2 w-2 rounded-full bg-dark opacity-0 duration-300 group-hover:opacity-100 dark:bg-white' />
										{category}
									</Link>
								</li>
							))}
						</ul>
					</Transition>
				</li>

				<li>
					<div className='flex items-center justify-between gap-1'>
						<span>Price</span>
						<i
							className={`ri-arrow-down-s-line ${arrowClasses(
								priceFilterExpanded,
							)} cursor-pointer transition-transform duration-500`}
							onClick={() => setPriceFilterExpanded((prev) => !prev)}
						/>
					</div>
					<Transition
						as={Fragment}
						show={priceFilterExpanded}
						unmount={false}
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
						leave='duration-300'
						enter='duration-300'
					>
						<ul className='space-y-3 pl-5 pt-3 text-gray-400'>
							<li className='flex gap-x-3'>
								<span className='my-auto w-12'>From:</span>
								<input className='w-32 rounded border p-1' type='text' />
							</li>
							<li className='flex gap-x-3'>
								<span className='my-auto w-12'>To:</span>
								<input className='w-32 rounded border p-1' type='text' />
							</li>
						</ul>
					</Transition>
				</li>
			</ul>
		</>
	);
}

export default function FilterSidebar() {
	const [filterSidebarOpen, setFilterSidebarOpen] = useState(false);

	return (
		<>
			{!filterSidebarOpen && (
				<button
					onClick={() => setFilterSidebarOpen(true)}
					type='button'
					className='fixed left-1 top-1/2 flex h-10 w-10 translate-y-1/2 items-center justify-center rounded-full bg-teal-400/75 text-lg text-white md:hidden'
				>
					<i className='ri-filter-2-fill'></i>
				</button>
			)}

			<aside className='hidden w-80 shrink-0 flex-col px-5 font-semibold md:flex'>
				<FilterMenu />
			</aside>

			<Transition show={filterSidebarOpen}>
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
						onClick={() => setFilterSidebarOpen(false)}
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
						className='fixed left-80 top-3 z-30 ml-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-red-500 text-xl text-white'
						onClick={() => setFilterSidebarOpen(false)}
					>
						<i className='ri-close-line' />
					</div>
				</Transition.Child>
				<Transition.Child
					as={Fragment}
					enterFrom='-translate-x-80'
					enterTo='translate-x-0'
					leaveFrom='translate-x-0'
					leaveTo='-translate-x-80'
					leave='duration-300 ease-in-out'
					enter='duration-300 ease-in-out'
				>
					<aside className='fixed left-0 top-0 z-30 flex h-screen w-80 flex-col overflow-y-auto bg-white p-5 text-base font-semibold shadow-lg dark:bg-dark'>
						<FilterMenu />
					</aside>
				</Transition.Child>
			</Transition>
		</>
	);
}
