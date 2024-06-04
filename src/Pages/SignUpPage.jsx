import {React, useState} from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import SignInputBox from '../Components/SignInputBox'
import GreenButton from '../Components/GreenButton'
import WhiteButton from '../Components/WhiteButton'

const SignUpPage = () => {

  const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{2,23}$/;
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [lastName, setLastName] = useState('')
  const [otherNames, setOtherNames] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  //useState, regex, useEffect Friday

  const handleSignUp = async (event) => {
    event.preventDefault()

//saves the form data as an object in this format
    const formData = {
      username: username,
      email: email,
      password: password,
      lastName: lastName,
      otherNames: otherNames,
      phoneNumber: phoneNumber,
      dateOfBirth: dateOfBirth
    }

    const formDataString = JSON.stringify(formData)

//Saves the data in the local memory and console
    /*localStorage.setItem('FormData', formDataString)*/

    console.log('User Data:', formData)
//Sends a prompt to the user if the formData is properly saved
    /*alert("Success")*/

    /*The promise for the form sumbission*/ 
    try {
      const response = await fetch('https://www.pythonanywhere.com/user/daberko/webapps/#id_daberko_pythonanywhere_com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        const data = await response.json() // Analysing JSON response
        const { token } = data

        // Store JWT token in local storage
        localStorage.setItem('token', token)

        // Redirect to another page or do something else upon successful signup
        alert("User signed up successfully!")
    } else {
        // Handle error response
        let errorMessage
        try {
            const errorData = await response.json() // Analysing JSON error response
            errorMessage = errorData.message || 'Unknown error' //Error message from system
        } catch (error) {
            errorMessage = 'Error occurred while processing response'
        }
        alert("Error signing up: " + errorMessage)
    }
      } catch (error) {
        alert("Error signing up: " + error.message)
      }
  }

  //to toggle between the text state and the password state
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <>

    <div className="flex h-screen">
      <div className="hidden sm:hidden lg:flex items-start flex-col flex-grow"> 
        <img className='h-32 w-72 pl-8 pt-4' src="../Images/photo_2024-04-02_22-40-01.jpg" alt="Logo" />
        <img className='h-[80%] w-[100%]' src="./Images/SignInSignOutImage.png" alt="LoginPicture" />
      </div>
      <div>
        <div className='flex flex-grow w-[400px] lg:w-[750px] lg:rounded-tr-[1px] lg:rounded-br-[1px] rounded-tl-[65px] rounded-bl-[65px] rounded-tr-[65px] rounded-br-[65px] bg-green-200 flex-col items-center justify-between px-14'>
          <h1 className='text-green-700 text-5xl my-14 font-extrabold'>Sign Up</h1>
            <form onSubmit={handleSignUp}>            
              <div className='flex flex-row my-4 gap-24 text-lg'>
                <SignInputBox
                type="text" 
                placeholder="Last Name"
                width="w-[280px]"
                setValue={setLastName}
                />
                <SignInputBox
                type="text" 
                placeholder="Other Names"
                width="w-[280px]"
                setValue={setOtherNames}
                  />
              </div>
                <div className='my-4 gap-24 text-lg'>
                  <SignInputBox 
                  type="text"
                  placeholder="Username"
                  width="w-full"
                  validationRegex={USER_REGEX}
                  errorMessage="Username must be 3 or more characters"
                  setValue={setUsername}
                  />
                </div>
                <div className='my-4 gap-12 text-lg'>
                  <SignInputBox 
                  type="email"
                  placeholder="E-mail"
                  width="w-full"
                  validationRegex={EMAIL_REGEX}
                  errorMessage="Invalid Email"
                  setValue={setEmail}
                  />
                </div>
                <div className='flex flex-row my-4 gap-6 text-lg'>
                  <SignInputBox
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password"
                  width="w-[280px]"
                  validationRegex={PWD_REGEX}
                  errorMessage="Password more than 7 characters have '0-9' and '!@#$%'"
                  value={password}
                  setValue={setPassword}
                  />

                  <button type="button" 
                  onClick={togglePasswordVisibility}>
                    {showPassword ? "Hide" : "Show"}
                  </button> 
                  
                  <SignInputBox
                  type={showPassword ? "text" : "password"} 
                  placeholder="Confirm Password"
                  width="w-[280px]"
                  confirmedValue={password}
                  differentErrorMessage="Password does not match"
                  />
                </div>
                <div className='flex flex-row mt-4 mb-10 gap-24 text-lg'>
                  <SignInputBox
                  type="number" 
                  placeholder="Phone Number"
                  width="w-[280px]"
                  setValue={setPhoneNumber}
                  />
                  <SignInputBox
                  type="date" 
                  placeholder="Date of Birth"
                  width="w-[280px]"
                  setValue={setDateOfBirth}
                  />
                </div>
                
                <div>
                <p>Already have an account? <Link to='/SignInPage'>Sign In</Link></p>
                </div>

              
              <div className='flex flex-row gap-8 mx-24 my-8'>
                <button type="submit">                  
                  <GreenButton 
                  label="Sign Up"/>                  
                </button>

                <Link to='/'>
                <WhiteButton
                label="Homepage"/>
                </Link>
              </div>

            </form>
        </div>
      </div>
    </div>

    </>
  )
}

export default SignUpPage