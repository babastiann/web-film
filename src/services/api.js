import axios from 'axios';

const API_KEY = '99f07600507647393007b8db8128ab9d';
const BASE_URL = 'https://api.themoviedb.org/3';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWYwNzYwMDUwNzY0NzM5MzAwN2I4ZGI4MTI4YWI5ZCIsIm5iZiI6MTcyMDk4MzEwOS4zNTU1NTcsInN1YiI6IjY2OTQxYzg1ZGI4ZmVkMDBiYzk1YWVhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w6UV-u-avazx1CDAUZ68Fu34xk6YdHlJonBcx7tPOvs';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${ACCESS_TOKEN}`,
    'Content-Type': 'application/json;charset=utf-8',
  },
});

export const fetchTopMovies = async () => {
  try {
    const response = await api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching top movies: ", error);
    throw error;
  }
};

export const fetchPopularMovies = async () => {
  try {
    const response = await api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular movies: ", error);
    throw error;
  }
};

export const fetchUpcomingMovies = async () => {
  try {
    const response = await api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching upcoming movies: ", error);
    throw error;
  }
};
