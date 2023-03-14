'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
	const reload = () => window.location.reload();
	useEffect(() => console.error(error), [error]);
	useEffect(() => {
		if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);
	return (
		<div className='flex h-screen items-center justify-center font-semibold'>
			<div className='space-y-5 rounded p-3 text-center'>
				<i className='ri-error-warning-line text-4xl text-red-400'></i>
				<h2 className='text-xl text-red-500'>Something went wrong!</h2>
				<div className='flex justify-between'>
					<button onClick={() => reset()} className='rounded bg-blue-400 px-4 py-2 text-white'>
						Try again
					</button>
					<button onClick={() => reload()} className='rounded bg-red-400 px-4 py-2 text-white'>
						Reload
					</button>
				</div>
			</div>
		</div>
	);
}
