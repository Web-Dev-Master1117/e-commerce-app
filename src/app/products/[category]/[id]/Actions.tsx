'use client';

import { IProduct } from '@/common/interfaces';
import { TSize } from '@/common/types';
import useCheckout from '@/hooks/checkout';
import { cartItemsState, compareItemsState, wishlistItemsState } from '@/recoil/atoms';
import { getDiscountedValue, tw } from '@/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

export default function Actions({ product }: { product: IProduct }) {
	const price = product.price.toFixed(2);
	const discountedPrice = getDiscountedValue(product.price, product.discount).toFixed(2);

	const [cartItems, setCartItems] = useRecoilState(cartItemsState);
	const [size, setSize] = useState<TSize>('M');
	const [quantity, setQuantity] = useState(0);

	const handleAddToCart = () =>
		setCartItems((prev) => {
			const newItems = new Map(prev);
			newItems.set(`${size}.${product.id}`, { ...product, quantity, size });
			return newItems;
		});

	useEffect(() => {
		setQuantity(cartItems.get(`${size}.${product.id}`)?.quantity ?? 0);
	}, [cartItems, product.id, size]);

	const [wishlistItems, setWishlistItems] = useRecoilState(wishlistItemsState);
	const [isItemWished, setIsItemWished] = useState(false);
	useEffect(
		() => setIsItemWished(!wishlistItems.every(({ id }) => id !== product.id)),
		[wishlistItems, product]
	);

	const handleAddRemoveWishlistItems = () =>
		isItemWished
			? setWishlistItems((prev) => prev.filter((item) => item.id !== product.id))
			: setWishlistItems((prev) => [product, ...prev]);

	const wishlistIconClasses = isItemWished ? tw`text-red-400 ri-heart-fill` : tw`ri-heart-line`;

	const [compareItems, setCompareItems] = useRecoilState(compareItemsState);
	const [isCompareItem, setIsCompareItem] = useState(false);
	useEffect(
		() => setIsCompareItem(!compareItems.every(({ id }) => id !== product.id)),
		[compareItems, product.id]
	);

	const handleAddRemoveCompareItems = () =>
		isCompareItem
			? setCompareItems((prev) => prev.filter((item) => item.id !== product.id))
			: setCompareItems((prev) => [product, ...prev]);

	const compareIconClasses = isCompareItem ? tw`text-teal-400` : tw``;

	const { checkout, isError, isLoading } = useCheckout([
		{ quantity: quantity ? quantity : 1, price: product.stripePriceId },
	]);
	const handleBuyNow = () => checkout();

	return (
		<div className='max-w-xl space-y-3 px-5'>
			<div className='space-y-2'>
				<h1 className='font-secondary text-5xl'>{product.name}</h1>

				<div className='flex gap-x-3 font-semibold'>
					<span className='flex gap-x-2'>
						<i className='ri-star-fill my-auto text-yellow-400'></i>
						<span>4.5</span>
					</span>
					<span className='text-blue-400'> 5 Reviews</span>
				</div>
			</div>

			<div className='flex items-center'>
				<span className='text-3xl'>${product.discount ? discountedPrice : price}</span>
				{Boolean(product.discount) && (
					<div className='before:content-[" "] relative pl-8 before:absolute before:top-0 before:left-3 before:h-full before:w-px before:rotate-[25deg] before:bg-slate-400'>
						<h3 className='text-gray-400 line-through'>${price}</h3>
						<h3 className='text-red-400'>-{product.discount}%</h3>
					</div>
				)}
			</div>

			<div className='space-y-1'>
				<span className='font-semibold'>Colors:</span>
				<ul className='flex gap-x-3'>
					{product.relatedProducts?.map(({ color, id }, index) => (
						<li key={index}>
							<Link
								href={`/products/${product.category}/${id}`}
								className={`block h-10 w-10 rounded-full border-2 ${color} duration-300 hover:shadow-[inset_0_0_0_4px_white]`}
							></Link>
						</li>
					))}
				</ul>
			</div>

			<div className='space-y-1'>
				<span className='font-semibold'>Size:</span>
				<ul className='flex gap-x-3 text-lg font-semibold'>
					<li>
						<input
							className='peer hidden'
							type='radio'
							name='size'
							id='s'
							value='S'
							onChange={(e) => setSize(e.target.value as TSize)}
						/>
						<label
							className='flex h-10 w-10 cursor-pointer items-center justify-center rounded border border-black bg-transparent text-black duration-300 peer-checked:bg-black peer-checked:text-white dark:border-white dark:text-white dark:peer-checked:bg-white dark:peer-checked:text-black'
							htmlFor='s'
						>
							S
						</label>
					</li>
					<li>
						<input
							className='peer hidden'
							type='radio'
							name='size'
							id='m'
							value='M'
							defaultChecked
							onChange={(e) => setSize(e.target.value as TSize)}
						/>
						<label
							className='flex h-10 w-10 cursor-pointer items-center justify-center rounded border border-black bg-transparent text-black duration-300 peer-checked:bg-black peer-checked:text-white dark:border-white dark:text-white dark:peer-checked:bg-white dark:peer-checked:text-black'
							htmlFor='m'
						>
							M
						</label>
					</li>
					<li>
						<input
							className='peer hidden'
							type='radio'
							name='size'
							id='l'
							value='L'
							onChange={(e) => setSize(e.target.value as TSize)}
						/>
						<label
							className='flex h-10 w-10 cursor-pointer items-center justify-center rounded border border-black bg-transparent text-black duration-300 peer-checked:bg-black peer-checked:text-white dark:border-white dark:text-white dark:peer-checked:bg-white dark:peer-checked:text-black'
							htmlFor='l'
						>
							L
						</label>
					</li>
					<li>
						<input
							className='peer hidden'
							type='radio'
							name='size'
							id='xl'
							value='XL'
							onChange={(e) => setSize(e.target.value as TSize)}
						/>
						<label
							className='flex h-10 w-10 cursor-pointer items-center justify-center rounded border border-black bg-transparent text-black duration-300 peer-checked:bg-black peer-checked:text-white dark:border-white dark:text-white dark:peer-checked:bg-white dark:peer-checked:text-black'
							htmlFor='xl'
						>
							XL
						</label>
					</li>
				</ul>
			</div>

			<div className='flex items-center gap-x-3'>
				<span>
					<strong>201</strong> in stock
				</span>
				<i className='ri-checkbox-circle-line text-green-400' />
			</div>

			<div className='flex flex-wrap gap-3'>
				<div className='flex items-center text-xl text-black'>
					<button
						disabled={!quantity}
						onClick={() => setQuantity((prev) => prev - 1)}
						className='h-10 w-10 rounded-l bg-gray-200'
					>
						-
					</button>
					<span className='flex h-10 w-10 items-center justify-center bg-gray-200'>{quantity}</span>
					<button
						onClick={() => setQuantity((prev) => prev + 1)}
						className='h-10 w-10 rounded-r bg-gray-200'
					>
						+
					</button>
				</div>
				<button
					onClick={handleAddToCart}
					className='h-10 flex-grow rounded border align-middle font-semibold duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
				>
					ADD TO CART
				</button>
				<button
					disabled={isLoading}
					onClick={handleBuyNow}
					className={`h-10 w-full rounded ${
						isError ? 'bg-red-400' : 'bg-teal-400'
					} font-semibold text-white duration-300`}
				>
					{isLoading ? 'Loading...' : isError ? 'Try Again' : 'BUY NOW'}
				</button>
			</div>

			<div className='divide-y'>
				<ul className='flex flex-wrap gap-x-5 gap-y-1 pb-3'>
					<li
						onClick={handleAddRemoveWishlistItems}
						className='flex cursor-pointer items-center gap-x-2 hover:opacity-50'
					>
						<i className={`${wishlistIconClasses} text-xl duration-300`}></i>
						<span>{isItemWished ? 'Remove from wishlist' : 'Add to wishlist'}</span>
					</li>
					<li
						onClick={handleAddRemoveCompareItems}
						className='flex cursor-pointer items-center gap-x-2 hover:opacity-50'
					>
						<i
							className={`${compareIconClasses} ri-arrow-left-right-fill text-xl duration-300`}
						></i>
						<span>{isCompareItem ? 'Remove from compare' : 'Compare'}</span>
					</li>
					<li className='flex items-center gap-x-2 hover:opacity-50'>
						<i className='ri-share-line text-xl'></i>
						<span>Share</span>
					</li>
					<li className='flex items-center gap-x-2 hover:opacity-50'>
						<i className='ri-question-line text-xl'></i>
						<span>Ask Question</span>
					</li>
				</ul>

				<ul className='pt-3'>
					<li className='flex items-center gap-x-2'>
						<i className='ri-gift-line'></i>
						<span>Free shipping & return </span>
						<span className='text-gray-400'>On orders over $60</span>
					</li>
					<li className='flex items-center gap-x-2'>
						<i className='ri-truck-line'></i>
						<span>Estimate delivery: </span>
						<span className='text-gray-400'>05 - 12 Aug 2023</span>
					</li>
				</ul>
			</div>
		</div>
	);
}
