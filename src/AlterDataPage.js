import React, { useState, useEffect } from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import './App.css';
import axios from 'axios';

export default function CreatePage(yourPizza) {
    const [name, setName] = useState(yourPizza?yourPizza.name:'');
    const [kepURL, setKepURL] = useState(yourPizza?yourPizza.kepURL:'');
    const [isGlutenFree, setIsGlutenFree] = useState(yourPizza?yourPizza.isGlutenFree:0);

    const SendForm = async (e) => {
        e.preventDefault();

        try {
            const SendData={
                name: name,
                isGlutenFree: isGlutenFree,
                kepURL: kepURL
            }
            console.log(SendData);
            await axios.post(`https://pizza.kando-dev.eu/Pizza`, SendData,{
              headers: {
                "Access-Control-Allow-Origin": "*",
              },
            })
            .then((response) => {
                console.log(response)
            });
            alert("Pizza is up in the cloud, be happy");
            window.location.reload();
            } catch (error) {
              console.error(error);
              alert("Hiba történt a küldés közben, próbáld újra később");
            } 
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    }    
    const handleURLChange = (event) => {
        setKepURL(event.target.value);
    }    
    const handleGlutenChange = (event) => {
        setIsGlutenFree(event.target.checked ? 1 : 0);
        console.log(isGlutenFree)
      };

  return (
  <form onSubmit={SendForm}>
    <div className="form-group">
      <label>Name</label>
      <input type="text" className="form-control" defaultValue={name} onChange={handleNameChange} />
    </div>
    <div className="form-group">
      <label>Kep URL</label>
      <input type="text" className="form-control" defaultValue={kepURL} onChange={handleURLChange} />
    </div>
    <div className="form-check">
      <input type="checkbox" className="form-check-input" defaultValue={isGlutenFree} onChange={handleGlutenChange} />
      <label className="form-check-label" >Gluten free</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  );
}
