/* import styled from 'styled-components';
import Title from './atoms/Title';

const LayoutWrapper = styled.div`
    background-image: url('./bg.jpg');
    background-size: 50%;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
`

interface LayoutProps {
    children?: React.ReactNode;
}

const LayoutTitle = ({ children }: LayoutProps) => (
    <Title>{children}</Title>
)

const StyledLayoutMain = styled.div`
    width: 90%;
`;

const LayoutMain = ({children}: LayoutProps) => (
    <StyledLayoutMain>{children}</StyledLayoutMain>
)

const StyledLayoutFooter = styled.div`
    width: 100%;
    margin-top: auto;
`;

const LayoutFooter = ({children}: LayoutProps) => (
    <StyledLayoutFooter>
        {children}
    </StyledLayoutFooter>
)

const Layout = ({ children }: LayoutProps) => (
    <LayoutWrapper>{children}</LayoutWrapper>
)

Layout.Title = LayoutTitle;
Layout.Main = LayoutMain;
Layout.Footer = LayoutFooter;

export default Layout; */

import { useState, useEffect } from 'react'
import { RecipeType } from '../types'
import styled from 'styled-components'

const Card = styled.div`
    background-color: white;
    margin-bottom: 5rem;
    text-align: center;
    color: #91ad76;
    font-size: 20px;
    font-family: Roboto;
    width: 18rem;
    height: 25rem;
    box-shadow: 0 2px 3px 0 rgb(0 0 0 / 23%);
    box-sizing: border-box;
    img {
        width: 100%;
        height: 70%;
        object-fit: cover;
    }
    div {
        height: 8rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

const Wrapper = styled.div`
margin: auto;
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
background-color: #e99340;
width: 90%
height: 100vh;
`;

const CategoryWrapper = styled.div`
display: flex;
margin: 2rem auto 5rem auto;
p {
    padding: 2rem;
    font-size: 24px;
}
`;

const Body = styled.main`
font-family: 'Lato',sans-serif;
font-weight: 300;
font-size: 20px;
line-height: 1.5;
color: #1c1c1c;
border-top: 4px solid #e99340;
display: flex;
flex-direction: column;
background-color: #91ad76;
height: 100vh;
color: #3f4532;
h3 {
    font-size: 35px;
    margin: auto;
    padding-top: 3rem;
}
padding: 1rem;
`;

const Layout = () => {
    const [ recipes, setRecipes ] = useState<RecipeType[]>([]);
    
    useEffect(() => {
        const loadRecipes = async () => {
            const res = await fetch('http://localhost:4000/recipes')
            .then(data => data.json());
            console.log(res, res.data)
            setRecipes(res);
        }
        loadRecipes()
    }, [])

    return (
        <>
            <Body>
            <h3>CATEGORIES</h3>
            <CategoryWrapper>
                <p>Soup</p>            
                <p>Pasta</p>            
                <p>Pie</p>            
                <p>Grytor</p>            
                <p>Halloumi</p>            
            </CategoryWrapper>

            <Wrapper>
                {recipes.map((recipe) => {
                    return (
                        <Card key={recipe._id}>
                            <img src={recipe.imageURL} width={200} alt="food" />
                            <div>
                                <p>{recipe.title}</p>
                                <p>{recipe.timeInMins} mins</p>
                            </div>
                        </Card>
                    )
                })}
            </Wrapper>
            </Body>
        </>
    )
    
}

export default Layout