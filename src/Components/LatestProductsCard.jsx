import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import CartButton from "./CartButton";

const LatestProductsCard = ({ imgURL, description, name, price }) => {
  return (
    <div>
      <div className=" flex gap-5 items-center w-[21rem] h-44 rounded-2xl p-0 bg-green-50 border border-gray-200">
        <img src={imgURL} alt={description} width={150} height={200} />

        <div>
          <h1 className=" font-semibold text-2xl text-green-600">{name}</h1>
          <p className=" font-semibold">{price}</p>

          <div className=" flex justify-center items-center gap-5 mt-8">
            <p className=" text-green-600 ">
              <FontAwesomeIcon icon={faHeart} size="xl" />
            </p>
            <CartButton label="Add To Cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProductsCard;
