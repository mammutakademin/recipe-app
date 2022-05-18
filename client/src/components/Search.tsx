import styled from 'styled-components'

const Input = styled.input`
margin-top: 28rem;
width:  30rem;
padding: 1rem 2rem;
position: absolute;
z-index: 5;
border-radius: 30px;
border: none;
font-size: 18px;
`;

const Search = ({inputText}: any) => {
    return (
        <Input type="text" placeholder='Search' onChange={(event) => 
            inputText(event.target.value)
        } />
    )
}

export default Search