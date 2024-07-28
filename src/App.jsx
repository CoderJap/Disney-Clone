import React from 'react'
import Header from './components/Header'
import "./App.css";
import Slider from './components/Slider';
import ProductionHouse from './components/ProductionHouse';
import GenreMovieList from './components/GenreMovieList';


const App = () => {
  return (
    
    <>
    <div>
      <Header/>
      <Slider/>
      <ProductionHouse/>
      <GenreMovieList/>
    </div>
    </>
  )
}

export default App