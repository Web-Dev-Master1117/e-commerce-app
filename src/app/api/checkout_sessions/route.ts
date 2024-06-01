import { TShippingPlan } from '@/common/types'
import { NextRequest } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	apiVersion: '2024-04-10',
})

interface IRequestBody {
	lineItems: Stripe.Checkout.SessionCreateParams.LineItem[]
	shippingPlan: TShippingPlan
	//TODO send exact origin with the request to redirect there
}

export async function POST(request: NextRequest) {
	const origin = request.headers.get('origin')
	if (!origin) throw new Error('bad origin')

	const { lineItems, shippingPlan }: IRequestBody = await request.json()

	const freeShipping = {
		shipping_rate:
			/*cspell: disable*/ 'shr_1Mkut8DK9f6RLy6sLrVpXFZv' /*cspell: enable*/,
	}
	const expressShipping = {
		shipping_rate:
			/*cspell: disable*/ 'shr_1MkuuDDK9f6RLy6stGs4R4US' /*cspell: enable*/,
	}

	const shippingOptions =
		shippingPlan === 'free'
			? [freeShipping, expressShipping]
			: [expressShipping, freeShipping]

	try {
		const checkoutSession = await stripe.checkout.sessions.create({
			submit_type: 'pay',
			payment_method_types: ['card'],
			line_items: lineItems,
			mode: 'payment',
			success_url: `${origin}/?success=true`,
			cancel_url: `${origin}/?canceled=true`,
			currency: 'usd',
			shipping_options: shippingOptions,
			shipping_address_collection: {
				allowed_countries: ['DZ', 'US', 'CA', 'GB'],
			},
		})
		return new Response(JSON.stringify(checkoutSession.url), {
			status: 200,
		})
	} catch (err) {
		const errorMessage =
			err instanceof Error ? err.message : 'Internal server error'
		return new Response(JSON.stringify(errorMessage), { status: 500 })
	}
}
