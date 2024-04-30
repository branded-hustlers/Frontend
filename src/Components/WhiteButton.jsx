
const GreenButton = ({ label }) => {
    return (
       <button className=" flex justify-center items-center gap-5 px-5 w-40 h-12 border-green-600 border-2 py-0.5 text-green-600 text-lg font-semibold bg-white hover:bg-gray-200 rounded-[200px]">
          {label}
       </button>
      )
  }
  
  export default GreenButton