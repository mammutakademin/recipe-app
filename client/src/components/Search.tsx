import styled from 'styled-components';
import { useState } from 'react'
// import {useState, useEffect} from 'react'
import { FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Form = styled.form`
    position: absolute;
    z-index: 5;
`

const Button = styled.button`
    z-index: 6;
    svg {
        color: grey;
        width: 1.5rem;
        height: 1.5rem;
    }
`

const Input = styled.input`
    margin-top: 28rem;
    width: 30rem;
    padding: 1rem 2rem;
    /* z-index:5; */
    border-radius: 30px;
    border: none;
    font-size: 18px;
    /* position: absolute; */
    `;

const Search = ({inputText}:any) => {
    const [ input, setInput ] = useState("")

    return (
        <>
        <Form>
             <Input type="text" placeholder="Search" onChange={(event) => setInput(event.target.value)}/>
             <NavLink to ={`/searched/${input}`}> <Button> <FaSearch></FaSearch></Button></NavLink>
        </Form>        
        </>     
    )
}

export default Search