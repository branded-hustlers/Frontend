import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    <nav className="  mx-1 my-1 p-4">
      <div className=" container flex justify-between items-center ">
        <div className=" flex justify-center items-center gap-5">
        { /* <FontAwesomeIcon
            icon={faHamburger}
            size="2xl"
            className=" text-green-500"
          /> */ }

          <img
            src="../Images/photo_2024-04-02_22-40-01.jpg"
            alt=""
            width={200}
            height={120}
          />
        </div>

        <div className=' flex flex-1 justify-center items-center gap-10 text-lg font-medium text-[]'>
         <a href="" className=" hover:text-green-500" >Home</a>
         <a href="" className=" hover:text-green-500">About Us</a>
         <a href="" className=" hover:text-green-500">Categories</a>
         <a href="" className=" hover:text-green-500">Something</a>
        </div>

        <div className=' relative'> 
          <input
            type="text"
            placeholder="Cucumber"
            className=" items-center w-80 h-8 border border-green-500 border-solid rounded-full p-3 pb-4 "
          />
          <FontAwesomeIcon
            icon={faSearch}
            size="xx"
            className=" text-green-500  absolute right-4 top-2 "
          />
        </div>

        <div className=' flex items-center space-x-8 ml-10 mr-5'>
          <a href="">
            <FontAwesomeIcon
              icon={faUser}
              size="xl"
              className=" text-[#343434]"
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faCartShopping}
              size="xl"
              className=" text-[#343434]"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar