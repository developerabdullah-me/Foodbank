import React from 'react';

const Meal = (props) => {
  const {handelShowDetails,meal}=props;
    const {strMealThumb,strInstructions,strMeal}=meal;
    return (
        <div >
         <div  className="text-center w-82 py-3 px-0 shadow-lg">
           <img className="w-52  mx-auto " src={strMealThumb}/>
         <h1>{strMeal}</h1>
            <p>
          {  strInstructions.length > 40 ? strInstructions.slice(0, 40) + '...' : strInstructions }
            </p>
            
            <button onClick={()=>handelShowDetails()} className="bg-amber-600 px-5 py-2 font-bold">Show Details</button>
         </div>
        </div>
    );
};

export default Meal;