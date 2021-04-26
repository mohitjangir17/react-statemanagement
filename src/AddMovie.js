import React,{useContext, useState} from 'react'
import { MovieContext } from './MovieContext';

 const AddMovies = () => {
    const [name,SetName] = useState('');
    const [price,SetPrice] = useState('');
    const [id,SetId] = useState('');
    const [movies,SetMovies] = useContext(MovieContext);

    const updateName = e => {
        SetName(e.target.value)
    }; 
    const updatePrice = e => {
        SetPrice(e.target.value)
    }; 
    const updateId = e => {
        SetId(e.target.value)
    }; 

    const addMovie = e => {
        e.preventDefault();
        SetMovies(prevMovies => [...prevMovies,{name:name, price:price, id:id }]) 
    }

    return(
        <form onSubmit={addMovie}>
            <input placeholder='Name' type="text" name="name" onChange={updateName}/> <br></br>
            <input placeholder='Price' type="text" name="price" onChange={updatePrice}/><br></br>
            <input placeholder='Id' type="text" name="id" onChange={updateId}/><br></br>
            <button type='submit'>Add</button>
        </form>
    )
 }

 export default AddMovies;