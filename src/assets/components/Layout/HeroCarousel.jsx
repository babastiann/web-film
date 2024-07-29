import { useEffect, useState } from "react";
import axios from "axios";
import CarouselItem from "../Fragments/CarouselItem";

const HeroCarousel = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchMoviesAndGenres = async () => {
      try {
        const [moviesResponse, genresResponse] = await Promise.all([
          axios.get("https://api.themoviedb.org/3/movie/popular?api_key=99f07600507647393007b8db8128ab9d"),
          axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=99f07600507647393007b8db8128ab9d")
        ]);

        const movieDetailsPromises = moviesResponse.data.results.slice(0, 5).map(async (movie) => {
          const movieDetails = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=99f07600507647393007b8db8128ab9d&append_to_response=credits`);
          return { ...movie, credits: movieDetails.data.credits };
        });

        const moviesWithDetails = await Promise.all(movieDetailsPromises);
        setMovies(moviesWithDetails);
        setGenres(genresResponse.data.genres);
      } catch (error) {
        console.error("Failed to fetch movies or genres:", error);
      }
    };

    fetchMoviesAndGenres();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="carousel w-full h-full">
        {movies.map((movie, index) => (
          <div key={movie.id} className={`carousel-item w-full h-full ${index === currentIndex ? "block" : "hidden"}`}>
            <CarouselItem movie={movie} genres={genres} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
