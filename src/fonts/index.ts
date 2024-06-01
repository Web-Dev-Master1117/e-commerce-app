import { Montserrat, Prata } from 'next/font/google'

export const primaryFont = Montserrat({
	weight: ['400', '500', '600'],
	variable: '--font-primary',
	subsets: ['latin'],
	display: 'optional',
})

export const secondaryFont = Prata({
	weight: ['400'],
	variable: '--font-secondary',
	subsets: ['latin'],
	display: 'optional',
})
