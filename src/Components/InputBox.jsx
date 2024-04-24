import { useState } from 'react';

const InputBox = ({ placeholder, type }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={handleChange}
        className="py-2 px-5 m-4 text-green-700 border border-green-500 rounded-full lg:w-[450px] focus:outline-none relative sm:w-[180px] md:w-[300px]"
      />
      <label
        className={`absolute top-6 left-6 transition-all duration-300 px-3 ${
          value ? 'top-1 text-green-700 text-xs' : 'top-2 text-green-600'
        }`}
        style={{ top: value ? '0.9rem' : '1rem' }}
      >
        {placeholder}
      </label>
    </div>
  )
}

export default InputBox;
