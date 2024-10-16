import React from 'react'
import MovieCard from './MovieCard'
import { MOVIE_POSTER_CDN_URL } from '../utils/Constants'

const MovieList = ({title, movies}) => {
  return (
    <div className='px-6 mb-6'>
        <h1 className='md:text-3xl text-xl text-white md:py-4 py-2'>{title}</h1>
        <div className='flex gap-8 overflow-x-scroll pt-4'>
            {
                movies?.map(movie => movie.poster_path && <MovieCard key={movie.id} posterPath={MOVIE_POSTER_CDN_URL + movie.poster_path} />)
            }
        </div>
    </div>
  )
}

export default MovieList