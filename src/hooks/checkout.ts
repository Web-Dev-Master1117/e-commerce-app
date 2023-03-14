import { shippingPlanState } from '@/recoil/atoms';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import Stripe from 'stripe';
import { useFetchPostJSON } from './fetch';

export default function useCheckout(lineItems: Stripe.Checkout.SessionCreateParams.LineItem[]) {
	const router = useRouter();
	const shippingPlan = useRecoilValue(shippingPlanState);
	const { post, isError, isLoading } = useFetchPostJSON('/api/checkout_sessions', {
		lineItems,
		shippingPlan,
	});

	const checkout = async () => {
		const checkoutSessionUrl = await post();
		if (checkoutSessionUrl) router.push(checkoutSessionUrl);
	};

	return {
		checkout,
		isLoading,
		isError,
	};
}
