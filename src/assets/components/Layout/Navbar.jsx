import { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../Fragments/Logo";
import NavItem from "../Fragments/NavItems";
import "boxicons";
import "./style.css";
import SearchBar from "../Fragments/SearchBar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [genreDropdownItems, setGenreDropdownItems] = useState([]);
  const [tvSeriesDropdownItems, setTvSeriesDropdownItems] = useState([]);
  const [moviesDropdownItems, setMoviesDropdownItems] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    // Fetch TV series genres
    const fetchTvSeriesGenres = async () => {
      try {
        const response = await axios.get("https://api.themoviedb.org/3/genre/tv/list?api_key=99f07600507647393007b8db8128ab9d");
        console.log("TV Series Genres:", response.data.genres); 
        return response.data.genres;
      } catch (error) {
        console.error("Failed to fetch TV series genres:", error);
        return [];
      }
    };

    // Fetch movie genres
    const fetchMovieGenres = async () => {
      try {
        const response = await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=99f07600507647393007b8db8128ab9d");
        console.log("Movie Genres:", response.data.genres); 
        return response.data.genres;
      } catch (error) {
        console.error("Failed to fetch movie genres:", error);
        return [];
      }
    };

    // Combine genres from both sources
    const fetchAndCombineGenres = async () => {
      const [tvSeriesGenres, movieGenres] = await Promise.all([fetchTvSeriesGenres(), fetchMovieGenres()]);

      
      const combinedGenres = [...tvSeriesGenres, ...movieGenres];
      const uniqueGenres = Array.from(new Set(combinedGenres.map(genre => genre.id)))
        .map(id => combinedGenres.find(genre => genre.id === id));

      const items = uniqueGenres.map((genre) => ({
        label: genre.name,
        to: `/genre/${genre.id}`,
      }));
      setGenreDropdownItems(items);
    };

    // Fetch TV series categories
    const fetchTvSeriesCategories = async () => {
      try {
        const response = await axios.get("https://api.themoviedb.org/3/genre/tv/list?api_key=99f07600507647393007b8db8128ab9d");
        console.log("TV Series Categories:", response.data.genres); 
        const items = response.data.genres.map((genre) => ({
          label: genre.name,
          to: `/tvseries/${genre.id}`,
        }));
        setTvSeriesDropdownItems(items);
      } catch (error) {
        console.error("Failed to fetch TV series categories:", error);
      }
    };

    // Fetch movie categories
    const fetchMovieCategories = async () => {
      const categories = [
        { label: "Most Watched", endpoint: "popular" },
        { label: "Popular", endpoint: "popular" },
        { label: "Top Rated", endpoint: "top_rated" },
      ];

      try {
        const items = categories.map((category) => ({
          label: category.label,
          to: `/movies/${category.endpoint}`,
        }));
        setMoviesDropdownItems(items);
      } catch (error) {
        console.error("Failed to fetch movie categories:", error);
      }
    };

    fetchAndCombineGenres();
    fetchTvSeriesCategories();
    fetchMovieCategories();

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black bg-opacity-75" : "bg-black"}`}>
      <nav className="shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <button onClick={toggleSearch} className="text-white focus:outline-none lg:hidden mr-2">
              <box-icon name="search-alt-2" color="white"></box-icon>
            </button>
            <Logo />
            <div className="hidden lg:block ml-4">
              <SearchBar />
            </div>
            <ul className="hidden lg:flex lg:ml-4 lg:gap-5">
              <NavItem label="Home" to="/home" />
              <NavItem label="Movies" to="/movies" dropdownItems={moviesDropdownItems} />
              <NavItem label="TV Series" to="/tvseries" dropdownItems={tvSeriesDropdownItems} />
              <NavItem label="Genre" to="/genre" dropdownItems={genreDropdownItems} />
            </ul>
          </div>
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <box-icon name={isMenuOpen ? "x" : "menu"} color="white"></box-icon>
            </button>
          </div>
        </div>
        {isSearchOpen && (
          <div className="lg:hidden bg-black w-full px-4 py-2">
            <SearchBar />
          </div>
        )}
        {isMenuOpen && (
          <div className="lg:hidden bg-black w-full">
            <ul className="flex flex-col items-start gap-2 pb-6 mt-4 px-4">
              <NavItem label="Home" to="/home" />
              <NavItem label="Movies" to="/movies" dropdownItems={moviesDropdownItems} />
              <NavItem label="TV Series" to="/tvseries" dropdownItems={tvSeriesDropdownItems} />
              <NavItem label="Genre" to="/genre" dropdownItems={genreDropdownItems} />
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
