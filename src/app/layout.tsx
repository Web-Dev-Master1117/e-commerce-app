import Alert from '@/components/Alert'
import CompareHoverButton from '@/components/CompareHoverButton'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SearchBar from '@/components/Header/SearchBar'
import MobileNavbar from '@/components/MobileNavbar'
import ShoppingCart from '@/components/ShoppingCart'
import Sidebar from '@/components/Sidebar'
import ThemeButton from '@/components/ThemeButton'
import type { Metadata } from 'next'
import { Montserrat, Prata } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

export const primaryFont = Montserrat({
	weight: ['400', '500', '600'],
	variable: '--font-primary',
	subsets: ['latin'],
	display: 'swap',
})

export const secondaryFont = Prata({
	weight: ['400'],
	variable: '--font-secondary',
	subsets: ['latin'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'EStore',
	description: 'E-Commerce app demo using NextJS and Tailwind',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='en'
			className={`${primaryFont.variable} ${secondaryFont.variable}`}
			//HACK to stop errors caused by next-themes
			suppressHydrationWarning
		>
			<head>
				{/* RemixIcon */}
				<link
					href='https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css'
					rel='stylesheet'
					crossOrigin='anonymous'
				/>
			</head>

			<body className='flex min-h-screen flex-col font-primary'>
				<Providers>
					<Header />
					<SearchBar />
					<Sidebar />
					<ShoppingCart />
					{children}
					<Footer />
					<MobileNavbar />
					<ThemeButton />
					<CompareHoverButton />
					<Alert />
				</Providers>
			</body>
		</html>
	)
}
