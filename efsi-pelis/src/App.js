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

  const [data, setData] = useState(null)
  useEffect(() => {
      (async() =>{
          const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
          console.log(res.data)
          setData(res.data)
      })()
  },[])

  return (
    data&&
    <>
      <Navbar/>
      <SearchBar/>
      <Tagbar/>
      <CarrouselCard movies={data.results}/>
    </>
  );
}

export default App;
