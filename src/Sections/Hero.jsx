import Button from '../Components/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const Hero = () => {
  return (
    <div className=" relative ">
      <div
        className="  bg-cover bg-no-repeat bg-center bg-[url(../Images/herobimg.jpg)] w-auto h-[31rem] p-10 overflow-hidden  mx-8 rounded-3xl
                     before:content-normal before:absolute before:inset-0  before:bg-gradient-to-r
                     before:from-[#5cc25f] before:to-[#2a632c] before:opacity-50 before:h-[31rem] before:container before:rounded-3xl before:w-auto before:mx-8"
      >

        <div className=" absolute">
          <div className="  flex justify-between gap-2rem] items-center mt-0">
            <div className="  flex flex-col  justify-center ml-28">
              <h1 className=" text-white font-semibold text-7xl">
                Fresh & Healthy Organic Food
              </h1>
              <p className=" font-normal text-white text-4xl mt-4">
                Sale Up To <span className=" text-green-400"> 20% </span> Off
              </p>
              <p className=" text-white text-xl mt-2 mb-4"> We Deliver. You Enjoy.</p>
              <Button
                label="SHOP NOW"
                icon={<FontAwesomeIcon icon={faArrowRight} />}
              />
            </div>

            <img
              className=" mx-28 "
              src=" ../Images/HeroImage.png"
              alt=" Hero Section Image "
              width={600}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero