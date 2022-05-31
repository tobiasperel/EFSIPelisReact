import { React } from 'react';
import Card from './Card';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarrouselCard = ({ onMovieButton, movies }) => {
    return (
        <div className="carrousel-cards mb-4">
            { movies.map((movie, index) =>{
                return(
                    <button onClick={() => onMovieButton(false)}>
                        <Card key={index} movie={movie}/>
                    </button>
                )
            })}
        </div>
    )
}



export default CarrouselCard;
