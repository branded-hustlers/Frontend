import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faInfo, faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBills } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState(null);
    const location = useLocation();
    const [expanded, setExpanded] = useState(true)


    useEffect(() => {
        const pathname = location.pathname;
        // Update activeItem based on the current pathname
        switch (pathname) {
          case '/PersonalInformationPage':
            setActiveItem('PersonalInformation');
            break;
          case '/PurchaseHistoryPage':
            setActiveItem('PurchaseHistory');
            break;
          case '/WishlistPage':
            setActiveItem('Wishlist');
            break;
          case '/AddressesPage':
            setActiveItem('Addresses');
            break;
          case '/PaymentMethodsPage':
            setActiveItem('PaymentMethods');
            break;
          case '/OrdersPage':
            setActiveItem('Orders');
            break;
          case '/SettingsPage':
            setActiveItem('Settings');
            break;
          case '/HelpFeedbackPage':
            setActiveItem('HelpFeedback');
            break;
          // Add more cases for other pages as needed
          default:
            setActiveItem(null);
            break;
        }
      }, [location.pathname]);

  return (
    <aside className={`bg-white min-h-screen border-r border-green-200 ${expanded ? 'w-96' : 'w-24'}`}>
      <h1 className={`text-green-700 text-3xl py-2 px-4 ${expanded ? 'w-96' : 'w-20'}`}>{expanded && "Hi, User"} 
      <button onClick={() => setExpanded (!expanded)} >
        {expanded? <FontAwesomeIcon icon={faChevronLeft} className="ml-56 h-6 w-6" />:<FontAwesomeIcon icon={faHamburger} className="ml-6 h-6 w-6" />} </button>
      </h1>
      <p className="text-green-600 text-2xl py-1 px-4">{expanded && "Your affiliation with us is greatly appreciated!"}</p>
      <nav className="mt-2">
            <ul>
              <hr size="2"></hr>
                <li>
                    <Link to="/PersonalInformationPage" 
                    className={`block text-xl my-1 py-3 px-5 hover:bg-green-500 hover:text-white rounded-md ml-2 mr-2 ${activeItem === 'PersonalInformation' ? 'bg-green-500 text-white' : 'hover:bg-green-500 hover:text-white'}`}
                    >
                        <FontAwesomeIcon icon={faUser} className="ml-3 mr-12" />
                        {expanded && "Personal Information"}
                    </Link>
                </li>
                <li>
                    <Link to="/PurchaseHistoryPage" 
                    className={`block text-xl my-1 py-3 px-5 hover:bg-green-500 hover:text-white rounded-md ml-2 mr-2 ${activeItem === 'PurchaseHistory' ? 'bg-green-500 text-white' : 'hover:bg-green-500 hover:text-white'}`}
                    >
                        <FontAwesomeIcon icon={faAddressBook} className="ml-3 mr-11" />
                            {expanded && "Purchase History"}
                    </Link>
                </li>
                <li>
                    <Link to="/WishlistPage" 
                    className={`block text-xl my-1 py-3 px-5 hover:bg-green-500 hover:text-white rounded-md ml-2 mr-2 ${activeItem === 'Wishlist' ? 'bg-green-500 text-white' : 'hover:bg-green-500 hover:text-white'}`}
                    >
                    <FontAwesomeIcon icon={faHeart} className="ml-3 mr-11" />
                        {expanded && "Wishlist"}
                    </Link>
                </li>
                <li>
                    <Link to="/AddressesPage" 
                    className={`block text-xl my-1 py-3 px-5 hover:bg-green-500 hover:text-white rounded-md ml-2 mr-2 ${activeItem === 'Addresses' ? 'bg-green-500 text-white' : 'hover:bg-green-500 hover:text-white'}`}
                    >
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="ml-4 mr-12" />
                        {expanded && "Addresses"}
                    </Link>
                </li>
                <li>
                    <Link to="/PaymentMethodsPage" 
                    className={`block text-xl my-1 py-3 px-5 hover:bg-green-500 hover:text-white rounded-md ml-2 mr-2 ${activeItem === 'PaymentMethods' ? 'bg-green-500 text-white' : 'hover:bg-green-500 hover:text-white'}`}
                    >
                    <FontAwesomeIcon icon={faMoneyBills} className="ml-[10px] mr-9" />
                        {expanded && "Payment Methods"}
                    </Link>
                </li>                
                <li>
                    <Link to="/OrdersPage" 
                    className={`block text-xl my-1 py-3 px-5 hover:bg-green-500 hover:text-white rounded-md ml-2 mr-2 ${activeItem === 'Orders' ? 'bg-green-500 text-white' : 'hover:bg-green-500 hover:text-white'}`}
                    >
                    <FontAwesomeIcon icon={faBoxOpen} className="ml-3 mr-9" />
                        {expanded && "Order History"}
                    </Link>
                </li>
                <hr size="2"></hr>
                <li>
                    <Link to="/SettingsPage" 
                    className={`block text-xl my-1 py-3 px-5 hover:bg-green-500 hover:text-white rounded-md ml-2 mr-2 ${activeItem === 'Settings' ? 'bg-green-500 text-white' : 'hover:bg-green-500 hover:text-white'}`}
                    >
                    <FontAwesomeIcon icon={faCog} className="ml-3 mr-10" />
                        {expanded && "Settings"}
                    </Link>
                </li>
                <li>
                    <Link to="/HelpFeedbackPage" 
                    className={`block text-xl my-1 py-3 px-5 hover:bg-green-500 hover:text-white rounded-md ml-2 mr-2 ${activeItem === 'HelpFeedback' ? 'bg-green-500 text-white' : 'hover:bg-green-500 hover:text-white'}`}>
                    <FontAwesomeIcon icon={faInfo} className="ml-5 mr-11" />
                        {expanded && "Help & Feedback"}
                    </Link>
                </li>
            </ul>
      </nav>
    </aside>
  )
}

export default Sidebar