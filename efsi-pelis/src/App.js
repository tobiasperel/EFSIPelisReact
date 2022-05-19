import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import CarrouselCard from './components/CarrouselCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tagbar from './components/Tagbar';
import SearchBar from './components/SearchBar';
function App() {
  return (
    <>
      <Navbar/>
      <SearchBar/>
      <Tagbar/>
      <CarrouselCard/>
    </>
  );
}

export default App;
