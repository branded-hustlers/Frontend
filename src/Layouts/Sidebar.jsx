import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBills } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Sidebar = () => {

  return (
    <aside className="bg-white w-96 min-h-screen min-w-[400px] border-r border-green-200">
      <h1 className="text-green-700 text-3xl py-2 px-4">Hi, User</h1>
      <p className="text-green-600 text-2xl py-1 px-4">Your affiliation with us is greatly appreciated!</p>
      <nav className="mt-2">
            <ul>
                <li>
                    <a href="/PersonalInformation.jsx" className={`block text-xl py-3 px-5 hover:bg-green-500 hover:text-white rounded-md ml-2 mr-2`}>
                        <FontAwesomeIcon icon={faUser} className="ml-4 mr-12" />
                            Personal Information
                    </a>
                </li>
                <li>
                    <a href="/PurchaseHistoryPage.jsx" className={`block text-xl py-3 px-5 hover:bg-green-500 hover:text-white rounded-md ml-2 mr-2`}>
                        <FontAwesomeIcon icon={faAddressBook} className="ml-4 mr-11" />
                            Purchase History
                    </a>
                </li>
                <li>
                    <a href="Frontend/src/Pages/Wishlist" className={`block text-xl py-3 px-5 hover:bg-green-500 hover:text-white rounded-md ml-2 mr-2`}>
                    <FontAwesomeIcon icon={faHeart} className="ml-4 mr-11" />
                        Wishlist
                    </a>
                </li>
                <li>
                    <a href="/src/Pages/Addresses" className={`block text-xl py-3 px-5 hover:bg-green-500 hover:text-white rounded-md ml-2 mr-2`}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="ml-4 mr-12" />
                            Addresses
                    </a>
                </li>
                <li>
                    <a href="/src/Pages/PaymentMethods" className={`block text-xl py-3 px-5 hover:bg-green-500 hover:text-white rounded-md ml-2 mr-2`}>
                    <FontAwesomeIcon icon={faMoneyBills} className="ml-4 mr-9" />
                        Payment Methods
                    </a>
                </li>
                <li>
                    <a href="/src/Pages/Order" className={`block text-xl py-3 px-5 hover:bg-green-500 hover:text-white rounded-md ml-2 mr-2`}>
                    <FontAwesomeIcon icon={faBoxOpen} className="ml-4 mr-9" />
                        Order
                    </a>
                </li>
                <hr size="2"></hr>
                <li>
                    <a href="/src/Pages/Settings" className={`block text-xl py-2 px-4 hover:bg-green-500 hover:text-white rounded-md ml-2 mr-2`}>
                    <FontAwesomeIcon icon={faCog} className="ml-5 mr-10" />
                        Settings
                    </a>
                </li>
                <li>
                    <a href="/src/Pages/Help" className={`block text-xl py-2 px-4 hover:bg-green-500 hover:text-white rounded-md ml-2 mr-2`}>
                    <FontAwesomeIcon icon={faInfo} className="ml-7 mr-11" />
                        Help
                    </a>
                </li>
            </ul>
      </nav>
    </aside>
  )
}

export default Sidebar