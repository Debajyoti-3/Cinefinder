import React from "react";
import { useEffect, useState } from "react";

function MovieSearch({ query }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const Api_key = import.meta.env.API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const searchRes = await fetch(
          `https://www.omdbapi.com/?s=${query}&apikey=${Api_key}`
        );
        const result = await searchRes.json();
        if(result.Response == "True"){
        setMovies(result.search);
        }
        else{
          setMovies([]);
        }
      } catch (error) {
        Console.log(`Error at API :: ${error}`);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <div className="">
      { movies.length>0 ?
      (movies.map((movie) => {
        <div id={movie.imdbID}>
          <h1>Title: {movie.Title}</h1>
          <h2>Year: {movie.year}</h2>
          <img src={movie.Poster} alt={movie.Title} />
        </div>;
      })):
      <div className="flex items-center justify-center">
        <p className="text-[30px]">No Results Found !</p>
      </div>
      }
    </div>
  );
}


export default MovieSearch;
