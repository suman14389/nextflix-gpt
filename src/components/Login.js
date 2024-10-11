import React from 'react'
import Header from './Header'
import { NETFLIX_BG } from '../utils/Constant'

const Login = () => {
  return (
    <div className='position-relative min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${NETFLIX_BG})` }}>
        <Header />
        <form className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/12 bg-black/70 py-10 px-16 text-white flex flex-col gap-7'>

            <h1 className='text-3xl font-bold'>Sign In</h1>
            <input type="email" placeholder='Email or phone number' className='px-4 py-3 rounded-sm bg-gray-700' />

            <input type="password" placeholder='Password' className='px-4 py-3 rounded-sm bg-gray-700'/>

            <button className='bg-red-600 py-2 rounded-sm font-bold hover:bg-red-700 hover:scale-103 transition-transform duration-200'>Sign In</button>
        </form>
    </div>
  )
}

export default Login