
const Footer = () => {
  return (
    <footer>
      <div className=" bg-green-300 w-full p-9">
        <div className=" px-32 flex justify-center items-center gap-10">
          <div className=" border-2 border-green-600 w-[27rem]  h-32 rounded-xl p-4">
            <h1 className=" text-green-700 font-semibold text-xl ">
              Newsletter
            </h1>
            <p className=" mt-1">
              Do not miss any promotion. Get additional discounts.
            </p>
            <div className=" relative">
              <input
                type="text"
                className=" active:borfer-none p-2 bg-green-200 mt-2 rounded-3xl h-8 w-72 "
              />
              <button className=" bg-green-500 text-white h-8 w-20 rounded-3xl absolute  top-2 left-60">
                Sign Up
              </button>
            </div>
          </div>

          <div className=" border-2 border-green-600 w-[27rem] h-32 rounded-xl p-4">
            <h1 className=" text-green-700 font-semibold text-xl ">
              Mobile App
            </h1>
            <p className=" mt-1">
              Download our mobile application
            </p>
          </div>
        </div>

        <div>
          <div className=" flex flex-col justify-center items-center gap-7 text-center mt-9">
            <div>
              <h1 className=" text-green-800 font-semibold text-4xl">
                Essentiaisles
              </h1>
            </div>
            <p className=" text-green-600 font-normal text-lg">
              Our store offers you fresh products all year round , 24/7. Shop{" "}
              <br /> with us for a fresh experience
            </p>
          </div>
        </div>

        <div>
          <div className=" flex justify-center items-center gap-28 mt-1">
            <div className=" px-14">
              <p className=" text-green-800 font-semibold text-3xl">Products</p>
              <ul className=" flex flex-col gap-2 mt-4  text-green-600 text-lg ">
                <a href="">Categories</a>
                <a href="">Latest Products</a>
                <a href="">Bestsellers</a>
                <a href="">On Sale</a>
                <a href="">For You</a>
              </ul>
            </div>

            <div className=" px-14">
              <p className=" text-green-800 font-semibold text-3xl">
                My Account
              </p>
              <ul className=" flex flex-col gap-2 mt-4  text-green-600 text-lg ">
                <a href="">My Orders</a>
                <a href="">Shopping Lists</a>
                <a href="">Account Details</a>
                <a href="">Refer A friend</a>
                <a href="">Loyalty Points</a>
              </ul>
            </div>

            <div className=" px-14">
              <p className=" text-green-800 font-semibold text-3xl">
                Departments
              </p>
              <ul className=" flex flex-col gap-2 mt-4 text-green-600 text-lg ">
                <a href="">Grocery</a>
                <a href="">Waste Management</a>
                <a href="">Gym</a>
                <a href="">Animal Stocks</a>
                <a href="">Consultant</a>
              </ul>
            </div>

            <div className=" px-14">
              <p className=" text-green-800 font-semibold text-3xl pt-9">About Us</p>
              <ul className=" flex flex-col gap-2 mt-4  text-green-600 text-lg">
                <a href="">Our History</a>
                <a href="">Social Media</a>
                <a href="">Our Services</a>
              </ul>

              <div className=" mt-2">
                <p className=" text-green-800 font-semibold text-3xl">
                  Location
                </p>

                <p className=" mt-3 text-green-600 text-lg ">
                  Pantang Junction,Adom <br />Close, House No.1
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-center text-green-600 ">
          Copyright &copy; 2024 by Grocery. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer