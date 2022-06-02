import { React } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const SpecificMovie = ({ movie , salirBoton}) => {

    

    return (
        <div className="focusMovie">
            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`} className="focusImage" alt="..."/>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>

            <button onClick={salirBoton}>Cerrar</button>
            
            
        </div>
    )
}

export default SpecificMovie
