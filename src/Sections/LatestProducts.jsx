import LatestProductsCard from "../Components/LatestProductsCard";
import productsData from "../Constants/index.json";

const LatestProducts = () => {
  const products = productsData.slice(20, 28);

  return (
    <div className=" mx-12 mt-16">
      <h1 className=" text-green-600 text-4xl font-normal hover:cursor-text ">
        Latest Products
      </h1>

      <div className=" grid grid-cols-4 gap-10 mx-3 mt-5 ">
        {products.map((products) => (
          <LatestProductsCard
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

export default LatestProducts