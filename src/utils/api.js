const API_KEY = 'f8717161caaf1418c951ed37d4ef3a4b';
const BASE_URL = 'https://api.themoviedb.org/';

export const getTrendingMovies = async () => {
  const URL = `${BASE_URL}3/movie/popular?api_key=${API_KEY}&page=1`;
  const response = await fetch(URL);
  return await response.json();
};

export const getMovieById = async id => {
  const URL = `${BASE_URL}3/movie/${id}?api_key=${API_KEY}&page=1`;
  const response = await fetch(URL);
  return await response.json();
};

export const getSearchMovie = async (value, page) => {
  const URL = `${BASE_URL}3/search/movie?query=${value}&include_adult=false&language=en-US&page=${page}&api_key=${API_KEY}`;
    const response = await fetch(URL);
  return await response.json();
};
