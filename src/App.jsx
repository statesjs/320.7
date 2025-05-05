import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

//list of random movies i like
const movies = [
  "The Matrix",
  "Inception",
  "Up",
  "Slumdog Millionaire",
  "The Godfather",
  "The Pursuit of Happyness",
  "Spirited Away",
  "The Dark Knight",
  "rumble in the bronx",
  "Forrest Gump",
  "a beautiful mind",
];

//helper random index number
const getRandomMovie = () => {
  const randomIndex = Math.floor(Math.random() * movies.length);
  return movies[randomIndex];
};

export default function App() {
  const apiKey = "55b92172";

  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const randomTitle = getRandomMovie();
    getMovie(randomTitle);
  }, []);

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
