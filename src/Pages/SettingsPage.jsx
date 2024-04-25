import React from 'react'
import Navbar from '../Layouts/Navbar'
import Sidebar from '../Layouts/Sidebar'
import Line from '../Components/Line'
import Dropdown from '../Components/Dropdown'
import Footer from "../Sections/Footer"
import SlidingButton from '../Components/SlidingButton'

const Settings = () => {

  const languages = ['English', 'Spanish', 'French', 'German']
  const themes = ['Light', 'Dark']
  return (
    <>
      <Navbar />
        <div className="flex">
          <Sidebar />        
          <div className="flex-grow">
            <div>
              <h1 className="text-green-700 text-center text-4xl mb-14">Settings</h1>            
            </div>
            <div>
           
              <section className='ml-[110px] my-6 text-green-600'>
                <div className=' flex justify-between items-center mr-20'>
                 <div>
                 <p className="text-lg">Languages</p>
                 </div>
                 <Dropdown label="English" options={languages}/>
                </div>
              </section>
            <Line />
              <section className='ml-[110px] my-6 text-green-600'>
                <div className=' flex justify-between items-center mr-20'>
                 <div>
                 <p className="text-lg">Theme</p>
                 </div>
                 <Dropdown label="Light" options={themes} />
                </div>
              </section>
            <Line />
              <section className='ml-[110px] my-6 text-green-600'>
                <div className=' flex justify-between items-center mr-20'>
                 <div>
                 <p className="text-lg">Notifications</p>
                 </div>
                 <SlidingButton />
                </div>
              </section>
            <Line />
            </div>
              
           </div>
        </div>
        <Footer />
    </>
  )
}

export default Settings
