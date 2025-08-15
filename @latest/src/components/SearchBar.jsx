import React from "react";

function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="🔍 Search for movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch(searchTerm)}
      />
      <button
        className="search-btn"
        onClick={() => onSearch(searchTerm)}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
