import React from 'react';
import '../App.css';
const MovieCard = ({movie}) => {
  return (
    <div >
        <img src='{movie.poster}' alt='{movie.title}'className='card-img-top'/>
        <div className='card-body'>
          
            <h3 className='card-title'>{movie.title}</h3>
           <p>Rating:{movie.rating}</p>
           <p>ReleaseDate:{movie.releaseDate}</p>
        </div>
    </div>
  )
}

export default MovieCard;