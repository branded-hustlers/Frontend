import React, { useState } from 'react';

function SlidingButton() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <label className={`relative mx-6 my-2 inline-block w-14 h-6 rounded-full cursor-pointer ${isActive ? 'bg-green-400' : 'bg-gray-200'}`}>
      <input
        type="checkbox"
        className="appearance-none w-0 h-0 opacity-0"
        checked={isActive}
        onChange={toggleActive}
      />
      {!isActive && (
        <span className="absolute left-0 inline-block w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-800 ease-in-out">
          <span className="absolute top-0 right-0 inline-block w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-800 ease-in-out translate-x-0"></span>
        </span>
      )}
      {isActive && (
        <span className="absolute top-0 right-0 inline-block w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-800 ease-in-out translate-x-1"></span>
      )}
    </label>
  );
}

export default SlidingButton;
