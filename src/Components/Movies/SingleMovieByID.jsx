import React,{useState, useEffect} from 'react';
import { useLocation} from 'react-router-dom';
import Axios from 'axios';
import '../Movies/singleMovie.css';
import { POSTER_URL } from '../../Config/Config';


const SingleMovieByID = () => {
    const [movie, setMovie] = useState([]);
    const location = useLocation();
    const movieId = location.state.id;
    const productionCountries = movie.production_countries;
    const genres = movie.genres;
    const languages = movie.spoken_languages;
    
   
   
    useEffect(() => {
        //Fetching the data for individual movie using ID
        Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=48b43c71c226d58239efb833d05ab17c`).then((response) =>{
            setMovie(response.data);
        }).catch(error => error);
    }, [movieId])

    return <div>
        <div className="main">
            <img src={POSTER_URL + movie.poster_path} alt=" " layout='responsive'/>
            <h2><strong>Title: {movie.original_title}</strong></h2>
            <h2><strong>Tagline: {movie.tagline}</strong></h2>
            <h2><strong>Overview: {movie.overview}</strong></h2>
            <h2><strong>Vote Average: {movie.vote_average}</strong></h2>
            <h2><strong>Total Votes: {movie.vote_count}</strong></h2>
            <h2><strong>Status: {movie.status}</strong></h2>
            <h2><strong>IMDB Link: <a href={`https://www.imdb.com/title/${movie.imdb_id}`}>{movie.imdb_id}</a></strong></h2>
            <h2><strong>Budget: Unknown budget costs</strong></h2>
            <h2><strong>Production Countries:</strong></h2>
            <ul>
            {productionCountries?.map((country) =>{
                return(
                   <li>{country.name}</li>
                )
            })}
            </ul>
            <h2><strong>Genres:</strong></h2>
            <ul>{genres?.map((genre) => {
                return(
                    <li>{genre.name}</li>
                )
            })}</ul>
            <h2><strong>Languages:</strong></h2>
            <ul>
                {languages?.map((lang) =>{
                    return <li>{lang.name}</li>
                })}
            </ul>
        </div>

    </div>;
}


export default SingleMovieByID;