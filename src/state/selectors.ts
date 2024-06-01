import { getDiscountedValue } from '@/utils'
import { selectAtom } from 'jotai/utils'
import { cartInfoAtom } from './atoms'

const EXPRESS_SHIPPING_COST = 30

export const cartStatsAtom = selectAtom(cartInfoAtom, (info) => {
	let itemsNumber = 0
	let subTotal = 0
	let totalPrice = 0

	const cartItemsArr = Array.from(info.cartItems.values())
	for (const cartItem of cartItemsArr) {
		itemsNumber += cartItem.quantity

		subTotal += cartItem.price * cartItem.quantity

		totalPrice +=
			getDiscountedValue(cartItem.price, cartItem.discount) *
			cartItem.quantity
	}

	const totalDiscount = subTotal - totalPrice
	totalPrice += info.shippingPlan === 'express' ? EXPRESS_SHIPPING_COST : 0

	return {
		itemsNumber,
		subTotal,
		totalPrice,
		totalDiscount,
	}
})
