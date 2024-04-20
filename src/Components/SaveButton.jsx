import React from 'react'

const SaveButton = ({ label }) => {
  return (
    <button className=" bg-white border-green text-green-600 px-3 rounded-xl  h-8">
        {label}
    </button>
  )
}

export default SaveButton