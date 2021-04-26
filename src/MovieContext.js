import React,{useState,createContext} from "react"

export const MovieContext = createContext();

export const  MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
          name: "Harry Potter",
          price: "10",
          id: "7846383",
        },
        {
          name: "Kick",
          price: "30",
          id: "787383",
        },
        {
          name: "Joker",
          price: "40",
          id: "7854383",
        },
        {
            name: "world famous lover",
            price: "23",
            id: "785r483",
          },
      ]);
    return(
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}