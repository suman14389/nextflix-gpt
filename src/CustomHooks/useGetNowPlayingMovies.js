import { TMDB_API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addTrailerMovieDetails } from "../storeSlices/nowPlayingMovies";
import { useEffect, useMemo } from "react";

const useGetNowPlayingMovies = async () => {
    const dispatch = useDispatch();

    const fetchNowPlayingMovies = useMemo(() => async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', TMDB_API_OPTIONS);
        const data = await response.json();

        dispatch(addNowPlayingMovies(data.results));
        dispatch(addTrailerMovieDetails(data.results[0]));
    }, []);
    
    useEffect(() => {
        const getNowPlayingMovies = async () => {
            await fetchNowPlayingMovies();
        }
        getNowPlayingMovies();
    }, []);
}

export default useGetNowPlayingMovies;