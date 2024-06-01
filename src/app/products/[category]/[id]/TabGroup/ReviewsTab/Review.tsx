import Image, { StaticImageData } from 'next/image'

export default function Review({ image }: { image: StaticImageData }) {
	return (
		<div className='flex gap-5 px-5 pt-5'>
			<Image
				src={image}
				alt='user avatar'
				placeholder='blur'
				className='h-16 w-16 rounded-full'
			/>
			<div className='space-y-5'>
				<div>
					{/* cSpell:disable */}
					<h3 className='text-lg font-semibold'>Sawashiro</h3>
					<div className='space-x-2'>
						<i className='ri-star-fill' />
						<i className='ri-star-fill' />
						<i className='ri-star-fill' />
						<i className='ri-star-half-fill' />
					</div>
					<h6 className='text-sm text-gray-400'>On Aug 14, 2023</h6>
				</div>
				<div className='space-y-2'>
					<h3 className='text-lg font-semibold'>Product name</h3>
					<p className='text-gray-400'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Placeat ipsa dolores officiis, quis possimus molestiae
						accusamus nostrum ab animi, corrupti natus hic inventore
						et! Temporibus, corrupti quae? Quidem, nisi in?
						{/* cSpell:enable */}
					</p>
				</div>
			</div>
		</div>
	)
}
