import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //      setCategories( [...categories, 'HunterXHunter'] ); //agregar un nuevo elementos al arreglo
    //      setCategories ( cats => [...cats, 'HunterXHunter'] ); // se llama setCategories con un callback que tiene cats(categorias) + añadido
    //  }

    return (
        <>
          <h2>GifExpertApp</h2>
          <AddCategory setCategories = { setCategories }/>
          <hr />          
          <ol>
              {
                  categories.map( category => (
                             <GifGrid    
                                 key={category}   
                                 category = {category}
                            />
                        ))
              }
          </ol>
       </>
    );
  }
  

  
  export default GifExpertApp;

