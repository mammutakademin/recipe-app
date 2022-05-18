import React from 'react'
import styled from 'styled-components'
// import Search from '../components/Search'
// import FetchRecipes from '../components/MainPage'

const Header = styled.header`
width: 100%;
height: 650px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
img {
    width: 100%;
    height: 100%;
    background-size: cover;
    object-fit: cover;
    filter: brightness(70%);
    position: relative;
    z-index: 2;
};
h1 {
    font-family: Roboto;
    position: absolute;
    color: white;
    z-index: 5;
    font-size: 68px;
};
p {
    position: absolute;
    color: white;
    z-index: 5;
    font-size: 20px;
    width: 60%;
    margin-top: 15rem;
};
`;

const Nav = styled.nav`
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
z-index: 1000;
height: 5rem;
background-color: white;
width: 100%;
padding: 1rem;
color: #173825;
p {
    font-size: 20px;
    font-weight: 700;
};
div {
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    img {
        width: 3rem;
    };
};
`;

const Footer = styled.footer`
height: 20rem;
width: 100%;
padding: 1rem;
background-color: #173825;
`;

function Home() {
    return (
        <>
            <Nav>
                <div>
                    <p>Recipe</p>
                    <p>About</p>
                    <img src={require('../assets/hero.jpg')} alt="recipe" />
                    <p>Inspiration</p>
                    <p>Common Questions</p>
                </div>
            </Nav>
            <Header>
                {/* <Search /> */}
                <h1>Healthy Food Recipe</h1>
                <p>Healthy and easy to cook</p>
                <img src="" alt="" />
            </Header>
            {/* <FetchRecipes /> */}
            <Footer />
        </>
    )
}

export default Home