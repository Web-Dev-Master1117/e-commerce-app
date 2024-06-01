'use client'

import { IProduct } from '@/definitions/interfaces'
import { tw } from '@/utils'
import {
	KeenSliderInstance,
	KeenSliderPlugin,
	useKeenSlider,
} from 'keen-slider/react'
import Image from 'next/image'
import { MutableRefObject, useState } from 'react'

const SLIDES_NUMBER = 8

function ThumbnailPlugin(
	mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
	return (slider) => {
		function removeActive() {
			slider.slides.forEach((slide) => {
				slide.classList.remove('active')
			})
		}
		function addActive(idx: number) {
			slider.slides[idx].classList.add('active')
		}

		function addClickEvents() {
			slider.slides.forEach((slide, idx) => {
				slide.addEventListener('click', () => {
					if (mainRef.current) mainRef.current.moveToIdx(idx)
				})
			})
		}

		slider.on('created', () => {
			if (!mainRef.current) return
			addActive(slider.track.details.rel)
			addClickEvents()
			mainRef.current.on('animationStarted', (main) => {
				removeActive()
				const next = main.animator.targetIdx || 0
				addActive(main.track.absToRel(next))
				slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
			})
		})
	}
}

export default function ThumbnailSlider({ product }: { product: IProduct }) {
	const [currentSlide, setCurrentSlide] = useState(0)

	const [sliderRef, instanceRef] = useKeenSlider<HTMLUListElement>({
		initial: 0,
		slides: { perView: 1, spacing: 0 },
		renderMode: 'performance',
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel)
		},
	})
	const [thumbnailRef] = useKeenSlider<HTMLUListElement>(
		{
			initial: 0,
			slides: { perView: 6, spacing: 12 },
			renderMode: 'performance',
			vertical: true,
		},
		[ThumbnailPlugin(instanceRef)]
	)

	const slideButtonClasses = (index: number) =>
		currentSlide === index
			? tw`h-2 w-2 bg-black`
			: tw`h-4 w-4 bg-transparent`

	const thumbnailClasses = (index: number) =>
		currentSlide === index ? tw`opacity-100` : tw`opacity-60`

	return (
		<div className='flex flex-row-reverse justify-center gap-x-3'>
			<div className='relative'>
				<ul
					ref={sliderRef}
					className='flex w-screen overflow-hidden sm:w-[450px]'
				>
					{[...Array(SLIDES_NUMBER)].map((_, index) => (
						<li key={index} className='keen-slider__slide shrink-0'>
							<Image
								src={
									index % 2 ? product.image : product.altImage
								}
								alt='product image'
								quality={100}
								placeholder='blur'
								className='h-auto w-screen rounded sm:h-[600px] sm:w-[450px]'
							/>
						</li>
					))}
				</ul>

				<ul className='absolute bottom-5 right-1/2 flex translate-x-1/2 gap-x-3'>
					{[...Array(SLIDES_NUMBER)].map((_, index) => (
						<li
							key={index}
							className='flex h-4 w-4 items-center justify-center sm:hidden'
						>
							<span
								onClick={() =>
									instanceRef.current?.moveToIdx(index)
								}
								className={`${slideButtonClasses(
									index
								)} cursor-pointer rounded-full border border-black bg-black duration-300`}
							/>
						</li>
					))}
				</ul>
			</div>
			<ul
				ref={thumbnailRef}
				className='hidden h-[600px] flex-col overflow-hidden sm:flex'
			>
				{[...Array(SLIDES_NUMBER)].map((_, index) => (
					<li
						key={index}
						className={`${thumbnailClasses(index)} keen-slider__slide duration-300`}
					>
						<Image
							src={index % 2 ? product.image : product.altImage}
							alt='product image'
							placeholder='blur'
							className='h-[90px] w-auto rounded'
						/>
					</li>
				))}
			</ul>
		</div>
	)
}
