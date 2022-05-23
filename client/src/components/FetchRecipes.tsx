import { useState, useEffect } from 'react'
import { RecipeType } from '../types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Categories from '../components/CategoryList';


    const Card = styled.div`
    margin-bottom: 5rem;
    text-align: center;
    background-color: white;
    color: #173825;
    font-size: 20px;
    font-family: Roboto;
    width: 17.5rem;
    height: 25rem;
    box-sizing: border-box;
    box-shadow: 0 2px 3px 0 rgb(0 0 0 / 23%);
    img {
        width: 100%;
        height: 70%;
        object-fit: cover;
    }
    div {
        height: 8rem;
        padding: 1.3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-decoration: none;
    }
    `;

    const Wrapper = styled.div`
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    background-color: #F9F8F1;
    width: 90%;
    a {
        text-decoration: none;
    }
    `;

    const CategoryWrapper = styled.div`
    display: flex;
    margin: 2rem auto 5rem auto;
    p {
        padding: 1.3rem;
        font-size: 24px;
    }

    `;

    const Main = styled.main`
     border-top: 4px solid #e4910272;
    display: flex;
    flex-direction: column;
    background-color: #F9F8F1;
    /* height: 100vh; */
    color: #173825;
    h3 {
        font-size: 35px;
        margin: auto;
        padding-top: 3rem;
    
    }
    padding: 1rem;
    `;
  
    
const FetchRecipes =()=> {
    const [ recipes, setRecipes ] = useState<RecipeType[]>([]);
  
    useEffect (()=>{
      const loadRecipes = async ()=>{
        const res = await fetch ('http://localhost:4000/recipes')
        .then(data => data.json());
        console.log(res, res.data)
        setRecipes(res);
      }
      
      loadRecipes();
  
    }, [])

  
    return<>
        <Main>
        <Categories/>
            <h3>CATEGORIES</h3>
    
                <CategoryWrapper>
                  <p>Appetizer</p>
                  <p>Soup</p>
                  <p>Grill</p>
                  <p>Pasta</p>
                  <p>Dessert</p>
                </CategoryWrapper>

            <Wrapper>
                {recipes.map((recipe)=> {
                return(
                    <NavLink to ={`/Recipe/${recipe._id}`}>
                         <Card key={recipe._id}>
                            <img src={recipe.imageURL} width={200} alt=""/> 
                            <div>
                                <p>{recipe.title}</p>
                                {/* {<p>{recipe.timeInMins}min</p>} */}
                            </div>       
                        </Card>
                    </NavLink>    
                 );
                 })}
            </Wrapper>
        </Main>
           
    </>
    }

   
  export default FetchRecipes;