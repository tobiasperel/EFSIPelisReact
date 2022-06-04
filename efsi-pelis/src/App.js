import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import './Movies.css';
import Navbar from './components/Navbar'
import CarrouselCard from './components/CarrouselCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tagbar from './components/Tagbar';
import SearchBar from './components/SearchBar';
import axios from 'axios'
import SpecificMovie from './components/SpecificMovie';
import Footer from './components/Footer';

function App() {
  const apiKey = 'e24778f87f41a95412e12bf4ba364165'
  const [dataSearch, setDataSearch] = useState("")
  const [dataPeliculaBase, setDataPeliculaBase] = useState(null) //Cada vez que hay un cambio en el componenete se ejecuta
  const [dataJsonSearch, setDataJsonSearch] = useState([])
  const [tagName, setTagName] = useState("popular")
  const [onMovie, setOnMovie] = useState(false)
  const [unaPelicula, setUnaPelicula] = useState(2)
  const [unaPeliculaData, setUnaPeliculaData] = useState([])
  const [creditos, setCreditos] = useState([])
  const onChangeSearch = async (query) => {
    setDataSearch(query.target.value)
  }

  const onChangeTagName = async (query) => {
    console.log(query);
    setTagName(query)
  }

  const onMovieClic = async (boolValue, movieId) => {
    if (boolValue){
      setOnMovie(false)
    } else {
      setOnMovie(true)
    }
    setUnaPelicula(movieId)
  }
  
  useEffect(() => {
    (async() => {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${unaPelicula}?api_key=${apiKey}`)
      setUnaPeliculaData(res.data)
      const res2 = await axios.get(`https://api.themoviedb.org/3/movie/${unaPelicula}/credits?api_key=${apiKey}`)
      setCreditos(res2.data.cast)
    })()
  },[unaPelicula])


  useEffect(() => { // cada vez que tipeo en el input se corre
    (async() => {
      if (dataSearch !== "") {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${dataSearch}&page=1`)
        setDataJsonSearch(res.data)
      }
      else{     
        setDataJsonSearch([])
      }
    })()
  },[dataSearch])

  useEffect(() => { // peliculas base
      (async() =>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${tagName}?api_key=${apiKey}`)
        setDataPeliculaBase(res.data)
      })()
  },[tagName])

  return (
    (dataPeliculaBase!==null) && //si data es distinto a null renderizalo && --> si sin posibilidad de else
      <>
        <Navbar/>
        {(onMovie) ?
          <>
            <SpecificMovie movie={unaPeliculaData} salirBoton={() => setOnMovie(false)} elenco = {creditos}/>
          </>
        :
          (dataJsonSearch.length !== 0) ? //si con ogligacion de un else
          <>
            <SearchBar dataSearch={dataSearch} onChange={onChangeSearch}/>
            <h2>Buscando...</h2>
            <CarrouselCard onMovieButton={onMovieClic} movies={dataJsonSearch.results}/> 
          </>
          : //else
          <>
            <SearchBar dataSearch={dataSearch} onChange={onChangeSearch}/>
            <Tagbar onChangeTagName={onChangeTagName} nameTag={"Peliculas"} />
            <CarrouselCard onMovieButton={onMovieClic} movies={dataPeliculaBase.results}/>
            <Tagbar onChangeTagName={onChangeTagName} nameTag={"Series"}/>
            <CarrouselCard onMovieButton={onMovieClic} movies={dataPeliculaBase.results}/> 
          </>
        }
        <Footer/>
      </>
  );
}

export default App;
