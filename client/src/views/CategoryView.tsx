import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { RecipeType } from '../types';
import styled from 'styled-components';
import NavHeader from '../components/NavHeader';
import MainHeader from '../components/Header';
import Categories from '../components/CategoryList';
import StarRating from '../components/StarRating';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #173825;
    /* background-color: #F9F8F1; */
    color: white;
    padding: 1rem;
    h3 {
        font-size: 35px;
        margin auto;
        padding-top: 3rem;
    }
    `;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Card = styled.div`
    margin: 1rem;
    background-color: white;
    color: #9B5400;
    font-size: 23px;
    width: 24.5rem;
    height: 32rem;
    box-sizing: border-box;
    box-shadow: 0 2px 3px 0 rbg(0 0 0 / 23%);
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
    background-color: #F9F8F1;
    max-width: 100%;
    a {
      text-decoration: none;
    }
`;

const CategoryView = () => {
  const { categoryName } = useParams()
  const [ categoryRecipe, setCategoryRecipe ] = useState<RecipeType[]>([]);

  useEffect(() => {
    const loadCategoryRecipe = async () => {
      /* fetch(`${process.env.REACT_APP_API_BASE_URL}/categories/${categoryName}/recipes`) */
      fetch(`${process.env.REACT_APP_API_BASE_URL}/category/${categoryName}/recipes`)
      .then(response => response.json())
      .then(data => setCategoryRecipe(data))
      // console.log(categoryName)
    }
    loadCategoryRecipe()
  }, [categoryName])

  return (
      <>
       <NavHeader/>
       <MainHeader/>
       <Main>
            <Categories/>
            <Wrapper>
              {categoryRecipe.map((recipe) => {
                return (
                <NavLink to = {`/recipes/${recipe._id}`}>
                {/* <NavLink to = {`/Recipe/${recipe._id}`}> */}
                  <Card key={recipe._id}>
                    <img src={recipe.imageURL} width={200} alt="recipe" />
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
            </Wrapper>
      </Main>
      </>
  )
}

export default CategoryView