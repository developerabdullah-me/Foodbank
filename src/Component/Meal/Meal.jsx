import React from 'react';

const Meal = (props) => {
    const {strMealThumb,strInstructions,strMeal}=props.meal;
    return (
        <div  >
         <div  className="text-center w-60 p-5">
           <img className="w-40  mx-auto " src={strMealThumb}></img>
         <h1>{strMeal}</h1>
            <p>
          {  strInstructions.length > 40 ? strInstructions.slice(0, 40) + '...' : strInstructions }
            </p>
            <button className="bg-amber-600 px-5 py-2 font-bold">Show Dtails</button>
         </div>
        </div>
    );
};

export default Meal;