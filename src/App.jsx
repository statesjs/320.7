import { useState, useEffect } from "react";

import "./App.css";

import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  // Variable with your API Key
  const apiKey = "55b92172";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async (searchTerm) => {
    // Make fetch request and store the response
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      // Parse JSON response into a JavaScript object
      const data = await response.json();
      // Set the Movie state to the received data
      setMovie(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovie("Clueless");
  });

  // We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
