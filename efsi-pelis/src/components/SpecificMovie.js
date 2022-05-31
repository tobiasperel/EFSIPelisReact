import { React } from 'react'

const SpecificMovie = ({ movie }) => {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`} className="card-img-top"
                alt="..."/>
        </div>
    )
}

export default SpecificMovie
