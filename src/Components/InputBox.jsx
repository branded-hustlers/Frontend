import { useState } from 'react';

const InputBox = ({ placeholder, type }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={handleChange}
        className="py-2 px-4 m-4 text-green-600 border border-green-500 rounded-full w-[300px] focus:outline-none"
      />
      <label
        className={`absolute top-6 left-6 transition-all duration-300 px-3 ${
          value ? '-top-2 text-green-600' : 'top-2 text-green-400'
        }`}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default InputBox;
