import React from 'react'
import SignInputBox from './SignInputBox'
import GreenButton from './GreenButton'
import WhiteButton from './WhiteButton'

const SignUpForm = () => {
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
              />
            </div>
            <div className='my-4 gap-12 text-lg'>
              <SignInputBox 
              type="email"
              placeholder="E-mail"
              width="w-[609px]"
              />
            </div>
            <div className='flex flex-row my-4 gap-12 text-lg'>
              <SignInputBox
              type="password" 
              placeholder="Password"
              width="w-[280px]"
              />
              <SignInputBox
              type="password" 
              placeholder="Confirm Password"
              width="w-[280px]"
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