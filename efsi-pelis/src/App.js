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
  const onChangeSearch = async (query) => {
      setDataSearch(query.target.value)
  }

  useEffect(() => {
    (async() => {
      if (dataSearch !== "") {
        const res = await axios.get(`https://api.themoviedb.org/3/search/company?api_key=${apiKey}&query=${dataSearch}&page=1`)
        console.log(res.data)
      }
    })()
  },[dataSearch])

  const [data, setData] = useState(null) //Cada vez que hay un cambio en el componenete se ejecuta
  useEffect(() => { // Solo al principio o, si tiene un coso en el ultimo corchete que cambia
      (async() =>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
        console.log(res.data)
        setData(res.data)
      })()
  },[])

  return (
    data&& //si data es distinto a null renderizalo 
    <>
      <Navbar/>
      <SearchBar dataSearch={dataSearch} onChange={onChangeSearch}/>
      <CarrouselCard movies={data.results}/>
      <Tagbar/>
      <CarrouselCard movies={data.results}/>
    </>
  );
}

export default App;
