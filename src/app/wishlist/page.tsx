import { Metadata } from 'next'
import Link from 'next/link'
import WishlistItems from './WishlistItems'

export function generateMetadata(): Metadata {
	return { title: 'Wishlist' }
}

export default function page() {
	return (
		<main>
			<section className='py-14'>
				{/*TODO Change to ul */}
				<div className='text flex justify-center gap-x-3 px-5 pb-5 capitalize'>
					<Link href='/'>Home</Link>
					<i className='ri-arrow-right-s-line'></i>
					<span className='overflow-hidden text-ellipsis whitespace-nowrap'>
						Wishlist
					</span>
				</div>
				<h1 className='my-10 text-center font-secondary text-5xl'>
					Wishlist
				</h1>
				<WishlistItems />
			</section>
		</main>
	)
}
