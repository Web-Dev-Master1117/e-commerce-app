import CostDetails from '@/components/common/CostDetails'

export default function Payment() {
	return (
		<section className='space-y-10 bg-black p-5 text-white'>
			<h1 className='text-center font-semibold'>Select Payment Method</h1>
			<ul className='flex justify-center gap-x-5 text-2xl'>
				<li>
					<input
						className='peer hidden'
						type='radio'
						name='payment-method'
						id='cc'
						defaultChecked
					/>
					<label
						className='flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-transparent bg-opacity-50 text-gray-400 duration-500 peer-checked:bg-teal-400/25 peer-checked:text-teal-400'
						htmlFor='cc'
					>
						<i className='ri-bank-card-line'></i>
					</label>
				</li>
				<li>
					<input
						className='peer hidden'
						type='radio'
						name='payment-method'
						id='pp'
					/>
					<label
						className='flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-opacity-50 text-gray-400 duration-500 peer-checked:bg-teal-400/20 peer-checked:text-teal-400'
						htmlFor='pp'
					>
						<i className='ri-paypal-line'></i>
					</label>
				</li>
				<li>
					<input
						className='peer hidden'
						type='radio'
						name='payment-method'
						id='coin'
					/>
					<label
						className='flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-opacity-50 text-gray-400 duration-500 peer-checked:bg-teal-400/20 peer-checked:text-teal-400'
						htmlFor='coin'
					>
						<i className='ri-hand-coin-line'></i>
					</label>
				</li>
			</ul>
			<CostDetails />
			<button
				type='button'
				className='w-full rounded bg-teal-400 py-2 font-semibold text-white'
			>
				Place Order
			</button>
		</section>
	)
}
