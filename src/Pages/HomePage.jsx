import Navbar from "../Layouts/Navbar"
import BestSellers from "../Sections/BestSellers"
import Categories from "../Sections/Categories"
import Hero from "../Sections/Hero"
import LatestProducts from "../Sections/LatestProducts"
import OnSale from "../Sections/OnSale"
import Recommended from "../Sections/Recommended"

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
    </>
  )
}

export default HomePage