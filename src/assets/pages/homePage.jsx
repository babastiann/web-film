import HeroCarousel from "../components/Layout/HeroCarousel";
import FilmGallery from "../components/Layout/FilmGallery";
import TVSeries from "../components/Layout/TvSeries";
import { fetchTopMovies, fetchPopularMovies, fetchUpcomingMovies } from "../../services/api";

const Home = () => {
  return (
    <div>
      
      <HeroCarousel />
      <FilmGallery title="Top Rated Movies" fetchMovies={fetchTopMovies} mediaType="movie" />
      <FilmGallery title="Popular Movies" fetchMovies={fetchPopularMovies} mediaType="movie" />
      <FilmGallery title="Upcoming Movies" fetchMovies={fetchUpcomingMovies} mediaType="movie" />
      <TVSeries />
    </div>
  );
};

export default Home;
