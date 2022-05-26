import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import CarrouselCard from './components/CarrouselCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tagbar from './components/Tagbar';
import SearchBar from './components/SearchBar';
import axios from 'axios'

function App() {
  const apiKey = 'e24778f87f41a95412e12bf4ba364165'
  const [dataSearch, setDataSearch] = useState("")
  const [dataPeliculaBase, setData] = useState(null) //Cada vez que hay un cambio en el componenete se ejecuta
  const [dataJsonSearch, setDataJsonSearch] = useState([])

  const onChangeSearch = async (query) => {
      setDataSearch(query.target.value)
  }

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
        const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
        setData(res.data)
      })()
  },[])

  return (
    (dataPeliculaBase) && //si data es distinto a null renderizalo 
    <>
      <Navbar/>
      <SearchBar dataSearch={dataSearch} onChange={onChangeSearch}/>
      {(dataJsonSearch.length !== 0) ? //entonces
      <CarrouselCard movies={dataJsonSearch.results}/> : //else
      <CarrouselCard movies={dataPeliculaBase.results}/>        
    }
      <Tagbar/>
    </>
  );
}

export default App;
