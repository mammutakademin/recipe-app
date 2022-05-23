import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import {useState, useEffect} from 'react'
// import {RecipeType} from './types'
// import Search from './components/Search'
// import FetchRecipes from './components/FetchRecipes'
// import Home from './pages/Home'
import Pages from './pages/pages'
import { BrowserRouter} from 'react-router-dom';


const App =()=> {

  return(<>
   <BrowserRouter> 
  <Pages/>
  </BrowserRouter> 
  {/* <FetchRecipes/> */}
  </>)
  }

export default App;