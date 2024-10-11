import React from 'react'
import Header from './Header'
import { NETFLIX_BG } from '../utils/Constant'
import { useState, useEffect } from 'react'
import { isValidSignInCredentials } from '../utils/signin-validation'
import {auth} from "../utils/Firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { signInUser, updateUserNameandPhotoUrl } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  }

  const callDispatchUser = (response) => {
    dispatch(signInUser({email: response.user.email, displayName: response.user.displayName, photoURL: response.user.photoURL}));
  }

  const updateUserProfile = (response) => {
    dispatch(updateUserNameandPhotoUrl({displayName: 'suman', photoURL: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRLsgY2CSjie-wnde1gUPNDi5_B_NZ4zBiUon_dKILwbR5TljE5L_cKi8TFF8Yl6qGzQIrvt1cWr2byRYmAyd6M7bAp7xLGj5pq_Z04h8U'}));
  }

  const handleUserSignInOrSignUp = async () => {
    if(!isSignInForm){
      try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
        callDispatchUser(response);
        updateUserProfile(response);
        navigate('/Browse');
      } catch (error) {
        setErrorMessage(error.message);
      }
    } else {
      try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log("res", response);
        callDispatchUser(response);
        updateUserProfile(response);
        navigate('/Browse');
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
  }

  const handleSignInClick = () => {

    const validationMessage = isValidSignInCredentials(email, password);

    if(validationMessage) {
      setErrorMessage(validationMessage);
      return;
    }

    handleUserSignInOrSignUp();
    
  }

  useEffect(() => {
    setErrorMessage(null);
  }, [email, password, fullName])

  return (
    <div className='position-relative min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${NETFLIX_BG})` }}>
        <Header />
        <form className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/12 bg-black/70 py-10 px-16 text-white flex flex-col gap-7' onSubmit={(e) => e.preventDefault()}>

            <h1 className='text-3xl font-bold'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
            <input type="email" placeholder='Email or phone number' className='px-4 py-3 rounded-sm bg-gray-700' value={email} onChange={(e) => setEmail(e.target.value)} />

            {
              !isSignInForm && (
                <input type="text" placeholder='Full Name' className='px-4 py-3 rounded-sm bg-gray-700' value={fullName} onChange={(e) => setFullName(e.target.value)} />
              )
            }

            <input type="password" placeholder='Password' className='px-4 py-3 rounded-sm bg-gray-700' value={password} onChange={(e) => setPassword(e.target.value)} />

            <p className='text-red-500 text-sm font-bold'>{errorMessage}</p>

            <button className='bg-red-600 py-2 rounded-sm font-bold hover:bg-red-700 hover:scale-103 transition-transform duration-200' onClick={handleSignInClick}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>

            <p className='text-gray-400'> {isSignInForm ? 'New to Netflix?' : 'Already have an account?'} <span className="cursor-pointer text-white hover:underline" onClick={handleToggleSignIn}>{isSignInForm ? 'Sign up now.' : 'Sign in.'}</span></p>
        </form>
    </div>
  )
}

export default Login