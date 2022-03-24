import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Card.css'
const Card = (props) => {
  const {card, details} = props
  const {strMeal, strMealThumb, strInstructions } = card

  return (
        <div className="card m-4 w-25 card-style">
          <img src={strMealThumb} alt="" />
          <div className="card-body">
            <h5 className='name fw-bold'>{strMeal}</h5>
            {/* <p>{strInstructions.slice(0, 100)}</p> */}
            <button onClick={() => details(card)} className='btn btn-info'>Show Details <FontAwesomeIcon icon={faBowlFood} ></FontAwesomeIcon> </button>
          </div>
        </div>
  );
};

export default Card;