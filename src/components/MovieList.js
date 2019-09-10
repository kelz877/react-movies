import React, {useState, useEffect} from 'react'
import '../designs/BaseLayout.css'
import {Link} from 'react-router-dom'

function MovieList() { 
    const [movies, setMovies] = useState([])

    const fetchMovies = () => {
        //load the movies
        fetch('http://www.omdbapi.com/?s=ninja&apikey=d42023ea')
        .then(response => response.json())
        .then(json => {
            console.log(json.Search)
            setMovies(json.Search)
            
        })
    }
    useEffect(() => {
        fetchMovies()
    }, [])
   

    return (
        <div className="movieDisplayBoxes">
            {movies.map((movie) => {
                return (<div className="movieBox" key={movie.imdbID}>
                            <img className='imageDisplay' src={movie.Poster} />
                            <p>{movie.Title}</p>
                            
                            
                            <input type="hidden" name="id" value={movie.imdbID} />
                </div>)
            })}
            test
        </div>
    )

    
}
export default MovieList;