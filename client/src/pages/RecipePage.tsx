import React from 'react'
import styled from 'styled-components';
import NavHeader from '../components/NavHeader';
import { RecipeType } from '../types';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import StarRating from '../components/StarRating'

const Main = styled.main`
    background-color: #F9F8F1;
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
/* margin-top: 1rem; */
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
    /* margin-bottom:1rem; */
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


const Recipe = () => {

    const params = useParams()

    const [recipe, setRecipe] = useState<RecipeType>();
    // const [rating, setRating] = useState(0)

    useEffect(() => {
        const loadRecipe = async () => {
            const res = await fetch(`http://localhost:4000/recipes/${params.id}`)
                .then(data => data.json());
            console.log(res, res.data)
            setRecipe(res);
        }

        loadRecipe();

    })
    // }, [])

    return (<>
        <h1>RECIPE PAGE</h1>
        <NavHeader></NavHeader>
        <Main>
            {recipe &&

                <RecipeWrapper>
                    <p key={recipe._id}> </p>
                    <img src={recipe.imageURL} alt="" />

                    <RecipeContent>
                        <h1>{recipe.title}</h1>
                        <StarRating/>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 0C8.73478 0 8.48043 0.105357 8.29289 0.292893C8.10536 0.48043 8 0.734784 8 1C8 1.26522 8.10536 1.51957 8.29289 1.70711C8.48043 1.89464 8.73478 2 9 2H15C15.2652 2 15.5196 1.89464 15.7071 1.70711C15.8946 1.51957 16 1.26522 16 1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0H9ZM12 9C12.2652 9 12.5196 9.10536 12.7071 9.29289C12.8946 9.48043 13 9.73478 13 10V16C13 16.2652 12.8946 16.5196 12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16V10C11 9.73478 11.1054 9.48043 11.2929 9.29289C11.4804 9.10536 11.7348 9 12 9V9ZM24 16C24 22.627 18.627 28 12 28C5.373 28 0 22.627 0 16C0 9.373 5.373 4 12 4C18.627 4 24 9.373 24 16ZM22 16C22 10.477 17.523 6 12 6C6.477 6 2 10.477 2 16C2 21.523 6.477 26 12 26C17.523 26 22 21.523 22 16ZM22.708 4.293C22.6158 4.19749 22.5054 4.12131 22.3834 4.0689C22.2614 4.01649 22.1302 3.9889 21.9974 3.98775C21.8646 3.9866 21.7329 4.0119 21.61 4.06218C21.4872 4.11246 21.3755 4.18671 21.2816 4.2806C21.1877 4.3745 21.1135 4.48615 21.0632 4.60905C21.0129 4.73194 20.9876 4.86362 20.9888 4.9964C20.9899 5.12918 21.0175 5.2604 21.0699 5.3824C21.1223 5.50441 21.1985 5.61475 21.294 5.707L23.294 7.707C23.3869 7.79984 23.4972 7.87348 23.6186 7.9237C23.7399 7.97392 23.87 7.99975 24.0014 7.9997C24.1327 7.99966 24.2628 7.97374 24.3841 7.92343C24.5054 7.87312 24.6157 7.79941 24.7085 7.7065C24.8013 7.61359 24.875 7.5033 24.9252 7.38193C24.9754 7.26057 25.0012 7.13049 25.0012 6.99915C25.0012 6.8678 24.9752 6.73774 24.9249 6.61641C24.8746 6.49508 24.8009 6.38484 24.708 6.292L22.708 4.292V4.293Z" fill="#173825" />
                            </svg>
                            <p>{recipe.timeInMins}min</p>
                        </div>
                        <p>{recipe.description}</p>
                    </RecipeContent>

                    <Ingredients>
                        <h3>Ingredients</h3>
                        <div>
                            {recipe.ingredients.map((obj: any) => {
                                console.log(obj)
                                const list = (
                                    <IngredientsWrapper>
                                    <ul key={obj.id}>
                                        <span>
                                            <li>{obj.amount} </li>
                                            <li>{obj.unit} </li>
                                        </span>
                                      <li>{obj.name} </li>  
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
                                    <InstructionsWrapper>
                                    <ul key={obj.id}>
                                        <span>
                                            <li>{obj.order}.</li>
                                            <li>{obj.instructions} </li>
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

export default Recipe