import ProductsCarousel from '@/components/ProductsCarousel'
import PRODUCTS from '@/mocks/products'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Actions from './Actions'
import TabGroup from './TabGroup'
import ThumbnailSlider from './ThumbnailSlider'

interface IProps {
	params: { id: string }
}

const getProduct = (id: string) => PRODUCTS[parseInt(id)]

export async function generateMetadata({ params }: IProps) {
	const product = getProduct(params.id)
	if (!product) notFound()
	return { title: product.name }
}

export default function page({ params }: IProps) {
	const product = getProduct(params.id)
	if (!product) notFound()
	return (
		<main>
			<section className='pb-14 pt-5'>
				{/*TODO Change to ul */}
				<div className='text flex justify-center gap-x-3 px-5 pb-5 capitalize'>
					<Link href='/'>Home</Link>
					<i className='ri-arrow-right-s-line'></i>
					<Link href='/products/all'>Product</Link>
					<i className='ri-arrow-right-s-line'></i>
					<Link href={`/products/${product.category}`}>
						{product.category}
					</Link>
					<i className='ri-arrow-right-s-line'></i>
					<span className='overflow-hidden text-ellipsis whitespace-nowrap'>
						{product.name}
					</span>
				</div>
				<div className='flex flex-wrap items-center justify-center gap-10'>
					<ThumbnailSlider product={product} />
					<Actions product={product} />
				</div>
			</section>
			<TabGroup product={product} />
			<ProductsCarousel />
		</main>
	)
}
