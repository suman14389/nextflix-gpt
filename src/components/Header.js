import React from 'react'
import { NETFLIX_LOGO } from '../utils/Constant'

const Header = () => {
  return (
    <div className='absolute w-full h-20 bg-gradient-to-b from-black'>
        <img src={NETFLIX_LOGO} alt="Netflix-logo" className='w-800 h-full' />
    </div>
  )
}

export default Header