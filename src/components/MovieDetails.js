import React, {useState, useEffect} from 'react'
import '../designs/BaseLayout.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function MovieDetails (props) {
    const [details, setDetails] = useState({})

    const fetchDetails = () => {
        fetch(`http://www.omdbapi.com/?i=${props.movie_id}&apikey=d42023ea`)
        .then(response => response.json())
        .then(json => {
            //console.log(json)
            
            console.log(json)
            setDetails(json)
        })
    }
    
    useEffect(() => {
        console.log("text test")
        fetchDetails()
    }, [props.movie_id])

    return (
        <div className="movieDetailsDisplay">
            
                {
                    <div>
                    <img className="detailImageDisplay" src={details.Poster} />
                    <div>Title: {details.Title}</div>
                    <div>Actors: {details.Actors}</div>
                    <div>Release Year: {details.Year}</div>
                    <div>Director: {details.Director}</div>
                    </div>
                }

                

        </div>
                
    )
}

const mapStateToProps = (state) => {
    return {
        movie_id: state.urlID
    }
}
export default connect(mapStateToProps, null)(MovieDetails);