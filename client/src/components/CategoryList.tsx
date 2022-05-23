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
// const CategoryStyle=styled.div`
// width:100px;
// background-color:blue;
// `

const Categories = () => {
  const [categories, setCategory] = useState<RecipeType[]>([]);

  useEffect(() => {
    const loadCategory = async () => {
      const res = await fetch("http://localhost:4000/category").then((data) =>
        data.json()
      );
      console.log(res, res.data);
      setCategory(res);
    };
    loadCategory();
  }, []);

  return (
    <>
      <h3>CATEGORIES</h3>
      <CategoryWrapper>
        {categories.map((category: any) => {
          const Li = (
            <NavLink to={`/category/${category._id}`}>
              <ul key={category}>
                <li>
                  {category._id}
                  <span>({category.count})</span>{" "}
                </li>
              </ul>
            </NavLink>
          );
          return Li;
        })}
      </CategoryWrapper>
    </>
  );
};

export default Categories;
