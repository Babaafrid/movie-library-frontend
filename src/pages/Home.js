import React, { useState, useEffect, useContext } from "react";
import { searchMovies } from "../utils/api";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [notification, setNotification] = useState("");
  const [playlistMovies, setPlaylistMovies] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await searchMovies("Batman");
      setMovies(data);
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    const fetchPlaylistMovies = async () => {
      if (user) {
        try {
          const response = await axios.get(
            "http://localhost:5000/api/playlists",
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          setPlaylistMovies(response.data);
        } catch (err) {
          console.error("Error fetching playlist movies:", err);
        }
      }
    };
    fetchPlaylistMovies();
  }, [user]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await searchMovies(query);
    setMovies(data);
  };

  const addToPlaylist = async (movie) => {
    if (!user) return;

    try {
      const response = await axios.get("http://localhost:5000/api/playlists", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const existingMovies = response.data;
      const isDuplicate = existingMovies.some(
        (existingMovie) => existingMovie.imdbID === movie.imdbID
      );

      if (isDuplicate) {
        setNotification(`"${movie.Title}" is already in your playlist.`);
      } else {
        await axios.post("http://localhost:5000/api/playlists", movie, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setNotification(`Added "${movie.Title}" to playlist.`);
        setPlaylistMovies([...playlistMovies, movie]); 
      }

      setTimeout(() => setNotification(""), 3000);
    } catch (err) {
      console.error("Error adding to playlist:", err);
    }
  };

  const isInPlaylist = (movie) => {
    return playlistMovies.some(
      (playlistMovie) => playlistMovie.imdbID === movie.imdbID
    );
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {notification && <div className="notification">{notification}</div>}
      <div className="movie-list">
        {movies &&
          movies.map((movie) => (
            <div
              className={`movie-item ${isInPlaylist(movie) ? "added" : ""}`}
              key={movie.imdbID}
            >
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
              <h3>{movie.Year}</h3>
              {user && (
                <button
                  className="add-to-playlist"
                  onClick={() => addToPlaylist(movie)}
                >
                  {isInPlaylist(movie) ? "✓" : "+"}
                </button>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
