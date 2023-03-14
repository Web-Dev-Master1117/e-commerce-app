import COUNTRY_LIST from '@/constants/countries';

export default function CheckoutForm() {
	return (
		<div className='grow space-y-8 px-5 py-5 sm:px-14'>
			<h1 className='font-secondary text-4xl'>Billing Details</h1>
			<div className='space-y-5'>
				<div className='flex gap-x-8'>
					<div className='w-full space-y-2'>
						<label className='block' htmlFor='first-name'>
							First Name *
						</label>
						<input
							type='text'
							name='first-name'
							id='first-name'
							placeholder='First Name'
							className='h-10 w-full rounded border-2 px-3'
						/>
					</div>
					<div className='w-full space-y-2'>
						<label className='block' htmlFor='last-name'>
							Last Name *
						</label>
						<input
							type='text'
							name='last-name'
							id='last-name'
							placeholder='First Name'
							className='h-10 w-full rounded border-2 px-3'
						/>
					</div>
				</div>
				<div className='space-y-2'>
					<label className='block' htmlFor='company-name'>
						Company Name
					</label>
					<input
						type='text'
						name='company-name'
						id='company-name'
						placeholder='Company Name'
						className='h-10 w-full rounded border-2 px-3'
					/>
				</div>
				<div className='space-y-2'>
					<label className='block' htmlFor='country-region'>
						Country / Region *
					</label>
					<select
						name='country-region'
						id='country-region'
						className='h-10 w-full rounded border-2 px-3'
						defaultValue='Algeria'
					>
						{COUNTRY_LIST.map((country, index) => (
							<option key={index} value={country}>
								{country}
							</option>
						))}
					</select>
				</div>
				<div className='space-y-2'>
					<label className='block' htmlFor='street-address'>
						Street Address *
					</label>
					<input
						type='text'
						name='street-address'
						id='street-address'
						placeholder='Street Address'
						className='h-10 w-full rounded border-2 px-3'
					/>
				</div>
				<div className='space-y-2'>
					<input
						type='text'
						name='apartment'
						id='apartment'
						placeholder='Apartment (Optional)'
						className='h-10 w-full rounded border-2 px-3'
					/>
				</div>
				<div className='space-y-2'>
					<label className='block' htmlFor='town-city'>
						Town / City *
					</label>
					<input
						type='text'
						name='town-city'
						id='town-city'
						placeholder='Town / City'
						className='h-10 w-full rounded border-2 px-3'
					/>
				</div>
				<div className='space-y-2'>
					<label className='block' htmlFor='zip-code'>
						Zip Code *
					</label>
					<input
						type='text'
						name='zip-code'
						id='zip-code'
						placeholder='Town / City'
						className='h-10 w-full rounded border-2 px-3'
					/>
				</div>
				<div className='flex gap-x-8'>
					<div className='w-full space-y-2'>
						<label className='block' htmlFor='phone'>
							Phone *
						</label>
						<input
							type='text'
							name='phone'
							id='phone'
							placeholder='Phone'
							className='h-10 w-full rounded border-2 px-3'
						/>
					</div>
					<div className='w-full space-y-2'>
						<label className='block' htmlFor='email'>
							Email *
						</label>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='Email'
							className='h-10 w-full rounded border-2 px-3'
						/>
					</div>
				</div>
				<span className='flex items-center gap-x-2'>
					<input type='radio' name='create-account' />
					<label htmlFor='Create an account?'>Create an account?</label>
				</span>
			</div>
		</div>
	);
}
