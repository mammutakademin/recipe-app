import React from 'react'
import ReactStars from 'react-stars'
import styled from 'styled-components'
import {postRating} from '../api/index'

interface ratingProps {
    recipeRatings: number[]
    recipeId: string
    edit: boolean
}
// const ratingChanged = ({newRating}: any) => {
//   console.log(newRating)
// }

const calculateAverage = (rating: any) => {
    const middleValue = rating.reduce((a: number, b: number) => a + b);
    return middleValue / rating.length;
};

const StyledStars = styled(ReactStars)`
    display: flex;
    justify-content: center;
`

const starColor = '#ff0000';
const emptyStarColor = '#ffffff'

const Rating = ({ recipeRatings, recipeId, edit }: ratingProps) => {

    const ratingChanged = async (newRating: any) => {
        console.log(newRating, recipeId)
        await postRating(recipeId, newRating);
    }
    return (
        <StyledStars
            count={5}
            value={calculateAverage(recipeRatings)}
            color1={emptyStarColor}
            color2={starColor}
            size={40}
            edit={edit}
            half={false}
            onChange={ratingChanged}
        />
    )
}
export default Rating