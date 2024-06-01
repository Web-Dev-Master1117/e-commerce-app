import { Metadata } from 'next'
import Link from 'next/link'
import CompareTable from './CompareTable'

export function generateMetadata(): Metadata {
	return { title: 'Compare' }
}

export default function page() {
	return (
		<main className='pb-14 pt-5'>
			{/*TODO Change to ul */}
			<div className='text flex justify-center gap-x-3 px-5 capitalize'>
				<Link href='/'>Home</Link>
				<i className='ri-arrow-right-s-line'></i>
				<span className='overflow-hidden text-ellipsis whitespace-nowrap'>
					Compare
				</span>
			</div>
			<h1 className='my-8 text-center font-secondary text-5xl'>
				Compare
			</h1>
			<div className='flex justify-center rounded px-5'>
				<CompareTable />
			</div>
		</main>
	)
}
