import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PosterGrid from "../components/Fragments/PosterGrid";

const Genre = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContentByGenre = async () => {
      setLoading(true);
      setError(null);

      try {
        
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=99f07600507647393007b8db8128ab9d&with_genres=${id}`
        );
        const moviesResults = movieResponse.data.results.map((item) => ({
          src: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
          title: item.title,
          description: item.overview,
          rating: item.vote_average.toFixed(1), 
          year: item.release_date?.slice(0, 4),
          id: item.id,
          mediaType: 'movie' 
        }));
        setMovies(moviesResults);

        const tvSeriesResponse = await axios.get(
          `https://api.themoviedb.org/3/discover/tv?api_key=99f07600507647393007b8db8128ab9d&with_genres=${id}`
        );
        const tvSeriesResults = tvSeriesResponse.data.results.map((item) => ({
          src: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
          title: item.name,
          description: item.overview,
          rating: item.vote_average.toFixed(1), 
          year: item.first_air_date?.slice(0, 4),
          id: item.id,
          mediaType: 'tv' 
        }));
        setTvSeries(tvSeriesResults);

      } catch (error) {
        console.error("Error fetching genre content:", error);
        setError("Error fetching genre content");
      }
      setLoading(false);
    };

    fetchContentByGenre();
  }, [id]);

  if (loading) return <div className="py-8 px-10 text-white">Loading...</div>;
  if (error) return <div className="py-8 px-10 text-red-500">{error}</div>;

  return (
    <div className="py-8 px-10">
      <h1 className="text-2xl font-bold text-white mb-4">Genre - {id}</h1>
      <h2 className="text-xl font-bold text-white mb-4">Movies</h2>
      <PosterGrid posters={movies} mediaType="movie" /> 
      <h2 className="text-xl font-bold text-white mb-4">TV Series</h2>
      <PosterGrid posters={tvSeries} mediaType="tv" /> 
    </div>
  );
};

export default Genre;
