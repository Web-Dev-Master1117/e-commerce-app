import Image from 'next/image'

const INSTAGRAM_PHOTOS = [
	'/images/ig_01.jpg',
	'/images/ig_02.jpg',
	'/images/ig_03.jpg',
	'/images/ig_04.jpg',
	'/images/ig_05.jpg',
]

export default function FromInstagram() {
	return (
		<section>
			<h1 className='pt-14 text-center font-secondary text-4xl'>
				Popular Instagram photos
			</h1>
			<ul className='flex snap-x snap-mandatory justify-start overflow-x-auto py-14 xl:justify-center'>
				{INSTAGRAM_PHOTOS.map((photo, index) => (
					<li
						className='group relative shrink-0 snap-center xl:shrink'
						key={index}
					>
						<Image
							width={320}
							height={320}
							alt='instagram photo'
							src={photo}
							quality={100}
						/>
						<span className='absolute bottom-0 right-1/2 z-10 flex h-10 w-10 translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-lg text-black opacity-0 duration-300 hover:bg-black hover:text-white group-hover:-translate-y-5 group-hover:opacity-100'>
							<i className='ri-instagram-fill' />
						</span>
					</li>
				))}
			</ul>
		</section>
	)
}
