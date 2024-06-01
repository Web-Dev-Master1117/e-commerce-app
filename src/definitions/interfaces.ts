import { StaticImageData } from 'next/image'
import { TCartItems, TCategory, TShippingPlan, TSize } from './types'

export interface IProduct {
	id: number
	name: string
	price: number
	discount: number
	color: string
	category: Exclude<TCategory, 'all'>
	image: StaticImageData
	altImage: StaticImageData
	slide: StaticImageData
	relatedProducts?: {
		id: number
		color: string
	}[]
	stripePriceId: string
}

export interface ICartItem extends IProduct {
	quantity: number
	size: TSize
}

export interface ICartInfo {
	shippingPlan: TShippingPlan
	cartItems: TCartItems
}

export interface ICartStats {
	itemsNumber: number
	subTotal: number
	totalPrice: number
	totalDiscount: number
}
