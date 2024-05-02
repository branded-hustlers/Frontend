import {React, useState} from 'react'
import { Link } from 'react-router-dom';
import SignInputBox from '../Components/SignInputBox'
import GreenButton from '../Components/GreenButton'
import WhiteButton from '../Components/WhiteButton'

const SignUpPage = () => {

  const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{2,23}$/;
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
//read on regex
  const [password, setPassword] = useState('');

  return (
    <>

    <div className="flex h-screen">
      <div className="flex items-start flex-col flex-grow"> {/* Ensure this div expands to fill available space */}
        <img className='h-32 w-72 pl-8 pt-4' src="../Images/photo_2024-04-02_22-40-01.jpg" alt="Logo" />
        <img className='h-[80%] w-[100%]' src="./Images/SignInSignOutImage.png" alt="LoginPicture" />
      </div>
      <div>
        <div className='flex flex-grow w-[750px] rounded-tl-[65px] rounded-bl-[65px] bg-green-200 flex-col items-center justify-between px-14'>
          <h1 className='text-green-700 text-5xl my-14 font-extrabold'>Sign Up</h1>
            <form>            
              <div className='flex flex-row my-4 gap-12 text-lg'>
                <SignInputBox
                type="text" 
                placeholder="Last Name"
                width="w-[280px]"
                />
                  
                <SignInputBox
                type="text" 
                placeholder="Other Names"
                width="w-[280px]"
                  />
              </div>
                <div className='my-4 gap-12 text-lg'>
                  <SignInputBox 
                  type="text"
                  placeholder="Username"
                  width="w-[609px]"
                  validationRegex={USER_REGEX}
                  errorMessage="Username must be 3 or more characters"
                  />
                </div>
                <div className='my-4 gap-12 text-lg'>
                  <SignInputBox 
                  type="email"
                  placeholder="E-mail"
                  width="w-[609px]"
                  validationRegex={EMAIL_REGEX}
                  errorMessage="Invalid Email"
                  />
                </div>
                <div className='flex flex-row my-4 gap-12 text-lg'>
                  <SignInputBox
                  type="password" 
                  placeholder="Password"
                  width="w-[280px]"
                  validationRegex={PWD_REGEX}
                  errorMessage="Password more than 7 characters have '0-9' and '!@#$%'"
                  value={password}
                  setValue={setPassword}
                  />
                  <SignInputBox
                  type="password" 
                  placeholder="Confirm Password"
                  width="w-[280px]"
                  confirmedValue={password}
                  differentErrorMessage="Password does not match"
                  />
                </div>
                <div className='flex flex-row mt-4 mb-10 gap-12 text-lg'>
                  <SignInputBox
                  type="number" 
                  placeholder="Phone Number"
                  width="w-[280px]"
                  />
                  <SignInputBox
                  type="date" 
                  placeholder="Date of Birth"
                  width="w-[280px]"
                  />
                </div>
                
                <div>
                <p>Already have an account? <Link to='./Pages/SignUpPage'>Sign In</Link></p>
                </div>

              </form>
              
              <div className='flex flex-row gap-8 my-8'>
                <GreenButton 
                label="Sign Up"/>

                <WhiteButton
                label="Homepage"/>
              </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default SignUpPage