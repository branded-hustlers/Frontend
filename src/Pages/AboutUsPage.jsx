import React from 'react'
import Navbar from '../Layouts/Navbar'
import Footer from '../Sections/Footer'
import FeatureBox from '../Components/FeatureBox'
import InfoBox from '../Components/InfoBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faPhone, faCogs } from '@fortawesome/free-solid-svg-icons'

const AboutUsPage = () => {
  return (
    <>
     <Navbar />
     <h1 className="text-green-700 text-center text-4xl mb-6">AboutUs</h1>
     <div>
     </div>
     <FeatureBox
        imageSrc="./public/Images/AboutUsImages/OurHistory.png"
        altText="Histroy"
        textContent="Explore our comprehensive grocery management system designed to streamline inventory management, optimize supply chain logistics, and enhance customer experience through user-friendly interfaces and robust features "
        imagePosition="right"
        heading="Our History"
      />
      <FeatureBox
        imageSrc="./public/Images/AboutUsImages/OurService.jpeg"
        altText="Services"
        textContent="Founded by a team of passionate students, our journey began with a vision to revolutionize grocery management systems. Over the years, we have evolved through relentless innovation, collaborative efforts, and a commitment to excellence, striving to meet the evolving needs of the retail industry "
        imagePosition="left"
        heading="Our Services"
      />
      <div className='flex flex-row gap-4'>
      <InfoBox
      heading="Location"
      textContent="Pantang Junction, Adom Close, House No. 1"
      />
      <InfoBox
      heading="Contact"
      textContent="For more enquiries, call 0500872524"
      icons={[faCogs, faPhone, faPhone]}
      />
      </div>
      
     <Footer />
    </>
  )
}

export default AboutUsPage
