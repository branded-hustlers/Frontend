import {React, useState} from 'react'
import { Link } from 'react-router-dom';
import SignInputBox from '../Components/SignInputBox'
import GreenButton from '../Components/GreenButton'
import WhiteButton from '../Components/WhiteButton'

const SignUpPage = () => {

  const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{2,23}$/;
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [lastName, setLastName] = useState('');
  const [otherNames, setOtherNames] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (event) => {
    event.preventDefault();

    const formData = {
      username: username,
      email: email,
      password: password,
      lastName: lastName,
      otherNames: otherNames,
      phoneNumber: phoneNumber,
      dateOfBirth: dateOfBirth
    };
  
    console.log('User Data:', formData);

    alert("Success")

    //Link is where the api link will go
    
    /*
    try {
      const response = await fetch('{Link}', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        const { token } = data;

        // Store JWT token in local storage
        localStorage.setItem('token', token);

        // Redirect to another page or do something else upon successful signup
        console.log('User signed up successfully!');
      } else {
        // Handle error response
        console.error('Error signing up:', response.statusText);
      }
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
    */
  };


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
              <div className='flex flex-row my-4 gap-12 text-lg'>
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
                <div className='my-4 gap-12 text-lg'>
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