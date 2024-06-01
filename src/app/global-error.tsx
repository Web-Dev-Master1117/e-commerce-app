'use client'

import { useEffect } from 'react'

export default function GlobalError({ error }: { error: Error }) {
	const reload = () => window.location.reload()
	useEffect(() => console.error(error), [error])
	return (
		<html>
			<head></head>
			<body>
				<div className='flex h-screen items-center justify-center font-semibold'>
					<div className='space-y-5 rounded p-3 text-center'>
						<i className='ri-error-warning-line text-4xl text-red-400'></i>
						<h2 className='text-xl text-red-500'>
							Something went wrong!
						</h2>
						<button
							onClick={() => reload()}
							className='mx-auto rounded bg-red-400 px-4 py-2 text-white'
						>
							Reload
						</button>
					</div>
				</div>
			</body>
		</html>
	)
}
