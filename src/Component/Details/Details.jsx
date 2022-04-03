import React from 'react';

const Details = (props) => {
    const {strMealThumb,strInstructions,strMeal}=props.shows;
    return (
        <div>
            <h1>{strMeal}</h1>
        </div>
    );
};

export default Details;