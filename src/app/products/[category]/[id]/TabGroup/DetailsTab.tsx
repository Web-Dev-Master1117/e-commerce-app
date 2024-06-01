import { IProduct } from '@/common/interfaces'
import { Tab } from '@headlessui/react'

export default function DetailsTab({ product }: { product: IProduct }) {
	return (
		<Tab.Panel className='animate-fade-slide space-y-3'>
			<h3 className='font-secondary text-4xl'>{product.name}</h3>
			<div className='space-y-5 text-gray-400'>
				{/* cSpell:disable */}
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Distinctio ut ea totam, dolores, doloribus aut saepe fugiat
					vero repellendus minima maiores aliquam ullam vel officiis
					inventore similique voluptatum nam ipsum?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Distinctio ut ea totam, dolores, doloribus aut saepe fugiat
					vero repellendus minima maiores aliquam ullam vel officiis
					inventore similique voluptatum nam ipsum?
				</p>
			</div>
			<ul className='flex justify-between gap-5 pt-7'>
				<li>
					<h3 className='font-semibold'>What is it made from?</h3>
					<p className='text-gray-400'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Distinctio ut ea totam, dolores.
					</p>
				</li>
				<li>
					<h3 className='font-semibold'>What is spacial about it?</h3>
					<p className='text-gray-400'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Distinctio ut ea totam, dolores.
					</p>
				</li>
				<li>
					<h3 className='font-semibold'>Cleaning Instructions</h3>
					<p className='text-gray-400'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Distinctio ut ea totam, dolores.
					</p>
				</li>
			</ul>
		</Tab.Panel>
	)
}
