import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import "boxicons";
import "./Playlist.css";

const Playlist = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPlaylists = async () => {
      if (!user) return;
      try {
        const response = await axios.get(
          "https://movie-library-backend-jseh.onrender.com/api/playlists",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setMovies(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching playlists:", err);
        setError("Failed to fetch playlists. Please try again later.");
      }
    };
    fetchPlaylists();
  }, [user]);

  const handleDelete = async (imdbID, title) => {
    const confirmed = window.confirm(
      `Are you sure you want to remove "${title}" from the playlist?`
    );
    if (!confirmed) return;

    try {
      await axios.delete(`https://movie-library-backend-jseh.onrender.com/api/playlists/${imdbID}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setMovies(movies.filter((movie) => movie.imdbID !== imdbID));
    } catch (err) {
      console.error("Error deleting movie from playlist:", err);
      setError("Failed to delete movie. Please try again later.");
    }
  };

  if (!user) {
    return (
      <div className="playlist">Please log in to view your playlists.</div>
    );
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{user.username + "'s"} Playlist</h2>
      <div className="playlist">
        {error && <div className="error-message">{error}</div>}
        <div className="playlist-movie-list">
          {movies.map((movie) => (
            <div className="playlist-movie-item" key={movie.imdbID}>
              <img src={movie.poster} alt={movie.title} />
              <h3>{movie.title}</h3>
              <h3>{movie.year}</h3>
              <button className="delete-icon" onClick={() => handleDelete(movie.imdbID, movie.title)}>
              <box-icon name="trash" type="solid" color="#fff"></box-icon>
            </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
