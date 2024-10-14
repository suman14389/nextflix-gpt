export const NETFLIX_BG = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs";

export const NETFLIX_LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const USER_PHOTO_URL = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRLsgY2CSjie-wnde1gUPNDi5_B_NZ4zBiUon_dKILwbR5TljE5L_cKi8TFF8Yl6qGzQIrvt1cWr2byRYmAyd6M7bAp7xLGj5pq_Z04h8U";

export const TMDB_API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_SECRET_KEY
    }
  };

const OTHER_MOVIES_API_BASE_URL = "https://api.themoviedb.org/3/movie/";
export const POPULAR_MOVIES_API_URL = OTHER_MOVIES_API_BASE_URL + "popular";
export const TOP_RATED_MOVIES_API_URL = OTHER_MOVIES_API_BASE_URL + "top_rated";
export const UPCOMING_MOVIES_API_URL = OTHER_MOVIES_API_BASE_URL + "upcoming";

export const MOVIE_POSTER_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const GPT_QUERY = (text) => "Act as a Movie Recommendation system and suggest some movies for the query : " +
      text +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya"

export const TMDB_MOVIE_NAME_FETCH_URL = "https://api.themoviedb.org/3/search/movie?query=";