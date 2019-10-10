import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApodCard from './ApodCard.js';


export default function ApodMain() {

    const [apodData, setApodData] = useState({}) 

    useEffect(() => {

        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=9GwED0cQrEONy8QcgAwf2FXsQR9abnoJ60ysQAIa')
            .then(response => {
                setApodData(response.data)
            })
    }, []);

    return (

        <div>{console.log(apodData)}
            <ApodCard 
                title={apodData.title} 
                explanation={apodData.explanation} 
                imgsrc={apodData.url}
            />
        </div>
        
    )
}
