import React from "react";
import { useEffect, useState } from "react";

function MovieSearch({ query }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Debug API key access
  const API_KEY = import.meta.env.VITE_API_KEY;
  console.log('Environment variables:', import.meta.env);
  console.log('API Key being used:', API_KEY);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) return;
      
      setLoading(true);
      setError(null);
      
      try {
        // Validate API key before making the request
        if (!API_KEY) {
          throw new Error('API key is missing. Please check your .env file.');
        }

        const url = `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`;
        console.log('Request URL:', url);
        
        const searchRes = await fetch(url);
        const result = await searchRes.json();
        console.log('API Response:', result);
        
        if(result.Response === "True"){
          setMovies(result.Search);
        } else {
          setMovies([]);
          setError(result.Error || 'No movies found');
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
        setError(error.message || 'Failed to fetch movies');
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query, API_KEY]);

  if (loading) {
    return <div className="flex justify-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center p-4 text-red-500">{error}</div>;
  }

  const handleClickMovie= ()=>{
    useEffect(()=>{
      const id = movies.imdbID;
      
    },[])
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.imdbID} className="w-[250px] p-4 bg-white rounded-lg shadow-md hover:cursor-pointer " onClick={handleClickMovie}>
            <h1 className="text-lg font-bold mb-2">{movie.Title}</h1>
            <h2 className="text-sm mb-2">Year: {movie.Year}</h2>
            <img 
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'} 
              alt={movie.Title} 
              className="w-full h-auto"
            />
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center w-full">
          <p className="text-[30px]">No Results Found!</p>
        </div>
      )}
    </div>
  );
}

export default MovieSearch;
