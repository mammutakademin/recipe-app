// import Rating from 'react-simple-star-rating'
import {useState} from 'react'
// import {useState, useEffect} from 'react'
import {FaStar} from 'react-icons/fa'
import styled from 'styled-components';

const Label =styled.label`
   color:blue;
   svg{
       color:blue;
       cursor: pointer;
   }
   input{
       display:none;
   }
`
const StarContainer =styled.div`
 display:flex;
 align-items:center;
 font-size:18px;
`

const StarRating =()=> {
    const [rating, setRating] = useState<any>(null);
    const [hover, setHover] = useState<any>(null); 
  
  
    // const handler =(rat:any)=>{
    // fetch('http://localhost:4000/recipes'),{
    //     metod:'POST',
    //     headers: {"content-Type": "application/json"},
    //     body:JSON.stringify(rat)
    // }

    // };
  
    return (
        <StarContainer>{[...Array(5)].map((star,i)=>{
            const ratingValue:any = i +1;
            return  (
            <Label>
                <input 
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={()=>[setRating(ratingValue)]}
                // onClick={()=>[setRating(ratingValue), handler(rating)]}
               />
                <FaStar className="star"
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                size={30} 
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={()=> setHover(null)}/>
            </Label>
            );
        })}
         {rating}
        </StarContainer>
    
    );
  };
  export default StarRating;