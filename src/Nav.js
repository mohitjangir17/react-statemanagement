import React, { useContext } from "react";
import {MovieContext} from "./MovieContext"
import MovieList from "./Movielist";

const Nav= () => {
  const [movies,setMovies] = useContext(MovieContext)
  return (
    <nav className="movies">
      <h2>Our Movies</h2>
      <h1>No. of Movies: {movies.length}</h1>
    </nav>
  );
};

export default Nav;
