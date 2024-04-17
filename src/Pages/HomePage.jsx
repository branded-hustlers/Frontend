import Navbar from "../Layouts/Navbar"
import BestSellers from "../Sections/BestSellers"
import Categories from "../Sections/Categories"
import Footer from "../Sections/Footer"
import Hero from "../Sections/Hero"
import LatestProducts from "../Sections/LatestProducts"
import OnSale from "../Sections/OnSale"
import Recommended from "../Sections/Recommended"
import StatBanner from "../Sections/StatBanner"

const HomePage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Categories />
    <BestSellers />
    <LatestProducts />
    <OnSale />
    <Recommended />
    <StatBanner />
    <Footer />
    </>
  )
}

export default HomePage