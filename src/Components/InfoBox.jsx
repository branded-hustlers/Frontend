import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faPhone, faCogs } from '@fortawesome/free-solid-svg-icons'

const InfoBox = ({heading, textContent, icons}) => {
  return (
    <div>
      <div className=" px-24 flex justify-center items-center ml-24 my-16">
          <div className="border-2 border-green-600 w-[27rem]  h-32 rounded-xl p-6">
            <h1 className=" text-green-700 font-semibold text-xl ">
              {heading}
              {icons && icons.map((icon, index) => (
               <FontAwesomeIcon key={index} icon={icon} className="mx-6" />
               ))}
            </h1>
            <p className=" mt-1 text-green-900">
              {textContent}
            </p>
          </div>
        </div>
    </div>
  )
}

InfoBox.propTypes = {
  heading: PropTypes.node.isRequired,
  textContent: PropTypes.node.isRequired,
  icons: PropTypes.arrayOf(PropTypes.object),
}

export default InfoBox