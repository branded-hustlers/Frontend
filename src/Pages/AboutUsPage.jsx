import React from 'react'
import Navbar from '../Layouts/Navbar'
import Footer from '../Sections/Footer'
import FeatureBox from '../Components/FeatureBox'

const AboutUsPage = () => {
  return (
    <>
     <Navbar />
     <h1 className="text-green-700 text-center text-4xl mb-6">AboutUs</h1>
     <div>
     </div>
     <FeatureBox
        imageSrc="./Public/Images/ProductImages/Beetroot.png"
        altText="Beetroot"
        textContent="Pdew mf dw,snckdwnjcecenwdewj kcnede wdkewn djkewd fewdcew ew ewjk ewjke dwjk ndsjkdw ew kjdewc dcdc ec enenefreh rekjn efjkek cece her eer creerndf whfbr vjdhbwe dxcdscnd scnjkdcnwdjck ndjncdjc ndjckdn sjc dcdncjknewjnewcd . ejkne ferj ej e ec ernernfe erjf ekjf erj erfnre kre fkjr frefre fref ree "
        imagePosition="right"
        heading="Our History"
      />
      <FeatureBox
        imageSrc="./Public/Images/ProductImages/Coke.png"
        altText="Coke"
        textContent="Pdew mf dw,snckdwnjcecenwdewj kcnede wdkewn djkewd fewdcew ew ewjk ewjke dwjk ndsjkdw ew kjdewc dcdc ec enenefreh rekjn efjkek cece her eer creerndf whfbr vjdhbwe dxcdscnd scnjkdcnwdjck ndjncdjc ndjckdn sjc dcdncjknewjnewcd . ejkne ferj ej e ec ernernfe erjf ekjf erj erfnre kre fkjr frefre fref ree "
        imagePosition="left"
        heading="Our Services"
      />
      <div>
        Location box
      </div>
      <div> 
        Contact Us Box
      </div>
     <Footer />
    </>
  )
}

export default AboutUsPage