'use client'

import { Tab } from '@headlessui/react'

export default function TabGroup({ children }: { children: React.ReactNode }) {
	return (
		<Tab.Group as='div' className='mx-auto max-w-5xl px-5'>
			<Tab.List
				as='nav'
				className='relative flex justify-center gap-x-10 pb-14 font-semibold sm:text-lg'
			>
				<Tab className='relative outline-none'>
					Product details
					<hr className='invisible absolute -bottom-[17px] right-1/2 z-10 w-0 translate-x-1/2 rounded border-2 border-black duration-300 ui-selected:visible ui-selected:w-full dark:border-white' />
				</Tab>
				<Tab className='relative outline-none'>
					Custom
					<hr className='invisible absolute -bottom-[17px] right-1/2 z-10 w-0 translate-x-1/2 rounded border-2 border-black duration-300 ui-selected:visible ui-selected:w-full dark:border-white' />
				</Tab>
				<Tab className='relative outline-none'>
					Reviews
					<span className='bg-black-400 absolute -right-4 bottom-5 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs font-semibold text-white'>
						5
					</span>
					<hr className='invisible absolute -bottom-[17px] right-1/2 z-10 w-0 translate-x-1/2 rounded border-2 border-black duration-300 ui-selected:visible ui-selected:w-full dark:border-white' />
				</Tab>
				<Tab className='relative outline-none'>
					Shipping
					<hr className='invisible absolute -bottom-[17px] right-1/2 z-10 w-0 translate-x-1/2 rounded border-2 border-black duration-300 ui-selected:visible ui-selected:w-full dark:border-white' />
				</Tab>
				<hr className='absolute bottom-10 w-full border border-gray-200 dark:border-gray-600' />
			</Tab.List>
			<Tab.Panels className='px-5'>{children}</Tab.Panels>
		</Tab.Group>
	)
}
