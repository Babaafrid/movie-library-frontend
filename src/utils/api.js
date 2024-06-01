import axios from 'axios';

const API_URL = 'http://www.omdbapi.com/';
const API_KEY = '56271350';

export const searchMovies = async (query) => {
  const response = await axios.get(`${API_URL}?s=${query}&apikey=${API_KEY}`);
  return response.data.Search;
};

export const getMovieById = async (id) => {
  const response = await axios.get(`${API_URL}?i=${id}&apikey=${API_KEY}`);
  return response.data;
};
