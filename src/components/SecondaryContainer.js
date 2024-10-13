import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import useGetPopularMovies from '../CustomHooks/useGetPopularMovies'
import useGetTopRatedMovies from '../CustomHooks/useGetTopRatedMovies'
import useGetUpcomingMovies from '../CustomHooks/useGetUpcomingMovies'

const SecondaryContainer = () => {

  const nowPlayingMovies = useSelector(store => store.nowPlayingMovies.nowPlayingMovies);
  const otherMoviesObject = useSelector(store => store.nowPlayingMovies.otherMovies);

  useGetPopularMovies();
  useGetTopRatedMovies();
  useGetUpcomingMovies();

  if(!nowPlayingMovies) return;
  return (
    <div className='bg-black'>
        <div className='relative -top-48 z-20'>
            <MovieList title="Now playing" movies={nowPlayingMovies} />
            {
                Object.values(otherMoviesObject).map(item => item.movies && <MovieList key={item.name} title={item.name} movies={item.movies}/>)
            }
        </div>
    </div>
  )
}

export default SecondaryContainer