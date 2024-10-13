import React from 'react'
import { useSelector } from 'react-redux';

const MovieDetails = () => {
  const trailerDetails = useSelector(store => store.nowPlayingMovies.trailerMovieDetails);

  if(!trailerDetails) return null;

  return (
    <div className='absolute top-20 pl-20 pt-40 index-2 text-white bg-gradient-to-r from-black bg-opacity-10'>
        <h1 className='text-5xl font-bold py-6'>{trailerDetails.original_title}</h1>
        <p className='w-1/3 font-semibold pb-6'>{trailerDetails.overview}</p>
        <div>
            <button className='bg-black text-white px-16 py-4 rounded-sm hover:opacity-80 mr-4'>Play</button>
            <button className='bg-gray-500 text-white px-12 py-4 rounded-sm hover:opacity-80'>More Info</button>
        </div>
    </div>
  )
}

export default MovieDetails;