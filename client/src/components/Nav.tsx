import styled from 'styled-components';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const StyledNav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-decoration: none;
    & .nav-item{
        :hover{
            cursor: pointer;
        }
    }
    & p{
        margin: 0.5rem;
        text-decoration: none;
    }
    `

const Nav = () => {
    const [showSidebar, setShowSidebar] = useState<boolean>(true);
    const [categories, setCategories] = useState<any[]>([]);
    useEffect(() => { 
        const fetchCategories = async () => {
            const categories = await fetch('http://localhost:4000/category')
            .then(res => res.json())
            setCategories(categories);
        }
        fetchCategories();
        }, [])
    return (
        <StyledNav>
           
        <div>
        {/* onClick={() => setShowSidebar(!showSidebar)} */}
            {/* <h3 className="nav-item">Categories</h3> */}
            {showSidebar && categories.map((category):any => <Link to={`/category/${category._id}`}> <p key={category}>{category._id} ({category.count})</p> </Link>)}
           
        </div>
        </StyledNav>
    )
}
export default Nav;