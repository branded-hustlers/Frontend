import React from 'react'
import SignInputBox from './SignInputBox'
import GreenButton from './GreenButton'
import WhiteButton from './WhiteButton'

const SignInForm = () => {

  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  return (
    <>
    <h1 className='text-green-700 text-5xl my-14 font-extrabold'>Sign Up</h1>
      <form>            
          
            <div className='my-4 gap-12 text-lg'>
              <SignInputBox 
              type="text"
              placeholder="Username or Email"
              width="w-[609px]"
              />
            </div>
            <div className='my-4 gap-12 text-lg'>
              <SignInputBox 
              type="password"
              placeholder="password"
              width="w-[609px]"
              validationRegex={PWD_REGEX}
              errorMessage="Password more than 7 characters have '0-9' and '!@#$%'"
              />
            </div>
            <div>
            <p>Don't have an account? Sign Up</p>
            </div>

          </form>
          
          <div className='flex flex-row gap-8 my-8'>
            <GreenButton 
            label="Sign In"/>

            <WhiteButton
            label="Homepage"/>
          </div>
    </>
  )

}

export default SignInForm