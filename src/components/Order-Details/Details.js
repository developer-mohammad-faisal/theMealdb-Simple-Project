import React from 'react';
import './Details.css'

const Details = ({detail}) => {
  console.log(detail);
  let name = '';
  let id;  
  let img = ''
  let area = ''
  for (const info of detail){
    name = info.strMeal;
    id = info.idMeal
    img = info.strMealThumb
    area = info.strArea
  }

  return (
    <div className='details'>
        <h3>Details</h3>
        <h4>Name: {name}</h4>
        <h6>ID: {id}</h6>
        <h5>Area: {area}</h5>
        <img src={img} alt="" />
    </div>
  );
};

export default Details;