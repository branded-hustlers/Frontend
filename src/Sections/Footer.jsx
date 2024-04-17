
const Footer = () => {
  return (
    <footer>
      <div className=" bg-green-300 w-full p-9">
        <div className=" p-10 px-56 flex justify-center items-center gap-10">
          <div className=" border-2 border-green-600 w-[27rem] h-32 rounded-xl p-4">
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
        </div>
      </div>
    </footer>
  );
}

export default Footer