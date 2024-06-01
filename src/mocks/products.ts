import sweater01 from '@/../public/images/products/sweater/product_01.jpg'
import sweater01b from '@/../public/images/products/sweater/product_01b.jpg'
import sweaterSlide01 from '@/../public/images/products/sweater/slide_01.jpg'

import sweater02 from '@/../public/images/products/sweater/product_02.jpg'
import sweater02b from '@/../public/images/products/sweater/product_02b.jpg'
import sweaterSlide02 from '@/../public/images/products/sweater/slide_02.jpg'

import sweater03 from '@/../public/images/products/sweater/product_03.jpg'
import sweater03b from '@/../public/images/products/sweater/product_03b.jpg'
import sweaterSlide03 from '@/../public/images/products/sweater/slide_03.jpg'

import sweater04 from '@/../public/images/products/sweater/product_04.jpg'
import sweater04b from '@/../public/images/products/sweater/product_04b.jpg'
import sweaterSlide04 from '@/../public/images/products/sweater/slide_04.jpg'

import hoodie01 from '@/../public/images/products/hoodie/product_01.jpg'
import hoodie01b from '@/../public/images/products/hoodie/product_01b.jpg'
import hoodieSlide01 from '@/../public/images/products/hoodie/slide_01.jpg'

import hoodie02 from '@/../public/images/products/hoodie/product_02.jpg'
import hoodie02b from '@/../public/images/products/hoodie/product_02b.jpg'
import hoodieSlide02 from '@/../public/images/products/hoodie/slide_02.jpg'

import hoodie03 from '@/../public/images/products/hoodie/product_03.jpg'
import hoodie03b from '@/../public/images/products/hoodie/product_03b.jpg'
import hoodieSlide03 from '@/../public/images/products/hoodie/slide_03.jpg'

import hoodie04 from '@/../public/images/products/hoodie/product_04.png'
import hoodie04b from '@/../public/images/products/hoodie/product_04b.jpg'
import hoodieSlide04 from '@/../public/images/products/hoodie/slide_04.jpg'

import shirt01 from '@/../public/images/products/shirt/product_01.jpg'
import shirt01b from '@/../public/images/products/shirt/product_01b.jpg'
import shirtSlide01 from '@/../public/images/products/shirt/slide_01.jpg'

import shirt02 from '@/../public/images/products/shirt/product_02.jpg'
import shirt02b from '@/../public/images/products/shirt/product_02b.jpg'
import shirtSlide02 from '@/../public/images/products/shirt/slide_02.jpg'

import shirt03 from '@/../public/images/products/shirt/product_03.jpg'
import shirt03b from '@/../public/images/products/shirt/product_03b.jpg'
import shirtSlide03 from '@/../public/images/products/shirt/slide_03.jpg'

import shirt04 from '@/../public/images/products/shirt/product_04.jpg'
import shirt04b from '@/../public/images/products/shirt/product_04b.jpg'
import shirtSlide04 from '@/../public/images/products/shirt/slide_04.jpg'
import { IProduct } from '@/common/interfaces'
import { tw } from '@/utils'

