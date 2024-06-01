'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeButton() {
	const { setTheme, theme } = useTheme()
	const [themeIcon, setThemeIcon] = useState('ri-computer-line')

	useEffect(() => {
		switch (theme) {
			case 'light':
				setThemeIcon('ri-sun-fill')
				break
			case 'dark':
				setThemeIcon('ri-moon-line')
				break
			default:
				setThemeIcon('ri-computer-line')
				break
		}
	}, [setTheme, theme])

	return (
		<div className='group fixed bottom-2 right-2 hidden h-10 w-10 items-center justify-center rounded-full bg-teal-400 text-xl text-white sm:flex'>
			<i className={themeIcon} />
			<ul className='invisible fixed right-14 flex flex-row-reverse gap-2 opacity-0 duration-300 group-hover:visible group-hover:opacity-100'>
				<li
					className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-teal-400'
					onClick={() => setTheme('light')}
				>
					<i className='ri-sun-fill' />
				</li>
				<li
					className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-teal-400'
					onClick={() => setTheme('dark')}
				>
					<i className='ri-moon-line' />
				</li>
				<li
					className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-teal-400'
					onClick={() => setTheme('system')}
				>
					<i className='ri-computer-line' />
				</li>
			</ul>
		</div>
	)
}
