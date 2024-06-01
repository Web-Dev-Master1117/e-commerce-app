/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				primary: ['var(--font-primary)'],
				secondary: ['var(--font-secondary)'],
			},
			keyframes: {
				'fade-slide': {
					from: { transform: 'translateY(2rem)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' },
				},
			},
			animation: { 'fade-slide': 'fade-slide 0.5s ease-in-out' },
			colors: { dark: '#121212' },
			boxShadow: {
				't-lg': '0 -10px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1)',
			},
		},
	},
	plugins: [require('@headlessui/tailwindcss')],
}
