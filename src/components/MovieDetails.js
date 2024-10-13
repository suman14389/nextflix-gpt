import React from 'react'
import { useSelector } from 'react-redux';

const MovieDetails = () => {
  const trailerDetails = useSelector(store => store.nowPlayingMovies.trailerMovieDetails);

  if(!trailerDetails) return null;

  return (
    <div className='absolute pl-16 pt-52 text-white'>
        <h1 className='text-5xl font-bold py-6'>{trailerDetails.original_title}</h1>
        <p className='w-1/3 font-semibold pb-6'>{trailerDetails.overview}</p>
        <div>
            <button className='bg-white text-black px-16 py-4 rounded-sm hover:opacity-80 mr-4'> ▶️ Play</button>
            <button className='bg-gray-500 text-white px-12 py-4 rounded-sm hover:opacity-80'>More Info</button>
        </div>
    </div>
  )
}

export default MovieDetails;