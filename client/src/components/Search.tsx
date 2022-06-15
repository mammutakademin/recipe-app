import styled from 'styled-components';
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Form = styled.form`
    position: absolute;
    z-index: 5;
    div {
        position: relative;
    }
`;

const Button = styled.button`
    z-index: 6;
    display: none;
    svg {
        color: grey;
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        right: 25px;
    }
`;

const Input = styled.input`
    flex-grow: 2;
    margin-top: 28rem;
    width: 30rem;
    padding: 1rem 2rem;
    border-radius: 30px;
    border: none;
    font-size: 18px;
`;

const Search = ({inputText}: any) => {
    const [ input, setInput ] = useState("")
    return (
        <>
        <Form>
            <div>
                <Input type="text" placeholder="Search" onChange={(event) => setInput(event.target.value)} />
                <NavLink to={`/searched/${input}`}>
                    <FaSearch></FaSearch>
                    <Button></Button>
                </NavLink>
            </div>
        </Form>        
        </>     
    )
}

export default Search