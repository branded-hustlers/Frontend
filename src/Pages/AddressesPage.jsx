import React from 'react'
import Navbar from '../Layouts/Navbar'
import Sidebar from '../Layouts/Sidebar'

function AddressesPage () {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />        
        <div className="flex-grow">
          <div>
            <h1 className="text-green-600 text-center text-4xl mb-6">Addresses</h1>            
          </div>
         </div>
      </div>
    </>
  )
}

export default AddressesPage