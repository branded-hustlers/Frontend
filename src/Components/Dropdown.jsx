import React from 'react'
import { useState } from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Dropdown({ label, options }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="px-4 py-2 text-green-600 bg-gray-50 rounded focus:outline-none focus:bg-gray-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption : label}
        <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
        
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border rounded shadow-lg">
          {options.map((option, index) => (
            <button
              key={index}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
