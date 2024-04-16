import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

const BestSellersCard = ({ imgURL, description , name , price}) => {
  return (
    <div>
      <div className=" flex justify-between items-center w-72 h-44 rounded-2xl p-5  bg-green-50 border border-gray-400">
        <img src={imgURL} alt={description} width={150} height={200}/>
      

      <div>
        <h1 className=" font-semibold text-xl text-green-600">{name}</h1>
        <p>{price}</p>
        <p className=" text-green-600">
        <FontAwesomeIcon icon={faHeart} />
        </p>
      </div>
      </div>
    </div>
  );
}

export default BestSellersCard