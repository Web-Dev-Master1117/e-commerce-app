import { Tab } from '@headlessui/react'

export default function ShippingTab() {
	return (
		<Tab.Panel className='animate-fade-slide space-y-5 text-gray-400'>
			<p>
				Shipping cost is decided by weight. The final cost will be
				displayed on your shopping cart and in the check out page.
			</p>
			{/* cSpell:disable */}
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Distinctio ut ea totam, dolores, doloribus aut saepe fugiat vero
				repellendus minima maiores aliquam ullam vel officiis inventore
				similique voluptatum nam ipsum?
			</p>
			{/* cSpell:enable */}
		</Tab.Panel>
	)
}
