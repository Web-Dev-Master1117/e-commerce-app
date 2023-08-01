import Image from 'next/image';

export default function Banner() {
	return (
		<section>
			<div className='relative w-full bg-gradient-to-br from-slate-400 to-slate-100 text-black'>
				<div className='absolute bottom-1/2 right-0 w-full translate-y-1/2 space-y-5 px-14'>
					<span>PROMO</span>
					<h3 className='font-secondary text-3xl leading-snug sm:text-6xl sm:leading-snug'>
						Get ready! <br />
						Winter is coming..
					</h3>
					<button className='self-center rounded border-2 border-black px-6 py-3 font-semibold duration-300 hover:bg-black hover:text-white lg:self-start'>
						GO GET IT
					</button>
				</div>
				<Image
					src='/images/banner.png'
					alt='banner image'
					height={460}
					width={690}
					quality={100}
					className='ml-auto'
				/>
			</div>
		</section>
	);
}
