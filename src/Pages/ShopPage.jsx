import Navbar from "../Layouts/Navbar"
import categoriesData from '../Constants/CatergoryIcons.json'
import CategoriesCard from "../Components/CategoriesCard"
import ShopCards from "../Components/ShopCards"
import productsData from "../Constants/index.json";
import Footer from "../Sections/Footer";


const ShopPage = () => {

         const products = productsData.slice(10 , 45);

  return (
    <>
      <Navbar />
      <h1 className=" text-center font-semibold text-green-500 text-4xl">
        Categories
      </h1>

      <div className=" flex justify-center items-center gap-11 mt-8 mx-5">
        {categoriesData.map((category) => (
          <CategoriesCard
            key={category.id}
            imgURL={category.icon}
            caption={category.caption}
            label={category.desciption}
          />
        ))}
      </div>

      <h1 className=" text-center font-semibold my-12 text-green-500 text-4xl">
        Shop
      </h1>

      <div className=" grid grid-cols-5 gap-10 mx-16 mt-6 mb-16">
        {products.map((shop) => (
          <ShopCards
            key={shop.id}
            imgURL={shop.icon}
            desciption={shop.description}
            name={shop.caption}
            price={shop.price}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default ShopPage