const PRODUCTS: IProduct[] = [
	{
		id: 0,
		name: 'Teal Sweater',
		price: 40,
		discount: 10,
		color: 'teal',
		category: 'sweaters',
		image: sweater01,
		altImage: sweater01b,
		slide: sweaterSlide01,
		relatedProducts: [
			{
				id: 1,
				color: tw`border-sky-400 bg-sky-400`,
			},
			{
				id: 2,
				color: tw`border-yellow-600 bg-yellow-600`,
			},
			{
				id: 3,
				color: tw`border-red-700 bg-red-700`,
			},
		],
		stripePriceId:
			/*cspell: disable*/ 'price_1Mkp8yDK9f6RLy6szX28Qgnq/*cspell: enable*/ ',
	},
	{
		id: 1,
		name: 'Ocean Blue Sweater',
		price: 45,
		discount: 25,
		color: 'blue',
		category: 'sweaters',
		image: sweater02,
		altImage: sweater02b,
		slide: sweaterSlide02,
		relatedProducts: [
			{
				id: 0,
				color: tw`border-teal-400 bg-teal-400`,
			},
			{
				id: 2,
				color: tw`border-yellow-600 bg-yellow-600`,
			},
			{
				id: 3,
				color: tw`border-red-700 bg-red-700`,
			},
		],
		stripePriceId:
			/*cspell: disable*/ 'price_1MkpA2DK9f6RLy6sLcG69ydZ' /*cspell: enable*/,
	},
	{
		id: 2,
		name: 'Brown Sweater',
		price: 45,
		discount: 25,
		color: 'brown',
		category: 'sweaters',
		image: sweater03,
		altImage: sweater03b,
		slide: sweaterSlide03,
		relatedProducts: [
			{
				id: 0,
				color: tw`border-teal-400 bg-teal-400`,
			},
			{
				id: 1,
				color: tw`border-sky-400 bg-sky-400`,
			},
			{
				id: 3,
				color: tw`border-red-700 bg-red-700`,
			},
		],
		stripePriceId:
			/*cspell: disable*/ 'price_1MkpB1DK9f6RLy6skEIxtqDo' /*cspell: enable*/,
	},
	{
		id: 3,
		name: 'Red Sweater',
		price: 40,
		discount: 30,
		color: 'red',
		category: 'sweaters',
		image: sweater04,
		altImage: sweater04b,
		slide: sweaterSlide04,
		relatedProducts: [
			{
				id: 0,
				color: tw`border-teal-400 bg-teal-400`,
			},
			{
				id: 1,
				color: tw`border-sky-400 bg-sky-400`,
			},
			{
				id: 2,
				color: tw`border-yellow-600 bg-yellow-600`,
			},
		],
		stripePriceId:
			/*cspell: disable*/ 'price_1MkpBYDK9f6RLy6srzQQVcVy' /*cspell: enable*/,
	},

	{
		id: 4,
		name: 'Gray Hoodie',
		price: 60,
		discount: 30,
		color: 'gray',
		category: 'hoodies',
		image: hoodie01,
		altImage: hoodie01b,
		slide: hoodieSlide01,
		relatedProducts: [
			{
				id: 5,
				color: tw`border-sky-300 bg-sky-300`,
			},
			{
				id: 6,
				color: tw`border-pink-400 bg-pink-400`,
			},
			{
				id: 7,
				color: tw`border-orange-500 bg-orange-500`,
			},
		],
		stripePriceId:
			/*cspell: disable*/ 'price_1MkpBsDK9f6RLy6s0CTi68fE' /*cspell: enable*/,
	},
	{
		id: 5,
		name: 'Light Blue Hoodie',
		price: 55,
		discount: 0,
		color: 'blue',
		category: 'hoodies',
		image: hoodie02,
		altImage: hoodie02b,
		slide: hoodieSlide02,
		relatedProducts: [
			{
				id: 4,
				color: tw`border-gray-400 bg-gray-400`,
			},
			{
				id: 6,
				color: tw`border-pink-400 bg-pink-400`,
			},
			{
				id: 7,
				color: tw`border-orange-500 bg-orange-500`,
			},
		],
		stripePriceId:
			/*cspell: disable*/ 'price_1MkpCEDK9f6RLy6saMTZV6Hm' /*cspell: enable*/,
	},
	{
		id: 6,
		name: 'Solid Pink Hoodie',
		price: 50,
		discount: 5,
		color: 'pink',
		category: 'hoodies',
		image: hoodie03,
		altImage: hoodie03b,
		slide: hoodieSlide03,
		relatedProducts: [
			{
				id: 4,
				color: tw`border-gray-400 bg-gray-400`,
			},
			{
				id: 5,
				color: tw`border-sky-300 bg-sky-300`,
			},
			{
				id: 7,
				color: tw`border-orange-500 bg-orange-500`,
			},
		],
		stripePriceId:
			/*cspell: disable*/ 'price_1MkpCWDK9f6RLy6sbjHNsypj' /*cspell: enable*/,
	},
	{
		id: 7,
		name: 'Bright Orange Hoodie',
		price: 60,
		discount: 30,
		color: 'orange',
		category: 'hoodies',
		image: hoodie04,
		altImage: hoodie04b,
		slide: hoodieSlide04,
		relatedProducts: [
			{
				id: 4,
				color: tw`border-gray-400 bg-gray-400`,
			},
			{
				id: 5,
				color: tw`border-sky-300 bg-sky-300`,
			},
			{
				id: 6,
				color: tw`border-pink-400 bg-pink-400`,
			},
		],
		stripePriceId:
			/*cspell: disable*/ 'price_1MkpCuDK9f6RLy6sWkI185Iw' /*cspell: enable*/,
	},

	{
		id: 8,
		name: 'Light Blue Collar Shirt',
		price: 30,
		discount: 10,
		color: 'blue',
		category: 'shirts',
		image: shirt01,
		altImage: shirt01b,
		slide: shirtSlide01,
		relatedProducts: [
			{
				id: 9,
				color: tw`border-sky-200 bg-sky-200`,
			},
			{
				id: 10,
				color: tw`border bg-white hover:brightness-90`,
			},
			{
				id: 11,
				color: tw`border-blue-900 bg-blue-900`,
			},
		],
		stripePriceId:
			/*cspell: disable*/ 'price_1MkpDbDK9f6RLy6suf6PV1xe' /*cspell: enable*/,
	},
	{
		id: 9,
		name: 'Light Blue Collar Shirt',
		price: 25,
		discount: 5,
		color: 'blue',
		category: 'shirts',
		image: shirt02,
		altImage: shirt02b,
		slide: shirtSlide02,
		relatedProducts: [
			{
				id: 8,
				color: tw`border-sky-200 bg-sky-200`,
			},
			{
				id: 10,
				color: tw`border bg-white hover:brightness-90`,
			},
			{
				id: 11,
				color: tw`border-blue-900 bg-blue-900`,
			},
		],
		stripePriceId:
			/*cspell: disable*/ 'price_1MkpDvDK9f6RLy6sZU9RViHG' /*cspell: enable*/,
	},
	{
		id: 10,
		name: 'White Collar Shirt',
		price: 20,
		discount: 0,
		color: 'white',
		category: 'shirts',
		image: shirt03,
		altImage: shirt03b,
		slide: shirtSlide03,
		relatedProducts: [
			{
				id: 8,
				color: tw`border-sky-200 bg-sky-200`,
			},
			{
				id: 9,
				color: tw`border-sky-200 bg-sky-200`,
			},
			{
				id: 11,
				color: tw`border-blue-900 bg-blue-900`,
			},
		],
		stripePriceId:
			/*cspell: disable*/ 'price_1Mko3KDK9f6RLy6soL2TjA6y' /*cspell: enable*/,
	},
	{
		id: 11,
		name: 'Red Blue Plaid Shirt',
		price: 35,
		discount: 20,
		color: 'blue',
		category: 'shirts',
		image: shirt04,
		altImage: shirt04b,
		slide: shirtSlide04,
		relatedProducts: [
			{
				id: 8,
				color: tw`border-sky-200 bg-sky-200`,
			},
			{
				id: 9,
				color: tw`border-sky-200 bg-sky-200`,
			},
			{
				id: 10,
				color: tw`border bg-white hover:brightness-90`,
			},
		],
		stripePriceId:
			/*cspell: disable*/ 'price_1MkpEXDK9f6RLy6sVXb0u8Bi' /*cspell: enable*/,
	},
]

export default PRODUCTS
