import { React } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../Movies.css';

const SpecificMovie = ({ movie , salirBoton, elenco}) => {


    function forAdult(adultValue){
        if (adultValue){
            return <p className="text-danger">LOL</p>
        }
    }
    
    return (
        <div className="container mt-5 focus-movie">
            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`} className="image-movie" alt="..."/>
            <div className="info-movie">
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <h5>Elenco: </h5>
                <div className="movie-elenco">
                    { elenco.map((persona, index) => {
                        if (index < 5){
                            return (
                                <p className="movie-elenco">{persona.name}, </p>
                            )
                        }
                        else if (index <= 5){
                            return (
                                <p className="movie-elenco">{persona.name}.</p>
                            )
                        }
                    })}  
                </div>
                { forAdult(movie.adult) }
                <h5 className='mt-3'>Generos: </h5>
                { movie.genres.map((genero, index) => {
                    return(
                        <p className='movie-elenco tag tag-movie'>{genero.name}</p>
                    )
                })}
                <div className="local-flex">
                    <button className="close-button" onClick={salirBoton}>Cerrar</button>
                </div>
            </div>
        </div>
    )
}

export default SpecificMovie
