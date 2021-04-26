import React, { useState } from "react";
import "./App.css";
import MovieList from "./Movielist";
import Nav from "./Nav"
import { MovieProvider } from "./MovieContext";
import AddMovies from './AddMovie'

function App() {
  
  return (
    <MovieProvider>
      <div> 
        <Nav />
        <div className='main'>
        <MovieList />
        <AddMovies />
        </div>
      </div>
    </MovieProvider>  
  );
}

export default App;
