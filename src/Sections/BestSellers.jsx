import BestSellersCard from "../Components/BestSellersCard";
import productsData from "../Constants/index.json"

const BestSellers = () => {
const products = productsData.slice( 6 , 10)

  return (
    <div className=" mx-12 mt-16">
      <h1 className=" text-green-600 text-4xl font-normal hover:cursor-text ">
        Best Sellers
      </h1>
      <div className=" flex gap-5 mt-5 overflow-scroll ">
      {products.map((products) => 
       <BestSellersCard key={products.id} imgURL={products.icon} 
                        description={products.description}
                        name={products.caption}
                        price={products.price}/>)}
      </div>                  
    </div>
  );
}

export default BestSellers