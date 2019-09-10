import React, {useState, useEffect} from 'react'
import '../designs/BaseLayout.css'
import {Link} from 'react-router-dom'

function MovieDetails () {
    const [details, setDetails] = useState([])

    const fetchDetails = () => {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=d42023ea')
        .then(response => response.json())
        .then(json => {
            json = (Object.values(json))
            console.log(json)
            setDetails(json)
        })
    }
    
    useEffect(() => {
        fetchDetails()
    }, [])

    return (
        <div className="movieDetailsDisplay">
            <div> 
                {details.filter(detail => {return typeof(detail) == 'string'})
                .map((detail) => {
                    console.log(detail)
                        return <div>{detail}</div>
                    }                    
                )} 
                </div>

            

        </div>
    )
}


export default MovieDetails;