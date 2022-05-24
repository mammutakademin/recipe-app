// import Rating from 'react-simple-star-rating';
import {useState} from 'react'
// import {useState, useEffect} from 'react';
import {FaStar} from 'react-icons/fa';
import styled from 'styled-components';
// import { RecipeType } from '../types';
// import {useParams} from 'react-router-dom';

const Label = styled.label`
   color: blue;
   svg {
       color: blue;
       cursor: pointer;
   }
   input {
       display: none;
   }
`
const StarContainer = styled.div`
 display: flex;
 align-items: center;
 font-size: 18px;
`

const StarRating = (props: any) => {
    const id = props.id
    // const params = useParams()

    const [ rating, setRating ] = useState<any>(null);
    const [ hover, setHover ] = useState<any>(null); 
  
    const handler = (rating: number, id: string) => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/recipes`, {
        method:'POST',
        headers: {"content-Type": "application/json"},
        body: JSON.stringify({
            ratings: rating,
            _id: id
        })
        }).then(() => {
         console.log(rating)  
    })
    };

    return (
        <StarContainer>{[...Array(5)].map((star, i)=>{
            const ratingValue:any = i + 1;
            return  (
            <Label>
                <input 
                type="radio"
                name="rating"
                value={ratingValue}
                // onClick={()=>[setRating(ratingValue)]}
                onClick={()=>[setRating(ratingValue), handler(rating, id)]}
               />
                <FaStar className="star"
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                size={25} 
                // size={30} 
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}/>
            </Label>
            );
        })}
         {rating}
        </StarContainer>
  
    );
  };

  export default StarRating;