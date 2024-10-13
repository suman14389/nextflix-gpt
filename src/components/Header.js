import React from 'react'
import { NETFLIX_LOGO } from '../utils/Constants'
import { useSelector } from 'react-redux'
import { signOutUser } from '../storeSlices/userSlice'
import { useDispatch } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/Firebase'
import { useNavigate } from 'react-router-dom'
import useGetNowPlayingMovies from '../CustomHooks/useGetNowPlayingMovies'

const Header = () => {

  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();


  // this can be replace by onAuthStateChanged from firebase
  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(signOutUser());
      navigate('/');
    }).catch((error) => {
        alert(error.message);
    });
  }

  useGetNowPlayingMovies();

  return (
    <div className='absolute w-full h-24 bg-gradient-to-b from-black flex justify-between items-start'>
        <img src={NETFLIX_LOGO} alt="Netflix-logo" className='w-800 h-20' />
        <div>
          {user.displayName && <div className='flex items-center gap-4 px-4'>
            <img src={user.photoURL} alt="user-profile" className='w-12 h-12 object-cover rounded-full ' />
            <div>
              <p className='text-white text-lg font-semibold'>{user.displayName}</p>
              <span className='text-black text-sm hover:underline cursor-pointer' onClick={handleSignOut}>Sign out</span>
            </div>
          </div> }
        </div>
    </div>
  )
}

export default Header