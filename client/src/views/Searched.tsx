import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import styled from "styled-components";
import { RecipeType } from "../types";
import NavHeader from "../components/NavHeader";
import MainHeader from "../components/Header";
import Categories from "../components/CategoryList";
import StarRating from "../components/StarRating";

const Card = styled.div`
  margin: 1rem;
  background-color: white;
  color: #173825;
  font-size: 23px;
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
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  :hover {
    opacity: 0.7;
  }
`;

const Wrapper = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #f9f8f1;
  max-width: 100%;
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
  display: flex;
  flex-direction: column;
  background-color: #f9f8f1;
  color: #173825;
  padding: 1rem;
  h3 {
    font-size: 35px;
    margin: auto;
    padding-top: 3rem;
  }
`;

const Searched = () => {
  const { searched } = useParams();
  console.log(searched);
  const [ searchedRecipe, setSearchedRecipe ] = useState<RecipeType[]>([]);

  useEffect(() => {
    const loadSearched = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/recipes/search/${searched}`
      ).then((data) => data.json());
      console.log('Searched recipes', res, res.data);
      setSearchedRecipe(res);
    };

    loadSearched();
  }, [searched]);

  return (
    <>
      <NavHeader />
      <MainHeader />
      <Main>
        <Categories />
        <Wrapper>
          {searchedRecipe.map((recipe) => {
            return (
              <NavLink to={`/recipes/${recipe._id}`} key={recipe._id}>
                <Card>
                  <img src={recipe.imageURL} width={200} alt="recipe" />
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
          })};
        </Wrapper>
      </Main>
    </>
  );
};

export default Searched;
