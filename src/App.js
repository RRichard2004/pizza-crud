import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home.js';
import CreatePage from './AlterDataPage.js';

function App() {
  return (
    <div className='app'>
      <Router>
        <h1 className='title'>Pizza feladat</h1>
        <div className='navbar'>
        <Link to={'/'} className='nav-item btn btn-primary rounded' >Pizzák</Link>
        <Link to={'/CreateNewPizza'} className='nav-item btn btn-primary rounded' >+</Link>
        </div>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/CreateNewPizza' element={<CreatePage />} />
            <Route path='/EditThis/:id' element={<CreatePage />} />

            <Route path='*' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
