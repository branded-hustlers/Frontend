import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const InfoDropdown = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="sm:w-[300px] md:w-[500px] lg:w-[850px] rounded overflow-hidden my-4">
      <div className="bg-white py-3 flex justify-between items-center cursor-pointer" onClick={toggleDropdown}>
        <span className="text-green-700 text-xl">{title}</span>
        <FontAwesomeIcon icon={isActive ? faChevronUp : faChevronDown} className="text-gray-600" />
      </div>
      {isActive && (
        <div className="dropdown-content text-green-800 bg-green-200 bg-opacity-50 p-4 mt-4 text-lg rounded-[20px]">
          {content}
        </div>
      )}
    </div>
  );
};

export default InfoDropdown;
