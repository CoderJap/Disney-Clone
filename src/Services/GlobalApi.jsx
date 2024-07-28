import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = "4c2678e07c94923b96af3ba3fd8160a8"

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=4c2678e07c94923b96af3ba3fd8160a8';

const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);
const getMovieByGenreId = (id) => 
  axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default {
  getTrendingVideos,
  getMovieByGenreId
}


