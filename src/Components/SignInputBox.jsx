import React, { useState } from 'react';

/*const SignBox = ({ type, placeholder, width, value, requirement, warning }) => {
  // State to manage the input value
  const [inputValue, setInputValue] = useState(value || '');

  // Function to handle input change
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to check requirement
  const checkRequirement = () => {
    if (requirement) {
      return requirement(inputValue);
    }
    return true; // If no requirement provided, always return true
  };

  return (
    <div>
      <input 
        type={type}
        required
        value={inputValue}
        onChange={handleChange} // Handle input change
        placeholder={placeholder}
        className={`bg-transparent border-b-2 outline-none border-green-600 contain placeholder:text-green-700 ${width}`}
      />
      {!checkRequirement() && <p className="text-red-500">{warning}</p>}
    </div>
  )
}

export default SignBox*/



const SignInputBox = ({type, placeholder, width}) => {
  return (
    <div>
      <input 
      type={type}
      required
      placeholder={placeholder}
      className={`bg-transparent border-b-2 outline-none border-green-600 h-[55px] contain placeholder:text-green-700 ${width}`}
      />
    </div>
  )
}

export default SignInputBox