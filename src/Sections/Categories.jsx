import CategoriesCard from '../Components/CategoriesCard'
import categoriesData from '../Constants/CatergoryIcons.json'

const Categories = () => {
  return (
    <section className=' mx-12 mt-16' >
        <h1 className=' text-green-600 text-4xl font-normal hover:cursor-text '>Categories</h1>
        <div className=' flex justify-center  mt-5 gap-12'>
        {categoriesData.map((categories) => 
       <CategoriesCard key={categories.id} imgURL={categories.icon} caption={categories.caption} label={categories.desciption}/>  
    )}
        </div>
    </section>
  )
}

export default Categories