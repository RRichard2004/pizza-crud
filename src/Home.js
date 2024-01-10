import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import OnePizza from './OnePizza';

const App = ({ id }) => { // assuming 'id' is a prop
    const [items, setItems] = useState([]);
  
    useEffect(() => {

        (async () => {

          setItems([]);
          try {
            const url = id ? `https://pizza.kando-dev.eu/Pizza/${id}` : 'https://pizza.kando-dev.eu/Pizza';
            const response = await axios.get(url, {
              headers: {
                'Access-Control-Allow-Origin': '*',
              }
            });
            setItems(response.data);
          } catch (error) {
            console.log(error)
          }
        })();
      }, [id]);

  return (
    items.length > 0 ? (
        items.map(item => <OnePizza pizza={item} />)
      ) : (
        <p>No pizza found.</p>
      )
  );
}

export default App;
