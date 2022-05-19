import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import RecipeDetails from './components/RecipeDetails';
import { Link } from 'react-router-dom';

const App = () => (
  <>
    <div className='header-background'>
      <header>
        <h1 className="header-text">Recipes Site</h1>
      </header>
    </div>
    <Link to={'/'}><button>Home</button></Link>  
    <Routes>
      <Route path="/category" element={<Nav />} />
      <Route path="/recipes/:id" element={<RecipeDetails />} />
    </Routes>
  </>
)
  
export default App;