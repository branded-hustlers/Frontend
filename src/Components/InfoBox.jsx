import React from 'react'
import PropTypes from 'prop-types'

const InfoBox = ({heading, textContent}) => {
  return (
    <div>
      <div className=" px-32 flex justify-center items-center ml-20 my-16">
          <div className="border-2 border-green-600 w-[27rem]  h-32 rounded-xl p-6">
            <h1 className=" text-green-700 font-semibold text-xl ">
              {heading}
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
}

export default InfoBox