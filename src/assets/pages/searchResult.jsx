import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import PosterGrid from '../components/Fragments/PosterGrid';

const SearchResults = () => {
  const location = useLocation();
  const [posters, setPosters] = useState([]);
  const [mediaType, setMediaType] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/multi?api_key=99f07600507647393007b8db8128ab9d&query=${encodeURIComponent(query)}`
        );

        const firstResult = response.data.results[0];
        const detectedMediaType = firstResult?.media_type;

        const results = response.data.results
          .filter(item => item.poster_path) 
          .map((item) => ({
            src: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
            title: item.title || item.name,
            description: item.overview,
            rating: item.vote_average ? item.vote_average.toFixed(1) : 'N/A', 
            year: item.release_date?.slice(0, 4) || item.first_air_date?.slice(0, 4),
            id: item.id,
            mediaType: item.media_type 
          }));

        setPosters(results);
        setMediaType(detectedMediaType); 
      } catch (error) {
        console.error("Error fetching search results:", error);
        setError("Error fetching search results");
      }

      setLoading(false);
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  if (loading) return <div className="py-8 px-10 text-white">Loading...</div>;
  if (error) return <div className="py-8 px-10 text-red-500">{error}</div>;

  return (
    <div className="py-8 px-10">
      <h1 className="text-2xl font-bold text-white mb-4">Search Results for "{query}"</h1>
      <PosterGrid posters={posters} mediaType={mediaType || "movie"} />
    </div>
  );
};

export default SearchResults;
