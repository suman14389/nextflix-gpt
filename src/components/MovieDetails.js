import React from 'react'
import { useSelector } from 'react-redux';

const MovieDetails = () => {
  const trailerDetails = useSelector(store => store.nowPlayingMovies.trailerMovieDetails);

  if(!trailerDetails) return null;

  return (
    <div className='absolute md:pl-16 pl-1 md:pt-52 pt-[47%] text-white'>
        <h1 className='md:text-5xl text-xl md:font-bold font-semibold md:py-6 py-2'>{trailerDetails.original_title}</h1>
        <p className='md:w-1/3 w-full font-semibold pb-6 hidden md:block'>{trailerDetails.overview}</p>
        <div className='flex gap-4'>
            <button className='bg-white text-black md:px-16 md:py-4 px-6 py-1 rounded-sm hover:opacity-80 mr-4'> ▶️ Play</button>
            <button className='bg-gray-500 text-white px-12 py-4 rounded-sm hover:opacity-80 hidden md:block'>More Info</button>
        </div>
    </div>
  )
}

export default MovieDetails;