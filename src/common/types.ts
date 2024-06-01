import { CATEGORIES, SIZES } from '@/constants'
import { ICartItem } from './interfaces'

export type TCategory = (typeof CATEGORIES)[number]
export type TSize = (typeof SIZES)[number]

export type TCartItems = Map<string, ICartItem>
export type TShippingPlan = 'free' | 'express'
