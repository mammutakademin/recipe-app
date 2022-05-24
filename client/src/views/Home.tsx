import React from 'react'
import FetchRecipes from '../components/FetchRecipes'
import NavHeader from '../components/NavHeader';
import MainHeader from '../components/Header';

function Home() {
  return (<>
    <NavHeader/>
    <MainHeader/>
    <FetchRecipes/>
  </>
  )
}

export default Home