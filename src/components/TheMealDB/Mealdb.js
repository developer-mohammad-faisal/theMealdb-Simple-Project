import React, { useEffect, useState } from 'react';
import Card from '../bootstrap-navbar/Mealdb-Card/Card';
import Details from '../Order-Details/Details';

const Mealdb = () => {

  const [cards, setCards] = useState([])
  const [detail ,setDetails] = useState([])

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then(res => res.json())
    .then(data => setCards(data.meals))
  }, [])

  const details = (product) => {
    // console.log(product);
    const newDetail = [...detail, product];
    setDetails(newDetail)
  }

  return (
   
  <div className='row w-100 mt-5'>
      <div className='col-md-10'>
      <div className='row row-cols-md-3'>
         {
           cards.map(card => <Card details={details} key={card.idMeal} card={card} ></Card>)
         }
     </div> 
      </div>

      <div className='col-md-2'> 
        <Details detail={detail} ></Details>
      </div>
  </div>

  );
};

export default Mealdb;