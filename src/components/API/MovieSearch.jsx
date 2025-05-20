import React from "react";
import { useEffect, useState } from "react";

function MovieSearch({ query }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const Api_key = process.env.API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const searchRes = await fetch(
          `https://www.omdbapi.com/?s=${query}&apikey=${Api_key}`
        );
        const result = await searchRes.json();
        setMovies(result.search);
      } catch (error) {
        Console.log(`Error at API :: ${error}`);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <div className="">
      {movies.map((movie) => {
        <div id={movie.imdbID}>
          <h1>Title: {movie.Title}</h1>
          <h2>Year: {movie.year}</h2>
          <img src={movie.Poster} alt={movie.Title} />
        </div>;
      })}
    </div>
  );
}

export default MovieSearch;
