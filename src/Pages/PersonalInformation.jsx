import Navbar from "../Layouts/Navbar"
import Sidebar from "../Layouts/Sidebar"
import InputBox from "../Components/InputBox"

function PersonalInformation() {
 
    return (
      <>
        <Navbar />
        <div className="flex">
          <Sidebar />        
          <div className="flex-grow">
            <div>
              <h1 className="text-green-600 text-center text-4xl mb-6">Personal Information</h1>
              <form className="flex flex-col items-center">
                <div className="flex ">
                  <InputBox placeholder="Last name:" type="text" />
                  <InputBox placeholder="Other names:" type="text" />
                </div>
                <InputBox placeholder="Email:" type="email" />
                <InputBox placeholder="Username:" type="text" />
                <InputBox placeholder="Password:" type="password" />
                <InputBox placeholder="" type="date" />
              </form>
            </div>
           </div>
        </div>
      </>
    )
  }
  
  export default PersonalInformation
  