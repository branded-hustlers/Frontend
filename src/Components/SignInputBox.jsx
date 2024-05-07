import React, { useState, useEffect } from 'react';

/*const SignInputBox = ({ type, placeholder, width, value, requirement, warning }) => {
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


/*const SignInputBox = ({type, placeholder, width}) => {
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

export default SignInputBox*/ 


/*const SignInputBox = ({ type, placeholder, width, validationRegex, errorMessage, value, setValue, confirmedValue }) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [isValid, setIsValid] = useState(true);
  const [confirmError, setConfirmError] = useState(false);

  useEffect(() => {
    // Check confirmation only if confirmedValue is provided
    if (confirmedValue !== undefined) {
      setConfirmError(inputValue !== confirmedValue);
    } else {
      setConfirmError(false);
    }
  }, [inputValue, confirmedValue]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (validationRegex) {
      validateInput(newValue);
    }
    if (setValue) {
      setValue(newValue); // Update the password state in the parent component
    }
  };

  const validateInput = (value) => {
    setIsValid(validationRegex.test(value));
  };

  const overallValidity = validationRegex ? (isValid && !confirmError) : !confirmError;
  const showError = inputValue !== '' && !overallValidity; // Show error only if input is not empty and overallValidity is false

  return (
    <div>
      <input 
        type={type}
        required
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={`bg-transparent border-b-2 outline-none border-${overallValidity ? 'green' : 'red'}-600 h-14 contain placeholder:text-green-700 ${width}`}
      />
      {showError && <p className="text-red-300 text-xs">{confirmError ? "Different password" : errorMessage}</p>}
    </div>
  );
};

export default SignInputBox;*/

const SignInputBox = ({ type, placeholder, width, validationRegex, errorMessage, value, setValue, confirmedValue, differentErrorMessage }) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [isValid, setIsValid] = useState(true);
  const [confirmError, setConfirmError] = useState(false);

  useEffect(() => {
    // Check confirmation only if confirmedValue is provided and inputValue is not empty
    if (confirmedValue !== undefined && inputValue !== '') {
      setConfirmError(inputValue !== confirmedValue);
    } //if the confirmed value prop is undefined and if the input value is not empty
     else {
      setConfirmError(false); // Reset confirmError if input field is empty
    }
  }, [inputValue, confirmedValue]);

  // Handle changes in the input
  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (validationRegex) {
      validateInput(newValue);
    } //Validates the new input based on the requirements if validationRegex is provided
    if (setValue) {
      setValue(newValue); // Update the password state in the parent component
    }
  };

  const validateInput = (value) => {
    setIsValid(validationRegex.test(value));
  }; //Updates isValid state based on validation result

  const overallValidity = validationRegex ? (isValid && !confirmError) : !confirmError;
  const showError = inputValue !== '' && !overallValidity; // Show error only if input is not empty and overallValidity is false

  return (
    <div>
      <input 
        type={type}
        required
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={` border-b-2 ${overallValidity ? ' placeholder:text-green-700 border-green-600 bg-transparent' : 'placeholder:text-red-500 border-red-400 bg-red-300 bg-opacity-20'} outline-none h-14 contain sm:max-w-[150px] ${width}`}
      />
      {showError && <p className="text-red-300 text-xs">{confirmError ? differentErrorMessage : errorMessage}</p>}
    </div>
  );
};

export default SignInputBox;