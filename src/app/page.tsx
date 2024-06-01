import Banner from '@/components/Banner'
import FeaturedProductsCarousel from '@/components/FeaturedProductsCarousel'
import FromBlog from '@/components/FromBlog'
import FromInstagram from '@/components/FromInstagram'
import ProductsCarousel from '@/components/ProductsCarousel'
import ProductsCategories from '@/components/ProductsCategories'
import ProductsGuide from '@/components/ProductsGuide'

export default function Home() {
	return (
		<main>
			<FeaturedProductsCarousel />
			<ProductsGuide />
			<ProductsCarousel />
			<ProductsCategories />
			<Banner />
			<FromBlog />
			<FromInstagram />
		</main>
	)
}
