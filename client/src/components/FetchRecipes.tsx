import { useState, useEffect } from "react";
import { RecipeType } from "../types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Categories from "../components/CategoryList";
import StarRating from "../components/StarRating";

const Card = styled.div`
  /* margin-bottom: 5rem; */
  margin: 1rem;
  /* text-align: center; */
  background-color: white;
  color: #173825;
  font-size: 23px;
  /* font-size: 20px; */
  font-family: Roboto;
  width: 24.5rem;
  /* width: 17.5rem; */
  height: 32rem;
  /* height: 25rem; */
  box-sizing: border-box;
  box-shadow: 0 2px 3px 0 rgb(0 0 0 / 23%);
  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
  }
  section {
      padding: 1.5rem;
      height: 25%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }
  /* div {
    height: 8rem;
    padding: 1.3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
  } */
  :hover {
    opacity: 0.7;
  }
`;

const CategoryWrapper = styled.div`
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

/* const CategoryWrapper = styled.div`
  display: flex;
  margin: 2rem auto 5rem auto;
  p {
    padding: 1.3rem;
    font-size: 24px;
  }
`; */

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.main`
  /* border-top: 4px solid #e4910272; */
  display: flex;
  flex-direction: column;
  background-color: #f9f8f1;
  /* height: 100vh; */
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
      const res = await fetch("http://localhost:4000/recipes").then((data) =>
        data.json()
      );
      console.log(res, res.data);
      setRecipes(res);
    };

    loadRecipes();
  }, []);

  return (
    <>
      <Main>
        <Categories />
        {/* <h3>CATEGORIES</h3> */}

        {/* <CategoryWrapper>
          {<p>Appetizer</p>
          <p>Soup</p>
          <p>Grill</p>
          <p>Pasta</p>
          <p>Dessert</p>}
        </CategoryWrapper> */}

        <CategoryWrapper>
          {recipes.map((recipe) => {
            return (
              <NavLink to={`/Recipe/${recipe._id}`}>
                <Card key={recipe._id}>
                  <img src={recipe.imageURL} width={200} alt="recipe" />
                  {/* <div>
                    <p>{recipe.title}</p>
                    {<p>{recipe.timeInMins}min</p>}
                  </div> */}
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
        </CategoryWrapper>
      </Main>
    </>
  );
};

export default FetchRecipes;
