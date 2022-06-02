import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios from 'axios'

const Card = ({  movie }) => {
    return (
        <>
            <div className="card" id="card">
                <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`} className="card-img-top"
                    alt="..."/>
                <div className="card-body">
                    <h5>{movie.title}</h5>
                        <p className="card-text">{movie.overview}</p>
                </div>
            </div>
        </>
    );
}



export default Card;
