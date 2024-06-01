import customSizeImage from '@/../public/images/custom_size.jpg'
import { Tab } from '@headlessui/react'
import Image from 'next/image'

export default function CustomTab() {
	return (
		<Tab.Panel className='animate-fade-slide space-y-10'>
			<h3 className='text-center font-secondary text-4xl'>
				Get a custom size
			</h3>
			<Image
				src={customSizeImage}
				placeholder='blur'
				alt='custom size image'
				className='rounded'
			/>
		</Tab.Panel>
	)
}
