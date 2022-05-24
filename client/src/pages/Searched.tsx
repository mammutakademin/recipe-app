import React from 'react';
import {useState, useEffect } from 'react'
import {useParams } from 'react-router-dom'
import styled from 'styled-components';
import {RecipeType} from '../types';
import { NavLink} from 'react-router-dom';
import NavHeader from '../components/NavHeader';
import MainHeader from '../components/Header';
import Categories from '../components/CategoryList';
import StarRating from '../components/StarRating';

const Card = styled.div`
margin-bottom:5rem;
text-align:center;
background-color:white;
color:#173825;
font-size:20px;
/* font-family:Roboto; */
width:17.5rem;
height:25rem;
box-sizing:border-box;
box-shadow: 0 2px 3px 0 rgb(0 0 0 / 23%);
img{
    width: 100%;
height: 70%;
object-fit:cover;
}
div{
    height: 8rem;
    padding: 1.3rem;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    text-decoration:none;
}
`;



const Wrapper = styled.div`
margin:auto;
display:flex;
justify-content:space-around;
align-items:center;
flex-wrap:wrap;
background-color:#F9F8F1;
width:90%;
a{
    text-decoration:none;
}
`;
const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

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
  


const Searched=()=> {

        const {searched}=useParams()

        console.log(searched)

        const [ searchedRecipe, setSearchedRecipe] = useState<RecipeType[]>([]);
      
        useEffect (()=>{
          const loadSearched = async ()=>{
            const res = await fetch (`http://localhost:4000/recipe/search/${searched}`)
            .then(data => data.json());
            console.log(res,res.data)
            setSearchedRecipe(res);
          }
          
          loadSearched();
      
        }, [searched])

  return (
      <>
      <NavHeader></NavHeader>
      <MainHeader/>
      
      <Main>
      <Categories/>
           
      <Wrapper>
                {searchedRecipe.map((recipe)=> {
                return(
                    <NavLink to ={`/Recipe/${recipe._id}`}>
                         <Card key={recipe._id}>
                            <img src={recipe.imageURL} width={200} alt="search"/> 
                            <section>
                                <Container>
                                    <StarRating />
                                    <p>{recipe.timeInMins}min</p>
                                </Container>
                                <p>{recipe.title}</p>
                            </section>       
                        </Card>
                    </NavLink>    
                 );
                })}
    </Wrapper>
</Main>

</>
   
  )
  }

export default Searched