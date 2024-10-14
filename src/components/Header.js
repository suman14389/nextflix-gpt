import React, { useEffect } from 'react'
import { NETFLIX_LOGO } from '../utils/Constants'
import { useSelector } from 'react-redux'
import { signOutUser, signInUser } from '../storeSlices/userSlice'
import { useDispatch } from 'react-redux'
import { signOut,  onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/Firebase'
import { useLocation, useNavigate } from 'react-router-dom'
import useGetNowPlayingMovies from '../CustomHooks/useGetNowPlayingMovies'
import { USER_PHOTO_URL } from '../utils/Constants'
import { Link } from 'react-router-dom'
import { toggleGptPage } from '../storeSlices/GptSlice'

const Header = () => {

  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleToggleGptPage = () => {
    dispatch(toggleGptPage());
  }
  const gpt = useSelector((store) => store.gpt);

  const params = useLocation();
  if(params.pathname === "/gpt" && !gpt.isGptPage ) {
     dispatch(toggleGptPage());
  }


  // this can be replace by onAuthStateChanged from firebase
  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(signOutUser());
      navigate('/');
    }).catch((error) => {
        alert(error.message);
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        dispatch(signInUser({
          uid: user.uid,
          email: user.email,
          displayName: 'suman',
          photoURL: USER_PHOTO_URL
        }));
      } else {
        // User is signed out
        dispatch(signOutUser());
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  useGetNowPlayingMovies();

  return (
    <div className='absolute w-full md:h-24 h-16 bg-gradient-to-b from-black flex justify-between items-start z-10'>
        <img src={NETFLIX_LOGO} alt="Netflix-logo" className='md:w-48 w-36 h-20' />
        <div className='md:p-2 md:pt-4 pt-7'>
          {user.email && <div className='flex items-center gap-4 md:px-4 px-2'>
            <Link to={gpt.isGptPage ? "/browse" : "/gpt"}>
              <button className='text-white bg-purple-500 text-md font-semibold md:px-4 md:py-2 px-2 py-0 rounded-md cursor-pointer' onClick={handleToggleGptPage}>
                {gpt.isGptPage ? "Home" : "GPT Search"}
              </button>
            </Link>
            <img src={user.photoURL} alt="user-profile" className='w-12 h-10 object-cover rounded-full hidden md:block' />
            <div>
              <p className='text-white text-lg font-semibold hidden md:block'>{user.displayName}</p>
              <span className='text-white text-sm hover:underline cursor-pointer' onClick={handleSignOut}>Sign out</span>
            </div>
          </div> }
        </div>
    </div>
  )
}

export default Header