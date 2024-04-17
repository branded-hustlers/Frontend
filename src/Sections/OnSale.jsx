
import OnSaleCard from "../Components/OnSaleCard";
import productsData from "../Constants/index.json";


const OnSale = () => {
     const products = productsData.slice(40, 44);

  return (
    <div className=" mx-12 mt-16">
      <h1 className=" text-green-600 text-4xl font-normal hover:cursor-text ">
        On Sale
      </h1>

      <div className=" grid grid-cols-4 gap-10 mx-3 mt-5 ">
        {products.map((products) => (
          <OnSaleCard
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

export default OnSale