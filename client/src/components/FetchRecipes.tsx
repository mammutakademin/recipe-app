import { useState, useEffect } from "react";
import { RecipeType } from "../types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Categories from "../components/CategoryList";
import StarRating from "../components/StarRating";

const Card = styled.div`
  margin: 1rem;
  background-color: white;
  color: #173825;
  font-size: 23px;
  font-family: 'Pacifico', cursive;
  width: 24.5rem;
  height: 32rem;
  box-sizing: border-box;
  box-shadow: 0 2px 3px 0 rgb(0 0 0 / 23%);
  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
  }
  section {
      padding: 1.5rem;
      height: 8rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }
  :hover {
    opacity: 0.7;
  }
`;

const RecipeWrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  /* justify-content: space-around; */
  align-items: center;
  flex-wrap: wrap;
  background-color: #f9f8f1;
  max-width: 100%;
  /* width: 90%; */
  a {
    text-decoration: none;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.main`
  border-top: 4px solid #f9f8f1;
  display: flex;
  flex-direction: column;
  background-color: #e4910272;
  color: #173825;
  padding: 1rem;
  h3 {
    font-size: 35px;
    margin: auto;
    padding-top: 3rem;
  }
`;

const FetchRecipes = () => {
  const [ recipes, setRecipes ] = useState<RecipeType[]>([]);

  useEffect(() => {
    const loadRecipes = async () => {
      fetch(`${process.env.REACT_APP_API_BASE_URL}/recipes`)
      .then(response => response.json())
      .then((data) => setRecipes(data))
    };

    loadRecipes();
  }, []);

  return (
    <>
      <Main>
        <Categories />
          <RecipeWrapper>
          {recipes.map((recipe) => {
            return (
              <NavLink to={`/recipe/${recipe._id}`} key={recipe._id}>
                <Card>
                  <img src={recipe.imageURL} width={200} height={300} alt="recipe" />
                  <section>
                      <Container>
                          <StarRating />
                          <p>{recipe.timeInMins} min</p>
                      </Container>
                      <p>{recipe.title}</p>
                  </section>
                </Card>
              </NavLink>
            );
          })}
        </RecipeWrapper>
      </Main>
    </>
  );
};

export default FetchRecipes;
