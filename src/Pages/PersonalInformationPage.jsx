import Navbar from "../Layouts/Navbar"
import Sidebar from "../Layouts/Sidebar"
import Footer from "../Sections/Footer"
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
              <form className="flex flex-col items-center mt-10">
                <div className="flex flex-row">
                  <InputBox placeholder="Surname:" type="text" />
                  <InputBox placeholder="Othernames:" type="text" />
                </div>
                <div className="flex flex-row">
                <InputBox placeholder="Email:" type="email" />
                <InputBox placeholder="Username:" type="text" />
                </div>
                <div className="flex flex-row">
                <InputBox placeholder="Password:" type="password" />
                <InputBox placeholder="" type="date" />
                </div>
              </form>
            </div>
           </div>
        </div>
        <Footer />
      </>
    )
  }
  
  export default PersonalInformation
  