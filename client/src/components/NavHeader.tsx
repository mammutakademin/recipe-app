// import styled from 'styled-components';
// import {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';

// const StyledNav = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: flex-start;
//     text-decoration: none;
//     & .nav-item{
//         :hover{
//             cursor: pointer;
//         }
//     }
//     & p{
//         margin: 0.5rem;
//         text-decoration: none;
//     }
//     `

// const Nav = () => {
//     const [showSidebar, setShowSidebar] = useState<boolean>(true);
//     const [categories, setCategories] = useState<any[]>([]);
//     useEffect(() => { 
//         const fetchCategories = async () => {
//             const categories = await fetch('http://localhost:4000/category')
//             .then(res => res.json())
//             setCategories(categories);
//         }
//         fetchCategories();
//         }, [])
//     return (
//         <StyledNav>
           
//         <div
//         onClick={() => setShowSidebar(!showSidebar)}>
//             <h3 className="nav-item">Categories</h3>
//             {showSidebar && categories.map((category):any => <Link to={`/category/${category._id}`}> <p key={category}>{category._id} ({category.count})</p> </Link>)}
           
//         </div>
//         </StyledNav>
//     )
// }
// export default Nav;

import styled from 'styled-components';
import { NavLink} from 'react-router-dom';

const Nav = styled.nav`
    display:flex;
    justify-content:center;
    align-items:center;
  
    position: fixed;
    top: 0;
    z-index: 1000;
    height:5rem;
    background-color:white;
    width:100%;
    padding:1rem;
    color:#173825;
    p{
        font-size:20px;
        font-weight: 700;
    }
    div{
        margin:auto;
        display:flex;
        justify-content:space-around;
        align-items:center;
        width:90%;
        img{
            width:3rem;
        }
    }
    `


const NavHeader = () =>{

    return(<>
        <Nav>
               <div>
                    <NavLink to ={`/`}> <img src={require('../assets/authentic cuisine.jpg')} alt="" />
                    </NavLink>
                    <p>About</p>
                    <p>My Saved Recipe</p>
               </div>
         </Nav>
         </>
    )   
}

export default NavHeader