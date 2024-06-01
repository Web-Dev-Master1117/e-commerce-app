'use client'

import { cartItemsState } from '@/recoil/atoms'
import { tw } from '@/utils'
import { Transition } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'

interface IMessage {
	text: string
	colorClass: string
	iconClass: string
}

export default function Alert() {
	const [message, setMessage] = useState<IMessage | null>(null)
	const [showAlert, setShowAlert] = useState(false)
	const setSetCartItems = useSetRecoilState(cartItemsState)

	useEffect(() => {
		const query = new URLSearchParams(window.location.search)
		if (query.get('success')) {
			setMessage({
				text: 'Order placed',
				colorClass: tw`bg-blue-500`,
				iconClass: 'ri-checkbox-circle-line',
			})
			setShowAlert(true)
			setSetCartItems(new Map())
		}

		if (query.get('canceled')) {
			setMessage({
				text: 'Order canceled',
				colorClass: tw`bg-yellow-500`,
				iconClass: 'ri-alert-line',
			})
			setShowAlert(true)
		}

		const hideAlert = setTimeout(() => setShowAlert(false), 3 * 1000)
		return () => clearTimeout(hideAlert)
	}, [setSetCartItems])

	return (
		<Transition
			show={showAlert}
			enterFrom='opacity-0'
			enterTo='opacity-100'
			leaveFrom='opacity-100'
			leaveTo='opacity-0'
			leave='duration-300'
			enter='duration-300'
		>
			<div
				className={`${message?.colorClass} fixed bottom-16 right-1/2 flex h-12 translate-x-1/2 items-center justify-center gap-x-3 rounded px-3 font-semibold text-white sm:bottom-2`}
			>
				<i className={`${message?.iconClass} text-2xl font-normal`} />
				<span>{message?.text}</span>
			</div>
		</Transition>
	)
}
