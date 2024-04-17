import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTag , faCartShopping , faSeedling , faTruck} from "@fortawesome/free-solid-svg-icons"

const StatBanner = () => {
  return (
    <div className=" relative ">
      <div
        className="  bg-cover bg-no-repeat bg-center bg-[url(../Images/herobimg.jpg)] w-auto h-[16rem] p-8 overflow-hidden mt-16 mb-14
                     before:content-normal before:absolute before:inset-0  before:bg-gradient-to-r
                     before:from-[#5cc25f] before:to-[#2a632c] before:opacity-50 before:h-[16rem] before:container  before:w-auto "
      >
        <div className=" absolute flex justify-evenly px-32 gap-20 text-white">
          <div className=" text-center">
            <h1 className=" font-bold text-5xl"> 10+ </h1>
            <FontAwesomeIcon icon={faTag} />

            <p className=" font-semibold text-2xl mt-1">Categories</p>
            <p className=" mt-4">
              To choose from, varying from <br /> edibles to non-edibles
            </p>
          </div>

          <div className=" text-center">
            <h1 className=" font-bold text-5xl">2k+</h1>
            <FontAwesomeIcon  icon={faCartShopping} />

            <p className=" font-semibold text-2xl mt-1">Purchases</p>
            <p className=" mt-4">
              Made on our products with 5-star <br /> ratings and positive
              reviews
            </p>
          </div>

          <div className=" text-center">
            <h1 className="font-bold text-5xl">100%</h1>
            <FontAwesomeIcon icon={faSeedling}/>       

            <p className=" font-semibold text-2xl mt-1">Organic</p>
            <p className=" mt-4">
              Fruits and Vegetables fresh from the <br /> farm
            </p>
          </div>

          <div className=" text-center">
            <h1 className=" font-bold text-5xl ">2-3</h1>
            <FontAwesomeIcon icon={faTruck}/>

            <p className=" font-semibold text-2xl mt-1">Days</p>
            <p className=" mt-4">Delivery guaranteed on pre-ordered <br /> products</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatBanner