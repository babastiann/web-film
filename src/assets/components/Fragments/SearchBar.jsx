import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
      window.location.reload();
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for movies or series" className="px-3 py-1 rounded-l-md border border-gray-300" />
    </form>
  );
};

export default SearchBar;
