import React,{useState, useEffect} from 'react';
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
        
    </div>;
}


export default Movies;