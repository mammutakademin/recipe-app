import React from 'react';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipePage from './RecipePage';
import Searched from "./Searched";
import CategoryPage from "./CategoryPage";


function pages() {
  return (
      <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Recipe" element={<RecipePage/>} />
            <Route path="/Recipe/:id" element={<RecipePage/>} />
            <Route path="/category/:categoryId" element={<CategoryPage/>} />
            <Route path="/searched/:searched" element={<Searched/>} />       
        </Routes>
      </>
   
  )
}

export default pages