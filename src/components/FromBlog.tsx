import { BLOGS_HEADLINES } from '@/mocks';
import Image from 'next/image';

export default function FromBlog() {
	return (
		<section className='border border-gray-50 bg-gray-100 dark:border-slate-800 dark:bg-slate-900'>
			<h1 className='pt-14 text-center font-secondary text-4xl'>From the blog</h1>
			<ul className='flex snap-x snap-mandatory gap-10 overflow-x-auto p-14 md:justify-center'>
				{BLOGS_HEADLINES.map((blogHeadline, index) => (
					<li
						key={index}
						className='max-w-[290px] shrink-0 snap-center space-y-5 text-center md:max-w-[370px]'
					>
						<Image
							key={index}
							src={blogHeadline.image}
							width={370}
							height={200}
							quality={100}
							alt='product guide image'
							className='rounded duration-300 hover:scale-105'
						/>
						<button
							type='button'
							className='mx-auto w-fit border border-teal-400 px-3 py-1 text-xs uppercase text-gray-400 duration-300 hover:bg-teal-400 hover:text-white'
						>
							{blogHeadline.tags[0]}
						</button>
						<h3 className='text-lg font-semibold capitalize'>{blogHeadline.title}</h3>
					</li>
				))}
			</ul>

			<button className='mx-auto mb-14 block w-fit rounded border-2 border-black bg-black px-6 py-3 font-semibold text-white duration-300 hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
				READ MORE
			</button>
		</section>
	);
}
