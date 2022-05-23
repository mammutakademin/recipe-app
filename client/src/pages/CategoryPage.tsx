import React from 'react';
import styled from 'styled-components';
import NavHeader from '../components/NavHeader';
import MainHeader from '../components/Header';
import CategoryList from '../components/CategoryList';

const Main = styled.main`
     /* border-top: 4px solid #e4910272; */
    display:flex;
    flex-direction:column;
    background-color:#F9F8F1;
    /* height:100vh; */
    color:#173825;
    h3{
        font-size:35px;
        margin:auto;
        padding-top:3rem;
    
    }
  padding:1rem;
    `;

const CategoryPage=()=> {
  return (
      <>
       <NavHeader/>
       <MainHeader/>
       <Main>
            <CategoryList/>
            <h1>CATEGORY</h1>
      </Main>
       
      </>
   
  )
}

export default CategoryPage