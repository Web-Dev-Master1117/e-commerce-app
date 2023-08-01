'use client';

import PRODUCTS from '@/mocks/products';
import { tw } from '@/utils';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import ProductCard from './common/ProductCard';

export default function ProductsCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);

	const [sliderRef, instanceRef] = useKeenSlider({
		initial: 0,
		mode: 'free-snap',
		slides: {
			origin: 'center',
			perView: 1,
			spacing: 20,
		},
		breakpoints: {
			'(min-width: 640px)': {
				slides: { perView: 2 },
			},
			'(min-width: 768px)': {
				slides: { perView: 3, spacing: 10 },
			},
			'(min-width: 1024px)': {
				slides: { perView: 4, spacing: 10 },
			},
		},
		renderMode: 'performance',
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
		created() {
			setLoaded(true);
		},
	});

	const canPrev = Boolean(loaded && instanceRef.current && currentSlide !== 0);
	const canNext = Boolean(
		loaded && instanceRef.current && currentSlide !== instanceRef.current.track.details.maxIdx,
	);

	const arrowClasses = (show: boolean) =>
		show ? tw`opacity-100 visible` : tw`opacity-0 invisible`;

	return (
		<section>
			<h1 className='pt-14 text-center font-secondary text-4xl'>New Arrivals</h1>
			<div className='flex items-center justify-center gap-3 py-14'>
				<button
					className={`${arrowClasses(
						canPrev,
					)} flex h-10 w-10 items-center justify-center rounded-full border-2 border-dark duration-300 hover:bg-black hover:text-white dark:border-white hover:dark:bg-white hover:dark:text-black`}
					onClick={() => instanceRef.current?.prev()}
				>
					<i className='ri-arrow-left-line text-xl' />
				</button>

				<ul
					className='flex max-w-[225px] overflow-hidden sm:max-w-lg md:max-w-3xl lg:max-w-5xl'
					ref={sliderRef}
				>
					{PRODUCTS.map((product, index) => (
						<li key={index} className='keen-slider__slide'>
							<ProductCard key={index} product={product} />
						</li>
					))}
				</ul>

				<button
					className={`${arrowClasses(
						canNext,
					)} flex h-10 w-10 items-center justify-center rounded-full border-2 border-dark duration-300 hover:bg-black hover:text-white dark:border-white hover:dark:bg-white hover:dark:text-black`}
					onClick={() => instanceRef.current?.next()}
				>
					<i className='ri-arrow-right-line text-xl' />
				</button>
			</div>
		</section>
	);
}
