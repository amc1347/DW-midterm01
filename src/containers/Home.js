import React, { useState , useEffect } from 'react';
import axios from 'axios';

import Header from "../components/Header";

function Home() {

    const [airQaulityData, setAirQualityData] = useState(null);
    const [city, setCity] = useState("San Jose");
    
    useEffect(() => {
        axios
        .get('https://api.openaq.org/v1/cities')
        .then(function (response) {
            const airQualityResponse = response.data.results;
            setAirQualityData(airQualityResponse);
        })
        .catch(function(error){
            console.log(error);
        })
    } , [city]);


    return (
        <div> 
            <h1>Home Midterm</h1>
        </div>
    )
}



export default Home;