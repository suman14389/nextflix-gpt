import React from 'react'
import { NETFLIX_LOGO } from '../utils/Constant'
import { useSelector } from 'react-redux'
import { signOutUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/Firebase'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  console.log(user);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(signOutUser());
      navigate('/');
    }).catch((error) => {
        alert(error.message);
    });
    
  }
  return (
    <div className='absolute w-full h-20 bg-gradient-to-b from-black flex justify-between items-center'>
        <img src={NETFLIX_LOGO} alt="Netflix-logo" className='w-800 h-full' />
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