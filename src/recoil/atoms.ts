import { IProduct } from '@/definitions/interfaces'
import { TCartItems, TShippingPlan } from '@/definitions/types'
import { atom } from 'recoil'
import { cartItemsPersistEffect, persistEffect } from './effects'

export const searchBarOpenState = atom({
	key: 'SearchBarOpen',
	default: false,
})

export const sidebarOpenState = atom({
	key: 'SidebarOpen',
	default: false,
})

export const shoppingCartOpenState = atom({
	key: 'ShoppingCartOpen',
	default: false,
})

export const shippingPlanState = atom<TShippingPlan>({
	key: 'ShippingPlan',
	default: 'free',
	effects: [persistEffect<TShippingPlan>('ShippingPlan')],
})

export const cartItemsState = atom<TCartItems>({
	key: 'CartItems',
	default: new Map(),
	effects: [cartItemsPersistEffect],
})

export const wishlistItemsState = atom<IProduct[]>({
	key: 'WishlistItems',
	default: [],
	effects: [persistEffect<IProduct[]>('WishlistItems')],
})

export const compareItemsState = atom<IProduct[]>({
	key: 'CompareItems',
	default: [],
	effects: [persistEffect<IProduct[]>('CompareItems')],
})
