import React from 'react'
import styled from 'styled-components';
// import Search from '../components/Search';
import FetchRecipes from '../components/FetchRecipes'
import NavHeader from '../components/NavHeader';
import MainHeader from '../components/Header';



// const Header = styled.header`
//    width:100%;
//    height: 650px;
//    display:flex;
//    justify-content:center;
//    align-items:center;
//    text-align:center;
//    img{
//        width:100%;
//        height:100%;
//        background-size: cover;
//        object-fit:cover;
//        filter: brightness(70%);
//        position:relative;
//        z-index:2;

//    }
//    h1{
//        font-family:kaushan script;
//        position:absolute;
//        color:white;
//        z-index:5;
//        font-size:68px;
//    }
//    p{

//        position:absolute;
//        color:white;
//        z-index:5;
//        font-size:20px;
//        width:60%;
//        margin-top:15rem;

//    }

//     `;

    const Footer = styled.footer`
    height:20rem;
    width:100%;
    padding:1rem;
    background-color:#173825;
   
    `

function Home() {
  return (<>
  <NavHeader/>
  <MainHeader/>
     {/* <Header>
         <Search/>
         <h1>VEGETARISKA RECEPT</h1>
         <p>En kort text om vegetarsisk mat eller nått. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dicta! </p>
        <img src="https://static.vecteezy.com/ti/gratis-foton/p2/2248291-halsosam-mat-gronsaker-och-frukter-pa-en-svart-betong-bakgrund-gratis-fotona.jpg" alt=""/>  
     </Header> */}
     <FetchRecipes/>
     <Footer/>
  </>
  )
}

export default Home