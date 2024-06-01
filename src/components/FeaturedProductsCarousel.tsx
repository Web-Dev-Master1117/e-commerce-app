'use client'

import PRODUCTS from '@/mocks/products'
import { tw } from '@/utils'
import { Transition, TransitionChild } from '@headlessui/react'
import { KeenSliderPlugin, useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const PAUSE_DURATION = 2 * 1000
const ANIMATION_DURATION = 1 * 1000

const autoPlaySliderPlugin: KeenSliderPlugin = (slider) => {
	let timeout: NodeJS.Timeout | undefined
	let mouseOver = false
	function clearNextTimeout() {
		clearTimeout(timeout)
	}
	function nextTimeout() {
		clearTimeout(timeout)
		if (mouseOver) return
		timeout = setTimeout(() => slider.next(), PAUSE_DURATION)
	}
	slider.on('created', () => {
		slider.container.addEventListener('mouseover', () => {
			mouseOver = true
			clearNextTimeout()
		})
		slider.container.addEventListener('mouseout', () => {
			mouseOver = false
			nextTimeout()
		})
		nextTimeout()
	})
	slider.on('dragStarted', clearNextTimeout)
	slider.on('animationEnded', nextTimeout)
	slider.on('updated', nextTimeout)
}

export default function FeaturedProductsCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [CurrentSlideBounced, setCurrentSlideBounced] = useState(0)
	const [opacities, setOpacities] = useState<number[]>([])

	const featuredProducts = [
		PRODUCTS[3],
		PRODUCTS[2],
		PRODUCTS[0],
		PRODUCTS[6],
		PRODUCTS[9],
	]

	const [sliderRef, instanceRef] = useKeenSlider(
		{
			slides: featuredProducts.length,
			loop: true,
			renderMode: 'performance',
			defaultAnimation: {
				duration: ANIMATION_DURATION,
			},
			detailsChanged(slider) {
				const new_opacities = slider.track.details.slides.map(
					(slide) => slide.portion
				)
				setOpacities(new_opacities)
			},
			slideChanged(slider) {
				setCurrentSlideBounced(slider.track.details.rel)
			},
		},

		[autoPlaySliderPlugin]
	)

	useEffect(() => {
		const changeCurrentSlide = setTimeout(
			() => setCurrentSlide(CurrentSlideBounced),
			250
		)
		return () => {
			clearTimeout(changeCurrentSlide)
		}
	}, [CurrentSlideBounced])

	const slideButtonClasses = (index: number) =>
		currentSlide === index
			? tw`h-2 w-2 bg-black`
			: tw`h-4 w-4 bg-transparent`

	return (
		<section>
			<div
				className='relative flex flex-col md:h-[calc(100vh-80px)]'
				ref={sliderRef}
			>
				<div className='relative h-80 md:h-[calc(100vh-80px)]'>
					{featuredProducts.map((product, index) => (
						<Image
							key={index}
							src={product.slide}
							alt='slider image'
							style={{ opacity: opacities[index] }}
							className='absolute h-full w-full object-cover object-top md:h-[calc(100vh-80px)]'
							quality={100}
							placeholder='blur'
						/>
					))}
				</div>

				<div className='min-h-[16rem] md:min-h-min'>
					{featuredProducts.map((product, index) => (
						<Transition
							key={index}
							show={
								index === currentSlide &&
								index === CurrentSlideBounced
							}
							leave='hidden'
							as='div'
							className='mx-auto flex w-screen -translate-y-10 flex-col items-center gap-10 text-center text-white md:max-w-lg md:-translate-y-14'
						>
							<TransitionChild
								as='span'
								enter='duration-700'
								enterFrom='translate-y-12 opacity-0'
								enterTo='translate-y-0 opacity-100'
								className='flex h-20 w-20 items-center justify-center rounded-full bg-teal-400 text-3xl'
							>
								${product.price}
							</TransitionChild>
							<TransitionChild
								as='h3'
								enter='delay-500 duration-700'
								enterFrom='translate-y-12 opacity-0'
								enterTo='translate-y-0 opacity-100'
								className='font-secondary text-4xl text-black dark:text-white md:text-6xl md:text-white'
							>
								{product.name}
							</TransitionChild>
							<TransitionChild
								enter='delay-700 duration-700'
								enterFrom='translate-y-12 opacity-0'
								enterTo='translate-y-0 opacity-100'
							>
								<Link
									href={`/products/${product.category}/${product.id}`}
									className='cursor-pointer rounded border-2 border-black px-6 py-3 font-semibold text-black duration-300 hover:bg-black hover:text-white dark:border-white dark:text-white md:border-white md:text-white md:hover:bg-white md:hover:text-black'
								>
									SHOP NOW
								</Link>
							</TransitionChild>
						</Transition>
					))}
				</div>

				<ul className='absolute right-3 top-40 -translate-y-1/2 space-y-3 md:top-1/2'>
					{featuredProducts.map((_, index) => (
						<li
							key={index}
							className='flex h-4 w-4 items-center justify-center'
							onClick={() =>
								instanceRef.current?.moveToIdx(index)
							}
						>
							<span
								className={`${slideButtonClasses(
									index
								)} cursor-pointer rounded-full border border-black bg-black duration-300`}
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
