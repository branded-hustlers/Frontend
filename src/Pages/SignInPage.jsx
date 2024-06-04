import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import SignInputBox from '../Components/SignInputBox'
import GreenButton from '../Components/GreenButton'
import WhiteButton from '../Components/WhiteButton'

const SignInPage = () => {

  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const [isChecked, setIsChecked] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSignIn = async (event) => {
    event.preventDefault()

  const signInData = {
    username: username,
    email: email,
    password: password,
  };

  const signInDataString = JSON.stringify(signInData)

//Saves the data in the local memory and console
    localStorage.setItem('signInData', signInDataString);

    console.log('User Data:', signInData);
//Sends a prompt to the user if the formData is properly saved
    alert("Success")

}

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <>

    <div className="flex h-screen">
      <div className="hidden sm:hidden lg:flex items-start flex-col flex-grow"> {/* Ensure this div expands to fill available space */}
        <img className='h-32 w-72 pl-8 pt-4' src="../Images/photo_2024-04-02_22-40-01.jpg" alt="Logo" />
        <img className='h-[80%] w-[100%]' src="./Images/SignInSignOutImage.png" alt="LoginPicture" />
      </div>
      <div>
        <div className='flex flex-grow w-[400px] lg:w-[750px] lg:rounded-tr-[1px] lg:rounded-br-[1px] rounded-tl-[65px] rounded-bl-[65px] rounded-tr-[65px] rounded-br-[65px] bg-green-200 flex-col items-center justify-between px-14'>
        <h1 className='text-green-700 text-4xl lg:text-5xl mt-24 mb-16 font-extrabold'>Sign In</h1>
            <form onSubmit={handleSignIn}>            

            <div className='mt-10 mb-16 lg:text-lg'>
              <SignInputBox 
              type="text"
              placeholder="Username or Email"
              width="w-full"
              setValue={setUsername}
              />
            </div>
            <div className='my-16 lg:text-lg'>
              <SignInputBox 
              type="password"
              placeholder="Password"
              width="w-full"
              validationRegex={PWD_REGEX}
              errorMessage="Password is incorrect"
              setValue={setPassword}
              />
            </div>

            <div className='text-sm lg:text-lg my-8 text-green-800 flex'>
            <p>Don't have an account? <Link to='/SignUpPage'>Sign Up</Link></p>
            <p className='ml-12 lg:ml-32'> 
              <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className='mr-2'
              /> 
              Remember Me</p>
            </div>

            <div className='flex flex-row gap-8 mt-8 mb-12'>

              <button type="submit">
                Tester
              </button>

            <Link to="/PersonalInformationPage">
              <GreenButton 
              label="Sign In"/>
            </Link>

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

export default SignInPage