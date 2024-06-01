import { IProduct } from '@/common/interfaces'
import { getDiscountedValue } from '@/utils'
import Image from 'next/image'
import ProductCardActions from './ProductCardActions'

interface IProductCardProps {
	product: IProduct
}

export default function ProductCard({ product }: IProductCardProps) {
	return (
		<div className='flex flex-col items-center gap-4 font-semibold'>
			<div className='group relative w-max overflow-hidden'>
				<Image
					alt='product image'
					src={product.image}
					quality={100}
					placeholder='blur'
					className='h-72 w-auto rounded'
				/>
				<Image
					alt='product image'
					src={product.altImage}
					quality={100}
					className='absolute right-0 top-0 rounded opacity-0 duration-700 ease-in-out hover:scale-105 hover:opacity-100'
					placeholder='blur'
				/>

				<ProductCardActions product={product} />

				{Boolean(product.discount) && (
					<div className='absolute inset-x-0 bottom-5 mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-teal-400 text-sm text-white group-hover:opacity-0'>
						<span>-{product.discount}%</span>
					</div>
				)}
			</div>

			<div>
				<h3>{product.name}</h3>
				<h3 className='flex justify-center gap-2'>
					<span
						className={
							product.discount ? 'text-gray-400 line-through' : ''
						}
					>
						${product.price.toFixed(2)}
					</span>
					{Boolean(product.discount) &&
						'$' +
							getDiscountedValue(
								product.price,
								product.discount
							).toFixed(2)}
				</h3>
			</div>
		</div>
	)
}
