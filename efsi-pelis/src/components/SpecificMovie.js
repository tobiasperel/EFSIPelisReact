import { React } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const SpecificMovie = ({ movie , salirBoton, elenco}) => {

    

    return (
        <div className="focusMovie">
            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`} className="focusImage" alt="..."/>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>Elenco: </p>
            { elenco.map((persona, index) => {
                //if(index <4) { }
                return index < 4 && (persona.name)
            })}  
            { movie.genres.map((genero, index) => {
                return(
                    <p>{genero.name}</p>
                )
            })}
            { movie.adult &&
                <h3>sdasd</h3>
            }
            <button onClick={salirBoton}>Cerrar</button>
            
            
        </div>
    )
}

export default SpecificMovie
