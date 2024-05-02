import React, { useState } from 'react';
import SignInputBox from './SignInputBox'
import GreenButton from './GreenButton'
import WhiteButton from './WhiteButton'

const SignUpForm = () => {

  const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{2,23}$/;
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
//read on regex
  const [password, setPassword] = useState('');

  return (
    <>
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
            <p>Already have an account? Sign In</p>
            </div>

          </form>
          
          <div className='flex flex-row gap-8 my-8'>
            <GreenButton 
            label="Sign Up"/>

            <WhiteButton
            label="Homepage"/>
          </div>
    </>
  )
}

export default SignUpForm