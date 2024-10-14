import React, { useRef } from 'react'
import { NETFLIX_BG, GPT_QUERY } from '../utils/Constants'
import GptSearchResults from './GptSearchResults'
import client from '../utils/openAi'
import { TMDB_MOVIE_NAME_FETCH_URL, TMDB_API_OPTIONS } from '../utils/Constants'
import { useDispatch } from 'react-redux'
import { updateGptSearchResults } from '../storeSlices/GptSlice'
import { useSelector } from 'react-redux'

const GptSearch = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const gptSearchResults = useSelector(store => store.gpt.gptMovies);

  const fetchMovieDetails = async (movieName) => {
    console.log(movieName);
    const response = await fetch(TMDB_MOVIE_NAME_FETCH_URL+movieName, TMDB_API_OPTIONS);
    const data = await response.json();
    return data;
  }
  const handleGptSearch = async () => {
    const response = await client.chat.completions.create({
        messages: [{ role: 'user', content: GPT_QUERY(searchText.current.value) }],
        model: 'gpt-3.5-turbo',
      });
    const movieNames = response.choices[0].message.content.split(',');
    console.log(movieNames);
    
    const moviePromises = movieNames.map(movieName => fetchMovieDetails(movieName));
    const results = await Promise.all(moviePromises);
    console.log(results);
    dispatch(updateGptSearchResults({gptMovieNames: movieNames, gptMoviesDetails: results}));
  } 
    
  return (
    <div className='h-screen bg-cover bg-center relative overflow-y-scroll' style={{ backgroundImage: `url(${NETFLIX_BG})` }}>
        <div className='absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/85 py-6 px-8 text-white flex gap-7 w-2/3'>
            <input type="text" placeholder='what do you want to watch today ?' className='px-4 py-4 rounded-sm w-3/4 text-black' ref={searchText}/>
            <button className='bg-red-600 py-2 rounded-sm font-bold hover:bg-red-700 transition-transform duration-200 w-1/4' onClick={handleGptSearch}>Search</button>
        </div>
        {
            gptSearchResults.gptMovieNames && <GptSearchResults movies={gptSearchResults.gptMoviesDetails} movieNames={gptSearchResults.gptMovieNames} searchText={searchText?.current?.value}/>
        }
    </div>
  )
}

export default GptSearch