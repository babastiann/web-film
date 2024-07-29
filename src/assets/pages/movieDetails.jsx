import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieDetailTemplate from "../components/Layout/MovieDetailTemplate";

const MovieDetailPage = () => {
  const { mediaType, id } = useParams();
  const [details, setDetails] = useState(null);
  const [seasons, setSeasons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        
        const response = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=99f07600507647393007b8db8128ab9d&append_to_response=videos,credits,images`);
        setDetails(response.data);

        
        if (mediaType === "tv") {
          const seasonsResponse = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=99f07600507647393007b8db8128ab9d&append_to_response=seasons`);
          const { seasons } = seasonsResponse.data;

          
          const seasonsWithEpisodes = await Promise.all(seasons.map(async (season) => {
            const episodesResponse = await axios.get(`https://api.themoviedb.org/3/tv/${id}/season/${season.season_number}?api_key=99f07600507647393007b8db8128ab9d`);
            return {
              ...season,
              episodes: episodesResponse.data.episodes,
            };
          }));

          setSeasons(seasonsWithEpisodes);
        }
      } catch (error) {
        console.error(`Error fetching ${mediaType} details:`, error);
        setError("Error fetching details");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [mediaType, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const trailerKey = details?.videos?.results?.[0]?.key || null;
  const trailerUrl = trailerKey ? `https://www.youtube.com/watch?v=${trailerKey}` : null;
  const cast = details?.credits?.cast?.slice(0, 5) || [];
  const posters = details?.images?.posters || [];

  const movieDetails = {
    title: details?.title || details?.name || "Title Not Available",
    overview: details?.overview || "No overview available",
    releaseDate: details?.release_date || details?.first_air_date || "Release date not available",
    rating: details?.vote_average.toFixed(1) || "Rating not available",
    genres: details?.genres || [],
  };

  return (
    <MovieDetailTemplate 
      trailerUrl={trailerUrl} 
      movieDetails={movieDetails} 
      cast={cast} 
      posters={posters} 
      seasons={seasons} 
    />
  );
};

export default MovieDetailPage;
