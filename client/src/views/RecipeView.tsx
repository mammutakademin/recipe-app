import React from 'react'
import styled from 'styled-components';
import NavHeader from '../components/NavHeader';
import { RecipeType } from '../types';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import StarRating from '../components/StarRating'
import { FaClock } from 'react-icons/fa';

const Main = styled.main`
    background-color: yellow;
    height: auto;
    display: flex;
    justify-content: center; 
    align-items: center; 
`;

const RecipeWrapper = styled.section`
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    width: 90%;
    height: auto;
    margin-top: 10%;
    img {
        width: 50%;
        height: 50%;
        object-fit: cover;    
    }
`;

const RecipeContent = styled.section`
    padding: 2.5rem;
    width: 50%;
    height: auto;
    font-size: 20px;
    h1 {
        font-size: 45px;
    }
    img {
        width: 20px;
        height: 20px;
    }
    div {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 5rem;
        font-size: 16px;
        font-weight: 700;
    }
    p {
        font-size: 20px;
    }
`;

const Ingredients = styled.div`
    width:  50%;
    padding: 2.5rem;
    h3 {
        font-size: 30px;
        margin-bottom: 1rem;
    }
`;

const IngredientsWrapper = styled.div`
width:100%;
background-color:white;
/* border-bottom: 1px solid grey; */
margin-top: 1rem;
letter-spacing: .0125rem;
font-size: 16px;
:nth-child(odd) {
    background: #f5f5f5
}
ul {
    display: flex;
    padding: 0.75rem 1.5rem;   
    span {
        display: flex;
        font-weight: 600;
        padding-right: 0.5rem;
    }
    li {
        list-style-type: none;
        padding: 0.1rem;
    }
}
    `;

const Instructions = styled.div`
width: 50%;
padding: 2.5rem;
h3 {
    font-size:30px;
    margin-bottom:1rem;
}
    `;
const InstructionsWrapper = styled.div`
width: 100%;
background-color: white;
/* border-bottom: 1px solid grey; */
/* margin-top: 1rem; */
letter-spacing: .0125rem;
font-size: 16px;
ul {
    display: flex;
    padding: 0.75rem 1.5rem;   
    span {
        display: flex;
        padding-right :0.5rem;
    }
    li {
        list-style-type: none;
        padding: 0.1rem;
    }
}
`;

const RecipeView = () => {

    const params = useParams()

    const [recipe, setRecipe] = useState<RecipeType>();
    // const [rating, setRating] = useState(0)

    useEffect(() => {
        const loadRecipe = async () => {
            fetch(`${process.env.REACT_APP_API_BASE_URL}/recipes/${params.id}`)
            .then(response => response.json())
            .then(data => setRecipe(data[0]))
        }
        loadRecipe();
    }, [params.id])

    return (<>
        <h1>RECIPE PAGE</h1>
        <NavHeader></NavHeader>
        <Main>
            {recipe &&

                <RecipeWrapper>
                    <p key={ recipe._id }> </p>
                    <img src={ recipe.imageURL } alt="recipe" />
                    <RecipeContent>
                        <h1>{ recipe.title }</h1>
                        <StarRating/>
                        <div>
                            <FaClock />
                            <p>{ recipe.timeInMins }min</p>
                        </div>
                        <p>{ recipe.description }</p>
                    </RecipeContent>
                    <Ingredients>
                        <h3>Ingredients</h3>
                        <div>
                            {recipe.ingredients.map((obj: any) => {
                                console.log(obj)
                                const list = (
                                    <IngredientsWrapper key={obj.id}>
                                    <ul>
                                        <span>
                                            <li> {obj.amount} </li>
                                            <li> {obj.unit} </li>
                                        </span>
                                      <li> {obj.ingredient} </li>  
                                    </ul>
                                    </IngredientsWrapper>
                                );
                                return list;
                            })}   
                        </div>
                    </Ingredients>
                   
                    <Instructions>
                    <h3>Instructions</h3>
                        <div>
                            {recipe.instructions.map((obj: any) => {
                                console.log(obj)
                                const list = (
                                    <InstructionsWrapper key={obj.id}>
                                    <ul>
                                        <span>
                                            <li>{ obj.order }.</li>
                                            <li>{ obj.instruction } </li>
                                        </span> 
                                    </ul>
                                    </InstructionsWrapper>
                                );
                                return list;
                            })}   
                        </div>
                    </Instructions>
                </RecipeWrapper>
            }
        </Main>
    </>
    )
}

export default RecipeView