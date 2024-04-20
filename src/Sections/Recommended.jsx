
import RecommendedCard from "../Components/RecommendedCard";
import productsData from "../Constants/index.json";

const Recommended = () => {
const products = productsData.slice(36,40 );

  return (
    <div className=" mx-12 mt-16">
      <h1 className=" text-green-600 text-5xl font-semibold hover:cursor-text ">
        Recommended
      </h1>

      <div className=" grid grid-cols-4 gap-10 mx-3 mt-5 ">
        {products.map((products) => (
          <RecommendedCard
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
};

export default Recommended;
