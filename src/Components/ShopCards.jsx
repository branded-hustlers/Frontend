import CartButton from './CartButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const ShopCards = ({imgURL,description,name,price,}) => {

    const [isLiked, setIsLiked] = useState(false);
    const [add, setAdd] = useState(false);


    const toggleLike = () => {
      setIsLiked(!isLiked);
    };

     
     const toggleAdd = () => {
       setAdd(!add);
     };

  return (
    <div>
      <div className=" flex flex-col justify-evenly shadow-md items-center border border-gray-200 hover:border-green-500  rounded-2xl w-56 h-72 bg-gradient-to-t from-green-200 to-white">
        <div>
          <img src={imgURL} alt={description} width={100} height={50} />
        </div>

        <div className=" mt-2 px-2">
          <div className=" flex gap-12">
            <h1 className=" font-normal text-green-600 text-xl">{name}</h1>
            <p>{price}</p>
          </div>

          <div className=" flex justify-center items-center gap-7 mt-7">
            <div onClick={toggleLike}>
              <FontAwesomeIcon
                icon={faHeart}
                color={isLiked ? "red" : "white"}
                size="xl"
              />
            </div>

            <div onClick={toggleAdd}>
              <CartButton label={add ? "Added" : "Add To Cart"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCards