import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
      window.location.reload();
    }
  };

  const fetchSuggestions = async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=99f07600507647393007b8db8128ab9d&query=${encodeURIComponent(query)}`
      );
      setSuggestions(response.data.results.slice(0, 5)); // Limit to 5 suggestions
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchSuggestions(searchTerm);
    }, 300); // Debounce time: 300ms

    return () => clearTimeout(debounce);
  }, [searchTerm]);

  return (
    <div className="relative">
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies or series"
          className="px-3 py-1 rounded-l-md border border-gray-300"
        />
      </form>
      {loading && <div className="absolute z-10 mt-2 bg-white p-2 shadow-md">Loading...</div>}
      {suggestions.length > 0 && (
        <div className="absolute z-10 mt-2 bg-black  p-2 shadow-md w-full max-h-64 overflow-y-auto">
          {suggestions.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                navigate(`/movieDetails/${item.media_type}/${item.id}`);
                setSearchTerm("");
                setSuggestions([]);
              }}
            >
              <img
                src={item.poster_path ? `https://image.tmdb.org/t/p/w92${item.poster_path}` : "https://via.placeholder.com/50x75"}
                alt={item.title || item.name}
                className="w-12 h-18 object-cover mr-2"
              />
              <div>
                <h1 className="text-sm text-white font-semibold">{item.title || item.name}</h1>
                <p className="text-xs text-white">{item.release_date || item.first_air_date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
