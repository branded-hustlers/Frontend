import React from 'react'
import Navbar from '../Layouts/Navbar'
import Sidebar from '../Layouts/Sidebar'

function OrdersPage () {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />        
        <div className="flex-grow">
          <div>
            <h1 className="text-green-600 text-center text-4xl mb-6">Orders</h1>            
          </div>
         </div>
      </div>
    </>
  )
}

export default OrdersPage