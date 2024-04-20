import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import CartButton from "./CartButton";
import { useState } from "react";


const BestSellersCard = ({ imgURL, description , name , price}) => {
  
   const [ isLiked , setIsLiked] = useState(false) 

   const toggleLike= () => {
    setIsLiked(!isLiked)
   }

  return (
    <div>
      <div className=" flex gap-5 items-center w-[21rem] h-44 rounded-2xl p-0 bg-green-50 border border-gray-200">
        <img src={imgURL} alt={description} width={150} height={200}/>
      
      <div>
        <h1 className=" font-semibold text-2xl text-green-600">{name}</h1>
        <p className=" font-semibold">{price}</p>

        <div className=" flex justify-center items-center gap-5 mt-8">
        <div onClick={toggleLike}>
        <FontAwesomeIcon icon={faHeart} color={ isLiked?'red' : 'green'} size="xl" />
        </div>
        <CartButton label="Add To Cart"/>
        </div>

      </div>
      </div>
    </div>
  );
}

export default BestSellersCard