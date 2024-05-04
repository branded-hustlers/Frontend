import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import SignInputBox from '../Components/SignInputBox'
import GreenButton from '../Components/GreenButton'
import WhiteButton from '../Components/WhiteButton'

const SignInPage = () => {

  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <>

    <div className="flex h-screen">
      <div className="flex items-start flex-col flex-grow"> {/* Ensure this div expands to fill available space */}
        <img className='h-32 w-72 pl-8 pt-4' src="../Images/photo_2024-04-02_22-40-01.jpg" alt="Logo" />
        <img className='h-[80%] w-[100%]' src="./Images/SignInSignOutImage.png" alt="LoginPicture" />
      </div>
      <div>
        <div className='flex flex-grow w-[750px] rounded-tl-[65px] rounded-bl-[65px] bg-green-200 flex-col items-center justify-between px-14'>
        <h1 className='text-green-700 text-5xl mt-24 mb-16 font-extrabold'>Sign In</h1>
            <form>            
          
            <div className='mt-10 mb-12 text-lg'>
              <SignInputBox 
              type="text"
              placeholder="Username or Email"
              width="w-[609px]"
              />
            </div>
            <div className='my-12 text-lg'>
              <SignInputBox 
              type="password"
              placeholder="Password"
              width="w-[609px]"
              validationRegex={PWD_REGEX}
              errorMessage="Password more than 7 characters have '0-9' and '!@#$%'"
              />
            </div>

            <div className='my-8 text-green-800 flex'>
            <p>Don't have an account? <Link to='./SignUpPage'>Sign Up</Link></p>
            <p className='ml-52'> 
              <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className='mr-2'
              /> 
              Remember Me</p>
            </div>

          </form>
          
          <div className='flex flex-row gap-8 mt-8 mb-12'>
            <GreenButton 
            label="Sign In"/>

            <WhiteButton
            label="Homepage"/>
          </div>
        </div>
      </div>
    </div>
    </>
  )

}

export default SignInPage