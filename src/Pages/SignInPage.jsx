import React from 'react'
import SignBox from '../Components/SignBox'

const SignInPage = () => {
  return (
    <>
    <div>
    <img className='h-32 w-72 pl-8 pt-4' src="../Images/photo_2024-04-02_22-40-01.jpg"/>
    <div className='flex'>
    <img className='h-[100%] w-[55%]' src="./Images/SignInSignOutImage.png"/>
    <div className='flex flex-grow'>
    <SignBox />
    </div>
    </div>
    </div>
    </>
  )
}

export default SignInPage