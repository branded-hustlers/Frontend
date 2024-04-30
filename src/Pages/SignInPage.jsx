import React from 'react';
import SignUpForm from '../Components/SignUpForm'

const SignInPage = () => {
  return (
    <div className="flex h-screen">
      <div className="flex items-start flex-col flex-grow"> {/* Ensure this div expands to fill available space */}
        <img className='h-32 w-72 pl-8 pt-4' src="../Images/photo_2024-04-02_22-40-01.jpg" alt="Logo" />
        <img className='h-[80%] w-[100%]' src="./Images/SignInSignOutImage.png" alt="LoginPicture" />
      </div>
      <div>
        <div className='flex flex-grow w-[750px] rounded-tl-[65px] rounded-bl-[65px] bg-green-200 flex-col items-center justify-between px-14'>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
