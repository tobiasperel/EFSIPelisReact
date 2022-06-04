import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios from 'axios'

const Card = ({  movie }) => {

    function forAdult(adultValue){
        if (adultValue){
            return <h3 className='card-age'>🔞</h3>
        }
        else{
            return <h3 className="card-age">👪</h3>
        }
    }
    
    return (
        <>
            <div className="card" id="card">
                <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`} className="card-img-top"
                    alt="..."/>
                <h3 className='card-title'>
                    {movie.title}
                    <p className='card-description'>{movie.overview}</p>
                </h3>
                {
                    forAdult(movie.adult)
                }
            </div>
        </>
    );
}

export default Card;