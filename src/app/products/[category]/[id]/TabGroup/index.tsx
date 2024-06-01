'use client'

import { IProduct } from '@/definitions/interfaces'
import CustomTab from './CustomTab'
import DetailsTab from './DetailsTab'
import ReviewsTab from './ReviewsTab'
import ShippingTab from './ShippingTab'
import TabPanelsContainer from './TabPanelsContainer'

export default function TabGroup({ product }: { product: IProduct }) {
	return (
		<section className='border border-gray-50 bg-gray-100 py-14 dark:border-slate-800 dark:bg-slate-900'>
			<TabPanelsContainer>
				<DetailsTab product={product} />
				<CustomTab />
				<ReviewsTab />
				<ShippingTab />
			</TabPanelsContainer>
		</section>
	)
}
