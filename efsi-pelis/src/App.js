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
  const [dataSeriesBase, setDataSeriesBase] = useState(null)
  const [dataJsonSearchPelicula, setDataJsonSearchPelicula] = useState([])
  const [dataJsonSearchSerie, setDataJsonSearchSerie] = useState([])
  const [tagName, setTagName] = useState("popular")
  const [tagNameSeries, setTagNameSeries] = useState("popular")
  const [onMovie, setOnMovie] = useState(false)
  const [onSerie, setOnSerie] = useState(false)
  const [unaPelicula, setUnaPelicula] = useState(2)
  const [unaSerie, setUnaSerie] = useState(2)
  const [unaPeliculaData, setUnaPeliculaData] = useState([])
  const [unaSerieData, setUnaSerieData] = useState([])
  const [creditos, setCreditos] = useState([])
  const onChangeSearch = async (query) => {
    setDataSearch(query.target.value)
  }

  const onChangeTagName = async (query) => {
    setTagName(query)
  }

  const onChangeTagNameSeries = async (query) => {
    setTagNameSeries(query)
  }

  const onMovieClic = async (boolValue, movieId) => {
    if (boolValue){
      setOnMovie(false)
    } else {
      setOnMovie(true)
    }
    setUnaPelicula(movieId)
  }

  const onSerieClic = async (boolValue, serieId) => {
    if (boolValue){
      setOnSerie(false)
    } else {
      setOnSerie(true)
    }
    setUnaSerie(serieId)
  }
  
  useEffect(() => {
    (async() => {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${unaPelicula}?api_key=${apiKey}`)
      setUnaPeliculaData(res.data)
      const res2 = await axios.get(`https://api.themoviedb.org/3/movie/${unaPelicula}/credits?api_key=${apiKey}`)
      setCreditos(res2.data.cast)
    })()
  },[unaPelicula])

  useEffect(() => {
    (async() => {
      const res = await axios.get(`https://api.themoviedb.org/3/tv/${unaSerie}?api_key=${apiKey}`)
      setUnaSerieData(res.data)
      const res2 = await axios.get(`https://api.themoviedb.org/3/tv/${unaSerie}/credits?api_key=${apiKey}`)
      setCreditos(res2.data.cast)
    })()
  },[unaSerie])

  useEffect(() => { // cada vez que tipeo en el input se corre
    (async() => {
      if (dataSearch !== "") {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${dataSearch}&page=1`)
        setDataJsonSearchPelicula(res.data)
      }
      else{     
        setDataJsonSearchPelicula([])
      }
    })()
  },[dataSearch])

  useEffect(() => { // cada vez que tipeo en el input se corre
    (async() => {
      if (dataSearch !== "") {
        const res = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${dataSearch}&page=1`)
        setDataJsonSearchSerie(res.data)
      }
      else{     
        setDataJsonSearchSerie([])
      }
    })()
  },[dataSearch])

  useEffect(() => { // peliculas base
      (async() =>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${tagName}?api_key=${apiKey}`)
        setDataPeliculaBase(res.data)
      })()
  },[tagName])

  useEffect(() => { // series base
    (async() =>{
      const res = await axios.get(`https://api.themoviedb.org/3/tv/${tagNameSeries}?api_key=${apiKey}`)
      setDataSeriesBase(res.data)
    })()
},[tagNameSeries])

  return (
    (dataPeliculaBase!==null) && //si data es distinto a null renderizalo && --> si sin posibilidad de else
      <>
        <Navbar/>
        {(onMovie) ?
          <>
            <SpecificMovie movie={unaPeliculaData} salirBoton={() => setOnMovie(false)} elenco = {creditos}/>
          </>
        :
        (onSerie) ?
        <>
          <SpecificMovie movie={unaSerieData} salirBoton={() => setOnSerie(false)} elenco = {creditos}/>
        </>
        :
          (dataJsonSearchPelicula.length !== 0) ? //si con ogligacion de un else
          <>
            <SearchBar dataSearch={dataSearch} onChange={onChangeSearch}/>
            <h2>Buscando...</h2>
            <h3>Peliculas: </h3>
            <CarrouselCard onMovieButton={onMovieClic} movies={dataJsonSearchPelicula.results}/> 
            <h3>Series: </h3>
            <CarrouselCard onMovieButton={onSerieClic} movies={dataJsonSearchSerie.results}/> 
          </>
          : //else
          (dataJsonSearchSerie.length !== 0) ?
          <>
            <CarrouselCard onMovieButton={onSerieClic} movies={dataJsonSearchSerie.results}/> 
          </>
          :
          <>
            <SearchBar dataSearch={dataSearch} onChange={onChangeSearch}/>
            <Tagbar onChangeTagName={onChangeTagName} nameTag={"Peliculas"} filtros = {["popular", "now_playing", "upcoming"]} />
            <CarrouselCard onMovieButton={onMovieClic} movies={dataPeliculaBase.results}/>
            <Tagbar onChangeTagName={onChangeTagNameSeries} nameTag={"Series"} filtros = {["popular", "on_the_air", "airing_today", "top_rated"]} />
            <CarrouselCard onMovieButton={onSerieClic} movies={dataSeriesBase.results}/> 
          </>
        }
        <Footer/>
      </>
  );
}

export default App;
