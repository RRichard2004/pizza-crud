
import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import axios from 'axios';

export default function OnePost({pizza}) {
    const deleteThis = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`https://pizza.kando-dev.eu/Pizza/${pizza.id}`,{
              headers: {
                "Access-Control-Allow-Origin": "*",
              },
            })
            .then((response) => {
                console.log(response)
            });
            alert(`Post has been deleted succesfully!`);
            window.location.reload();
            } catch (error) {
              console.error(error);
            } 
    };


  return (
      <div className={'item card'}>
        <p className='pizzaName'>{pizza.name}</p>
        <img className='pizzaPng rounded' src={pizza.kepURL}/>
        <p className='pizzaDisclaimer'>*This pizza {pizza.isGlutenFree===1?'does':'does not'} contain gluten</p>

        <div className='buttonContainer'>
          <Link className='btn btn-warning' to={'/'}>
              Edit
          </Link>
          <button className='btn btn-danger' onClick={deleteThis}>
              Delete
          </button>
        </div>
      </div>
  );
}