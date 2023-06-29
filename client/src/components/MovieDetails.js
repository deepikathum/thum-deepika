import React, { useEffect, useState } from 'react'
import '../App.css';
//import axios from 'axios';
const MovieDetails = () => {
  const [movies, setMovies]= useState([]);

  useEffect(()=> {
    fetch('/api/movies').then((res) => res.json()).then((data)=>setMovies(data))
    
    
  },[]);

  return (
    <div className='movie-details'>
        {movies.map((movie)=>(
          <div key={movie.name} className='movie-card'>
          <img src={movie.poster} alt={movie.title} className='card-img-top'/>
           <h3 className='card-title'>{movie.title}</h3>
           <p>Rating:{movie.rating}</p>
           <p>ReleaseDate:{movie.releaseDate}</p>
           </div>
           
        ))}
        
    </div>

  )
}

export default MovieDetails;