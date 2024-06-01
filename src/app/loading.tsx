export default function loading() {
	return (
		<div className='flex h-[calc(100vh-5rem)] items-center justify-center'>
			<div
				className='flex h-14 w-14 animate-spin items-center justify-center rounded-full border-8 border-solid border-teal-400 border-r-transparent'
				role='status'
			/>
		</div>
	)
}
