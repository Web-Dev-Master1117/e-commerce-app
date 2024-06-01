import { tw } from '@/utils'
import { ReactNode } from 'react'

export default function Tooltip({
	children,
	title,
	postilion,
}: {
	children: ReactNode
	title: string
	postilion: 'top' | 'bottom'
}) {
	const positionClasses = {
		top: tw`-top-7`,
		bottom: tw`-bottom-7`,
	}
	return (
		<div className='relative'>
			<span className='peer'>{children}</span>
			<span
				className={`${positionClasses[postilion]} invisible absolute right-1/2 z-10 w-max translate-x-1/2 rounded bg-black/50 px-2 py-1 text-xs text-gray-300 opacity-0 duration-300 peer-hover:visible peer-hover:opacity-100`}
			>
				{title}
			</span>
		</div>
	)
}
