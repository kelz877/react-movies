import React, {useState, useEffect} from 'react'
import '../designs/BaseLayout.css'
import {connect} from 'react-redux'

function MovieList(props) { 
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
    }, [props.urlID])
   
    const onSearchClick = (ID) => {
        //get value of id
        console.log("Button Test")
        console.log(ID)
        props.getMovieDetails(ID)
    }

    return (
        <div className="movieDisplayBoxes">
            {movies.map((movie) => {
                return (<div className="movieBox" key={movie.imdbID}>
                            <img className='imageDisplay' src={movie.Poster} />
                            <p>{movie.Title}</p>
                            
                            <button onClick={() => onSearchClick(movie.imdbID)} >More Details</button>
                            
                </div>)
            })}
            
        </div>
    )

    
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMovieDetails: (ID) => dispatch({urlID: ID, type: 'URL_MOVIE_DETAILS'})
    }
}

export default connect(null, mapDispatchToProps)(MovieList);