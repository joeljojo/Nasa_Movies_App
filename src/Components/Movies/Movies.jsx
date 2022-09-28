import React,{useState, useEffect} from 'react';
import { Link} from "react-router-dom";
import Axios from 'axios';
import { IMDB_API_KEY, IMDB_API_URL, POSTER_URL } from '../../Config/Config.js';
import ALT_POSTER from '../../Images/gallery.png';
import '../Movies/movies.css';


const Movies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        //Fetching the movies from IMDb API
       Axios.get(IMDB_API_URL + IMDB_API_KEY).then((response) =>{
        setMovies(response.data.results);
       }).catch(error => error)
    }, [])

    return <div className='movies-section'>
        <div className="movies">
        {movies.map((movie) =>{
            let posterPath = movie.poster_path;
            let URL='';
            if(posterPath == null){
                URL = ALT_POSTER;
            }
            else{
               URL = POSTER_URL+posterPath;  
            }
            
            return(
                <div className="movie-card">
                    <a>
                        <div className="poster" style={{backgroundImage:`url(${URL})`}}>

                        </div>
                        <h1>{movie.original_title}</h1>
                        <h4>Description:</h4>
                        <p>{movie.overview}</p>
                        <p>Popularity: {movie.popularity}</p>
                        <p>Release Date: {movie.release_date}</p>
                    </a>
                    
                </div>)
            })}
        </div>
    </div>;
}


export default Movies;