import React, { useEffect, useState } from 'react';

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
           <h1>
               mels{meals.length}
               
           </h1>
        </div>
    );
};

export default Meals;