
const CategoriesCard = ({ imgURL , caption , label}) => {
  return (
    <div >
      <div className=" flex flex-col justify-between items-center p-6 w-32 h-32 rounded-lg border-2 hover:border-green-500  ">
        <img src={imgURL} alt={label} width={60} height={100} />
        <p className=" text-green-500 ">{caption}</p>
      </div>
    </div>
  );
}

export default CategoriesCard