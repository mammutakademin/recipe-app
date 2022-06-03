import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
  }
  div {
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    img {
      width: 3rem;
    }
  }
`;

const NavHeader = () => {
  return (
    <>
      <Nav>
        <div>
          <NavLink to={`/`}>
              <img src={require("../assets/authentic cuisine.jpg")} alt="Home" />
          </NavLink>
          <p>About</p>
          <p>My Saved Recipe</p>
        </div>
      </Nav>
    </>
  );
};

export default NavHeader;
