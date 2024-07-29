import PosterGrid from "../Fragments/PosterGrid";
import { useEffect, useState } from 'react';

const FilmGallery = ({ title, fetchMovies, mediaType }) => {
  const [posters, setPosters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movies = await fetchMovies();
        setPosters(movies.map(movie => ({
          src: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
          title: movie.title,
          year: movie.release_date.split('-')[0],
          rating: movie.vote_average.toFixed(1),
          id: movie.id  // Ensure id is included
        })));
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getMovies();
  }, [fetchMovies]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading movies: {error.message}</p>;

  return (
    <section className="py-8 px-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
        <PosterGrid posters={posters} mediaType={mediaType} />  
      </div>
    </section>
  );
};

export default FilmGallery;
