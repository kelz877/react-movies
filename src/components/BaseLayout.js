import React, { useState, Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import MovieList from './MovieList'
import MovieDetails from './MovieDetails'
import '../designs/BaseLayout.css'



const BaseLayout = () => {
    return (
        <div className="base">
            <header>
                <p>Movie App</p>
                <nav>
                    <ul>
                        <li>Search</li>
                        <li>Sort</li>
                    </ul>
                </nav>
            </header>
            <div className="displayMovies">
                {/* <MovieList /> */}
            </div>
            <div className="moviePosterDisplay">
                <MovieDetails />

            </div>
        </div>
    )
}


export default BaseLayout;


// function Header() {
//     return <div>Movie Site</div>
// }

// function Menu() { 
//     return <ul>
//             <li>Search</li>
//             <li>Sort</li>
//             </ul>
// }

// function footer() {
//     return <div>Footer</div>
// }


// export class Header extends Component {
//     render() {
//         return <ul>
//                     <li>Movie App</li>           
//                 </ul>
//     }
// }

// export class Footer extends Component {
//     render() {
//         return <div>Footer</div>
//     }
// }

