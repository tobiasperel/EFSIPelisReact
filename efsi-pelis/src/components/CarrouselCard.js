import { React } from 'react';
import Card from './Card';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarrouselCard = ({ movies }) => {
    return (
        <div className="carrousel-cards mb-4">
            { movies.map((movie, index) =>{
                return(
                    <Card key={index} movie={movie}/>
                )
            })}
        </div>
    )
}



export default CarrouselCard;
