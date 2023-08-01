'use client';

import { Dialog } from '@headlessui/react';
import { useState } from 'react';

export default function ReviewFormDialog() {
	let [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				type='button'
				onClick={() => setIsOpen(true)}
				className='h-12 rounded border border-black px-6 duration-300 hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'
			>
				WRITE A REVIEW
			</button>
			<Dialog open={isOpen} onClose={() => setIsOpen(false)} className='relative z-40'>
				<div className='fixed inset-0 bg-black/75' aria-hidden='true' />
				<div className='fixed inset-0 flex items-center justify-center p-5'>
					<Dialog.Panel className='relative max-w-xl space-y-5 rounded bg-white px-5 py-10 dark:bg-dark'>
						<Dialog.Title className='text-center font-secondary text-4xl'>
							Write a review
						</Dialog.Title>

						<div className='space-y-3'>
							<span className='flex gap-x-3'>
								<h6>Your rating: </h6>
								<span className='flex items-center gap-x-2 text-yellow-400'>
									<i className='ri-star-fill' />
									<i className='ri-star-fill' />
									<i className='ri-star-fill' />
									<i className='ri-star-half-fill' />
								</span>
							</span>
							<input
								type='text'
								className='w-full rounded border border-gray-400 px-3 py-2'
								placeholder='Review Title'
							/>
							<textarea
								className='w-full rounded border border-gray-400 px-3 py-2'
								placeholder='Review...'
								rows={5}
							/>
						</div>

						<button onClick={() => setIsOpen(false)} className='absolute right-3 top-0 text-xl'>
							<i className='ri-close-fill'></i>
						</button>
					</Dialog.Panel>
				</div>
			</Dialog>
		</>
	);
}
