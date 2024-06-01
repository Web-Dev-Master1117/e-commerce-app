//Used with "tailwindCSS.experimental.classRegex": ["tw`([^`]*)"] to provide intellisense
export const tw = String.raw

export const getDiscountedValue = (value: number, discount: number) =>
	value - (value * discount) / 100

export const capitalize = (string: string) =>
	string.charAt(0).toUpperCase() + string.slice(1)
