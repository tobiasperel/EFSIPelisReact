import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import CarrouselCard from './components/CarrouselCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tagbar from './components/Tagbar';
import SearchBar from './components/SearchBar';
import axios from 'axios'
import SpecificMovie from './components/SpecificMovie';

function App() {
  const apiKey = 'e24778f87f41a95412e12bf4ba364165'
  const [dataSearch, setDataSearch] = useState("")
  const [dataPeliculaBase, setDataPeliculaBase] = useState(null) //Cada vez que hay un cambio en el componenete se ejecuta
  const [dataJsonSearch, setDataJsonSearch] = useState([])
  const [tagName, setTagName] = useState("popular")
  const [onMovie, setOnMovie] = useState(false)
  const [unaPelcula, setUnaPelicula] = useState(null)
  const onChangeSearch = async (query) => {
    setDataSearch(query.target.value)
  }

  const onChangeTagName = async (query) => {
    console.log(query);
    setTagName(query)
  }

  const onMovieClic = async (boolValue) => {
    if (boolValue){
      setOnMovie(false)
      console.log("hola:"+boolValue)
    } else {
      setOnMovie(true)
      console.log(boolValue)
    }
  }
  
  useEffect(() => {
    (async() => {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/{movie_id}?api_key=${apiKey}`)
      setUnaPelicula(res.data)
    })()
  },[unaPelcula])

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
        <SearchBar dataSearch={dataSearch} onChange={onChangeSearch}/>
        {(onMovie) ?
          <>
            <SpecificMovie movie={}/>
          </>
        :
          (dataJsonSearch.length !== 0) ? //si con ogligacion de un else
          <>
            <h2>Buscando...</h2>
            <CarrouselCard onMovieButton={onMovieClic} movies={dataJsonSearch.results}/> 
          </>
          : //else
          <>
            <Tagbar onChangeTagName={onChangeTagName}/>
            <CarrouselCard onMovieButton={onMovieClic} movies={dataPeliculaBase.results}/>        
          </>
        }
      
      </>
  );
}

export default App;
