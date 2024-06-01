import Link from 'next/link'

const SERVICES = [
	{
		name: 'about us',
		link: '/not-implemented',
	},
	{
		name: 'carries',
		link: '/not-implemented',
	},
	{
		name: 'delivery information',
		link: '/not-implemented',
	},
	{
		name: 'terms & conditions',
		link: '/not-implemented',
	},
	{
		name: 'privacy policy',
		link: '/not-implemented',
	},
]

const PAGES = [
	{
		name: 'my account',
		link: '/not-implemented',
	},
	{
		name: 'login',
		link: '/not-implemented',
	},
	{
		name: 'wishlist',
		link: '/not-implemented',
	},
	{
		name: 'card',
		link: '/not-implemented',
	},
	{
		name: 'checkout',
		link: '/not-implemented',
	},
]

const CONTACTS = [
	{
		name: 'placeholder address',
		link: '/not-implemented',
	},
	{
		name: '+213 657 73 50 82',
		link: '/not-implemented',
	},
	{
		name: 'Email',
		link: '/not-implemented',
	},
	{
		name: 'sunday to thursday: 9AM to 5PM',
		link: '/not-implemented',
	},
]

export default function Footer() {
	return (
		<footer className='mt-auto border border-gray-50 bg-gray-100 dark:border-slate-800 dark:bg-slate-900'>
			<div className='flex flex-col gap-y-10 p-14'>
				<div className='flex flex-wrap justify-between gap-10'>
					<div className='space-y-3'>
						<h1 className='font-secondary text-4xl'>
							Get voucher from us
						</h1>
						<p className='text-gray-400'>
							Enter you email to the first to know about new
							collections and launches
						</p>
						<div className='flex w-fit gap-x-3 rounded border-2 p-4'>
							<i className='ri-mail-line' />
							<input
								type='text'
								placeholder='Enter your email'
								className='w-full bg-transparent outline-none sm:w-64'
							/>
							<i className='ri-arrow-right-line ml-auto' />
						</div>
					</div>
					<div className='flex flex-wrap gap-y-10 text-sm capitalize text-gray-400'>
						<div>
							<h4 className='pb-3 font-semibold text-black dark:text-white'>
								Services
							</h4>
							<ul className='w-32 space-y-3'>
								{SERVICES.map((service, index) => (
									<li key={index}>
										{service.link !== '/not-implemented' ? (
											<Link href={service.link}>
												{service.name}
											</Link>
										) : (
											<span>{service.name}</span>
										)}
									</li>
								))}
							</ul>
						</div>
						<div>
							<h4 className='pb-3 font-semibold text-black dark:text-white'>
								Pages
							</h4>
							<ul className='w-32 space-y-3'>
								{PAGES.map((page, index) => (
									<li key={index}>
										{page.link !== '/not-implemented' ? (
											<Link href={page.link}>
												{page.name}
											</Link>
										) : (
											<span>{page.name}</span>
										)}
									</li>
								))}
							</ul>
						</div>
						<div>
							<h4 className='pb-3 font-semibold text-black dark:text-white'>
								Contact
							</h4>
							<ul className='w-32 space-y-3'>
								{CONTACTS.map((contact, index) => (
									<li key={index}>
										{contact.link !== '/not-implemented' ? (
											<Link href={contact.link}>
												{contact.name}
											</Link>
										) : (
											<span>{contact.name}</span>
										)}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				<div className='flex flex-wrap gap-10'>
					<ul className='flex items-center gap-3 text-xl'>
						<li className='flex h-10 w-10 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black'>
							<i className='ri-facebook-fill' />
						</li>
						<li className='flex h-10 w-10 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black'>
							<i className='ri-twitter-fill' />
						</li>
						<li className='flex h-10 w-10 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black'>
							<i className='ri-instagram-fill' />
						</li>
						<li className='flex h-10 w-10 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black'>
							<i className='ri-linkedin-fill' />
						</li>
					</ul>

					<h6 className='ml-auto self-end font-semibold'>
						&copy; 2023. Baatchia Riyadh. rights reserved
					</h6>
				</div>
			</div>
		</footer>
	)
}
