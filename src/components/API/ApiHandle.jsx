import React from 'react'
import { useEffect,useState } from 'react'

function ApiHandle({query}) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error,setError] = useState(null)

    const Api_key = process.env.API_KEY

    useEffect(()=>{
        const movieSearch = async ()=>{
        const searchRes = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${Api_key}`);
        const result = await search.json()
        }
    },[query])

  return (
    <div>
      
    </div>
  )
}

export default ApiHandle
