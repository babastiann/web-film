import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PosterGrid from '../components/Fragments/PosterGrid';

const TVSeries = () => {
  const { id } = useParams(); 
  const [posters, setPosters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTVSeriesByGenre = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/tv?api_key=99f07600507647393007b8db8128ab9d&with_genres=${id}`
        );

        const results = response.data.results.map((item) => ({
          src: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
          title: item.name,
          description: item.overview,
          rating: item.vote_average.toFixed(1), 
          year: item.first_air_date?.slice(0, 4),
          id: item.id,
          mediaType: 'tv' 
        }));
        setPosters(results);
      } catch (error) {
        console.error("Error fetching TV series:", error);
        setError("Error fetching TV series. Please try again later.");
      }

      setLoading(false);
    };

    fetchTVSeriesByGenre();
  }, [id]);

  if (loading) return <div className="py-8 px-10 text-white">Loading...</div>;
  if (error) return <div className="py-8 px-10 text-red-500">{error}</div>;

  return (
    <div className="py-8 px-10">
      <h1 className="text-2xl font-bold text-white mb-4">TV Series in Genre</h1>
      <PosterGrid posters={posters} mediaType="tv" /> 
    </div>
  );
};

export default TVSeries;
