import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import "./App.css";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=1a3a2a01"; // Replace with your OMDb API key

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Stranger Things");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const fetchMovies = async (title) => {
    if (!title.trim()) return;
    setLoading(true);
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, []);

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      <h1>🎬 Movie Search</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={fetchMovies}
      />

      {loading ? (
        <div className="loader"></div>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
}

export default App;
