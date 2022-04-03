import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Cart from '../Cart/Cart';

const Meals = () => {
    const [searchText,setSearch]=useState('')
    const [meals,setMeals]=useState([])
    useEffect(()=>{
 fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)  
 .then(res=>res.json())
 .then(data=>setMeals(data.meals))
    },[searchText])

    const searchFood=(e)=>{
       
        setSearch(e.target.value);
    }
    return (
        <div>
           <input className="bg-amber-300" onChange={searchFood} type="text" /> 
           <div>
           <div className="grid grid-flow-col gap-4">
            <div className="col-span-3 grid md:grid-cols-3">
                
            {
                meals.map(meal =><Meal meal={meal}></Meal>)
            }
            </div>
            <div className="row-span-1">
                <Cart></Cart>
            </div>
         </div>
           </div>
        
        </div>
    );
};

export default Meals;