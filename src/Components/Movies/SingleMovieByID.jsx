import React,{useState, useEffect} from 'react';
import { useLocation} from 'react-router-dom';
import Axios from 'axios';
import '../Movies/singleMovie.css';


const SingleMovieByID = () => {
    const [movie, setMovie] = useState([]);
    const location = useLocation();
    const movieId = location.state.id;

useEffect(() => {
        //Fetching the data for individual movie using ID
        Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=48b43c71c226d58239efb833d05ab17c`).then((response) =>{
            setMovie(response.data);
        }).catch(error => error);
}, [])

    return <div></div>;
}



export default SingleMovieByID;