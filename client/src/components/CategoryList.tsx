import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { RecipeType } from "../types";

const CategoryWrapper = styled.div`
  display: flex;
  margin: 2rem auto 5rem auto;

  ul {
    list-style-type: none;
    color: black;
  }

  a {
    text-decoration: none;
  }

  p {
    padding: 1.3rem;
    font-size: 24px;
  }
`;

const LiStyle = styled.li`
text-transform: uppercase;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
background-color: white;
color: black;
border-radius: 16px;
padding: 0.5rem 1.5rem;
cursor: pointer;
box-shadow: 0 0.0625rem 0.125rem 0 rgb(0 0 0 / 6%);
span {
  padding-left: 0.4rem;
}
:hover {
  background-color: #173825;
}
`

const Categories = () => {
  const [ categories, setCategory ] = useState<RecipeType[]>([]);

  useEffect(() => {
    const loadCategory = async () => {
      fetch(`${process.env.REACT_APP_API_BASE_URL}/category`)
      .then(response => response.json())
      .then(data => setCategory(data));
    };
    loadCategory();
  }, []);

  return (
    <>
      <h3>CATEGORIES</h3>
      <CategoryWrapper>
        {categories.map((category: any) => {
          const recipeItem = (
            <NavLink to={`/category/${category._id}`} key={category}>
              <ul>
                <LiStyle>
                  {category._id}<span>({category.count})</span>
                </LiStyle>
              </ul>
            </NavLink>
          );
          return recipeItem;
        })}
      </CategoryWrapper>
    </>
  );
};

export default Categories;