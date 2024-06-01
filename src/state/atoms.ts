import { ICartInfo, IProduct } from '@/definitions/interfaces'
import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const searchBarOpenAtom = atom(false)

export const sidebarOpenAtom = atom(false)

export const shoppingCartOpenAtom = atom(false)

export const cartInfoAtom = atomWithStorage<ICartInfo>(
	'CartInfo',
	{
		shippingPlan: 'free',
		cartItems: new Map(),
	},
	{
		getItem: (key) => {
			const storedValue = localStorage.getItem(key)
			if (!storedValue)
				return {
					shippingPlan: 'free',
					cartItems: new Map(),
				} as ICartInfo

			const parsedValue = JSON.parse(storedValue)
			return {
				shippingPlan: parsedValue.shippingPlan,
				cartItems: new Map(parsedValue.cartItems),
			} as ICartInfo
		},
		setItem: (key, value) => {
			const serializedValue = JSON.stringify({
				shippingPlan: value.shippingPlan,
				cartItems: Array.from(value.cartItems.entries()),
			})

			localStorage.setItem(key, serializedValue)
		},
		removeItem: (key) => {
			localStorage.removeItem(key)
		},
	}
)

export const wishlistItemsAtom = atomWithStorage<IProduct[]>(
	'WishlistItems',
	[]
)

export const compareItemsAtom = atomWithStorage<IProduct[]>('CompareItems', [])
