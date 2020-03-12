import React from 'react';

export default function ApodCard(props) {
    return (
        <div className="apod-card">

                <img src={props.imgsrc} alt={props.title}/>
                    <h2>{props.title}</h2>
                    <p>{props.explanation}</p>
        </div>
    )
}