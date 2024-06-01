import { Metadata } from 'next'
import Link from 'next/link'
import CartInfo from './CartInfo'
import CartItems from './CartItems'

export function generateMetadata(): Metadata {
	return { title: 'Cart' }
}

export default function page() {
	return (
		<main>
			<section className='pb-14 pt-5'>
				{/*TODO Change to ul */}
				<div className='text flex justify-center gap-x-3 px-5 capitalize'>
					<Link href='/'>Home</Link>
					<i className='ri-arrow-right-s-line'></i>
					<span className='overflow-hidden text-ellipsis whitespace-nowrap'>
						Cart
					</span>
				</div>
				<CartItems />
			</section>
			<CartInfo />
		</main>
	)
}
