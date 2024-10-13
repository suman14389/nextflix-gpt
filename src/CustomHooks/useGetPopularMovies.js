import { useEffect } from "react"
import { TMDB_API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../storeSlices/nowPlayingMovies";
import { POPULAR_MOVIES_API_URL } from "../utils/Constants";

const useGetPopularMovies = () => {

    const dispatch = useDispatch();
    useEffect(() => async () => {
        const response = await fetch(POPULAR_MOVIES_API_URL, TMDB_API_OPTIONS);
        const json = await response.json();
        
        dispatch(addPopularMovies(json.results));
    }, [])
}

export default useGetPopularMovies;