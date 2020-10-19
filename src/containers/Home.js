import React, { useState , useEffect } from 'react';
import axios from 'axios';

// import Header from "../components/Header";

function Home() {
    const [airQualityData, setAirQualityData] = useState([]);
    
    useEffect(() => {
        axios
        .get('https://api.openaq.org/v1/cities')
        .then(function (response) {
            const airqualityresponse = response.data.results;
            setAirQualityData(airqualityresponse);

            console.log("response", response);
        })
        .catch(function(error){
            console.warn(error);
        });
    } , []);

    console.log("airQualityData", airQualityData);


    return (
        <div> 
            <h1>Home Midterm</h1>
            {airQualityData.map((city, i) => (
                <div key={i}>
                    <h2>{city.name}</h2>
                    <p>Air Quality {city.count}</p>
                </div>
            ))}
        </div>

    )
}



export default Home;