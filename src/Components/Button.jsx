
const Button = ({ label , icon}) => {
  return (
     <button className=" flex justify-center items-center gap-5 px-5 w-60 h-9 py-0.5 text-green-600 text-lg font-semibold  bg-white rounded-lg">
        {label}
        {icon}
     </button>
    )
}

export default Button