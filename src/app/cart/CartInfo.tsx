'use client';

import CostDetails from '@/components/common/CostDetails';
import useCheckout from '@/hooks/checkout';
import { cartItemsState } from '@/recoil/atoms';
import { useRecoilValue } from 'recoil';
import Stripe from 'stripe';

export default function CartInfo() {
	const cartItems = useRecoilValue(cartItemsState);
	const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = Array.from(
		cartItems.values(),
	).map(({ quantity, stripePriceId }) => ({
		quantity,
		price: stripePriceId,
	}));
	const { checkout, isError, isLoading } = useCheckout(lineItems);

	return (
		<section className='mx-auto max-w-lg space-y-5 p-5 text-lg'>
			<CostDetails />
			<div className='flex font-semibold'>
				<button
					disabled={isLoading}
					onClick={checkout}
					className={`ml-auto w-40 rounded ${
						isError ? 'bg-red-400' : 'bg-teal-400'
					} py-2 text-white duration-300`}
				>
					{isLoading ? 'Loading...' : isError ? 'Try Again' : 'Checkout'}
				</button>
			</div>
		</section>
	);
}
