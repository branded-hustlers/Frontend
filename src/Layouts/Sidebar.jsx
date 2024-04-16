import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBills } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {

  return (
    <aside className="bg-white w-64 min-h-screen border-r border-green-200">
      <h1 className="text-green-500 text-xl py-2">Hi, User</h1>
      <p className="text-green-400 text-lg py-1">Your affiliation with us is greatly appreciated!</p>
      <nav className="mt-2">
            <ul>
                <li>
                    <a href="/Pages/PersonalInformation.jsx" className={`block py-2 px-4 hover:bg-green-400 hover:text-white rounded-md ml-2 mr-2`}>
                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                            Personal Information
                    </a>
                </li>
                <li>
                    <a href="/purchase-history" className={`block py-2 px-4 hover:bg-green-400 hover:text-white rounded-md ml-2 mr-2`}>
                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                            Purchase History
                    </a>
                </li>
                <li>
                    <a href="/wishlist" className={`block py-2 px-4 hover:bg-green-400 hover:text-white rounded-md ml-2 mr-2`}>
                    <FontAwesomeIcon icon={faHeart} className="mr-2" />
                        Wishlist
                    </a>
                </li>
                <li>
                    <a href="/addresses" className={`block py-2 px-4 hover:bg-green-400 hover:text-white rounded-md ml-2 mr-2`}>
                    <FontAwesomeIcon icon={faAddressBook} className="mr-2" />
                            Addresses
                    </a>
                </li>
                <li>
                    <a href="/payment methods" className={`block py-2 px-4 hover:bg-green-400 hover:text-white rounded-md ml-2 mr-2`}>
                    <FontAwesomeIcon icon={faMoneyBills} className="mr-2" />
                        Payment Methods
                    </a>
                </li>
                <li>
                    <a href="/Order" className={`block py-2 px-4 hover:bg-green-400 hover:text-white rounded-md ml-2 mr-2`}>
                    <FontAwesomeIcon icon={faHeart} className="mr-2" />
                        Order
                    </a>
                </li>
                <hr size="2"></hr>
                <li>
                    <a href="/settings" className={`block py-2 px-4 hover:bg-green-400 hover:text-white rounded-md ml-2 mr-2`}>
                    <FontAwesomeIcon icon={faCog} className="mr-2" />
                        Settings
                    </a>
                </li>
                <li>
                    <a href="/help" className={`block py-2 px-4 hover:bg-green-400 hover:text-white rounded-md ml-2 mr-2`}>
                    <FontAwesomeIcon icon={faInfo} className="ml-2 mr-3" />
                        Help
                    </a>
                </li>
            </ul>
      </nav>
    </aside>
  )
}

export default Sidebar