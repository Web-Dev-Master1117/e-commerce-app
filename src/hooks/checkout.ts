import { cartInfoAtom } from '@/state/atoms'
import { useAtomValue } from 'jotai'
import { useRouter } from 'next/navigation'
import Stripe from 'stripe'
import { useFetchPostJSON } from './fetch'

export default function useCheckout(
	lineItems: Stripe.Checkout.SessionCreateParams.LineItem[]
) {
	const router = useRouter()
	const shippingPlan = useAtomValue(cartInfoAtom).shippingPlan
	const { post, isError, isLoading } = useFetchPostJSON(
		'/api/checkout_sessions',
		{
			lineItems,
			shippingPlan,
		}
	)

	const checkout = async () => {
		const checkoutSessionUrl = await post()
		if (checkoutSessionUrl) router.push(checkoutSessionUrl)
	}

	return {
		checkout,
		isLoading,
		isError,
	}
}
