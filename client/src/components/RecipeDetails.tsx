import { useState, useEffect } from "react";
import { useParams }  from 'react-router-dom';
import styled from "styled-components";
// import { fetchRecipe } from '../api/index';
// import { Link } from "react-router-dom";
// import Ratings from "./Ratings";

const StyledRecipeView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 50%;
    /* max-width: 100%; */
    margin: 2rem;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 2px;
    box-shadow: 0px 0px 10px #ccc;
    img {
        width: 80%;
        /* width: 50%; */
    }
    li {
        padding: 0.5rem;
        padding-right: 7rem;
    }
    `
    
const RecipeDetails = () => {
    const [ recipe, setRecipe ] = useState<any>({});
    const { id } = useParams();
    useEffect(() => {
        const fetchRecipe = async () => {
            const recipe = await fetch(`http://localhost:3000/recipes/${id}`)
            .then(res => res.json())
            setRecipe(recipe);
        }
        fetchRecipe();
    }, [id]);
    // const [ voted, setVoted ] = useState(false)
    // const setClicked = () => {
    //     setVoted(true)
    // }
    return (
        <StyledRecipeView>
            <h1>{recipe.title}</h1>
            <img src={recipe.imageURL} alt="recipe" />
            <p>{recipe.description}</p>
            <div>
                <h2>{recipe.ingredients && recipe.ingredients.length} Ingredients | {recipe.timeInMins} minutes</h2>
                {/* {(voted === false) ? <><h3>Rate it</h3> */}
                {/* <span onClick={setClicked}>{recipe.ratings && <Ratings edit={true} recipeId={recipe._id} recipeRatings={recipe.ratings} />}</span> */}
                {/* <Ratings recipeRatings={recipe.ratings} recipeId={recipe._id} edit={false}/> */}
                {/* <p className="ratings-number">{recipe.ratings.length} Ratings</p> */}
            </div>
        </StyledRecipeView>
    )
}

export default RecipeDetails;