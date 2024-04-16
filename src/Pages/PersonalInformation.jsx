import Navbar from "../Layouts/Navbar"
import Sidebar from "../Layouts/Sidebar"
import { faInfo, faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBills } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'


function PersonalInformation() {
 
    return (
      <>
        <Navbar />
        <div className="flex">
          <Sidebar />        
          <div className="flex-grow">
            <div className="text-center">
              <h1>Did it work, yes ish</h1>
              <p>Yes or no?</p>
            </div>
           </div>
        </div>
      </>
    )
  }
  
  export default PersonalInformation
  