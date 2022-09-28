import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { NASA_PIC_OF_THE_DAY_URL, NASA_API_KEY } from '../../Config/Config.js';
import '../Header/header.css';
import Movies from '../Movies/Movies.jsx';

//function to find the day of the week
function dayOfTheWeek() {
    const options = {day: 'numeric', weekday:'long', month: 'long', year:'numeric'}
    const day = new Date().toLocaleDateString('en-us', options);
    return day;
}

const PictureOfTheDay = () => {
    const [picture, setPicture] = useState([]);
useEffect(() => {
// Fetching the Astronomy picture of the day
    Axios.get(NASA_PIC_OF_THE_DAY_URL + NASA_API_KEY).then((response) =>{
        setPicture(response.data);

    });
    
},[])
    
    return (
        <div>
            <div className='header'>

                <div className="title">
                    <h1><span>NASA: </span>Picture of the Day
                        <div>{dayOfTheWeek()}</div>
                    </h1>
                </div>
                <div className="pic"><img src={picture.hdurl} alt="NASA Picture of the Day" layout='responsive'/></div>
            
            </div>
        </div>)
        
}

export default PictureOfTheDay;