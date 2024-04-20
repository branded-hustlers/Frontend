import BestSellersCard from "../Components/BestSellersCard";
import productsData from "../Constants/index.json"

const BestSellers = () => {
const products = productsData.slice( 6 , 10)

  return (
    <div className=" mx-12 mt-16">
      <h1 className=" text-green-600 text-5xl font-semibold hover:cursor-text ">
        Best Sellers
      </h1>
      <div className=" grid grid-cols-4 gap-5 mx-3 mt-5 ">
        {products.map((products) => (
          <BestSellersCard
            key={products.id}
            imgURL={products.icon}
            description={products.description}
            name={products.caption}
            price={products.price}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSellers