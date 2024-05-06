import React from 'react'
import Navbar from '../Layouts/Navbar'
import Footer from '../Sections/Footer'
import Sidebar from '../Layouts/Sidebar'
import InfoDropdown from '../Components/InfoDropdown'
import GreenButton from '../Components/GreenButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const HelpFeedbackPage = () => {
  return (
    <>
        <Navbar />
        <div className="flex">
          <Sidebar />        
          <div className="flex-grow mx-12">
            <div>
              <h1 className="text-green-600 text-center text-4xl mb-16">Feedback and Support</h1>
              <div>
                <h1 className="text-green-600 text-3xl mb-2">Feedback</h1>
                <form className='flex flex-col'>
                    <label className='text-green-600 text-lg my-2'>Subject (Optional)</label>
                        <input
                        type="text"
                        placeholder=""
                        className=' px-6 h-[40px] border-2 border-green-600 rounded-[15px] mb-2 placeholder:text-green-500 outline-none'
                        />

                    <label className='text-green-600 text-lg my-2'>Comments</label>
                        <input
                        type="text"
                        placeholder='Let us know what you think :)' 
                        className='px-6 pt-[1.5rem] border-2 h-[200px] border-green-600 rounded-[15px] mb-8 placeholder:text-green-500 outline-none'/>
                </form>

                <GreenButton
                label='Submit'/>                  
              </div>
              <div>
                <h1 className="text-green-600 text-3xl mt-20">Frequesntly Asked Questions (FAQ) </h1>
                <div className='my-10'>
                  <InfoDropdown
                  title="• How do I place an order"
                  content="It did workc ncjabvcouan ncahcbouc bcahbcaojnda bdcaojcbaojb"
                  />
                  <InfoDropdown
                  title="• Who are the couriers?"
                  content="Couriers are independent professionals connected to our platform. With eagerness as fuel to their vehicles, they help you with your tasks as quickly and as effectively as possible. {*Space*} Want to be a courier? Great! Kindly fill out this form and we’ll get back to you:(insert link)"
                  />
                  <InfoDropdown 
                  title="• How is delivery cost calculated?"
                  content="nkdnkasnc aomomosmd oannsnd isdnsnsi soandsondson aosndonoasndand"
                  />
                  <InfoDropdown 
                  title="• How is delivery cost calculated?"
                  content="nkdnkasnc aomomosmd oannsnd isdnsnsi soandsondson aosndonoasndand"
                  />
                </div>
              </div>

              <div className='text-green-700 text-lg my-8'>
                <p>If you require any additinal service, please send an email to essentiailes.support@gmail.com</p>
                <br />
                <p>You will recieve a reply within 1-2 working days. Thank you for your patronage :0</p>
              </div>
              
            </div>
           </div>
        </div>
        <Footer />
      </>
  )
}

export default HelpFeedbackPage