import React from 'react';

const Meal = (props) => {
    const {strInstructions,strMeal}=props.meal;
    return (
        <div>
            <h1>{strMeal}</h1>
            <p>
                {strInstructions}
            </p>
        </div>
    );
};

export default Meal;