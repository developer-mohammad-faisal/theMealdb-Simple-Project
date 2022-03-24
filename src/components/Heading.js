import React from 'react';

const Heading = () => {
  return (
    <div className='text-center text-white mt-5 w-100 row'>
       <div className="col-md-4">
            <img src={'https://www.themealdb.com/images/meal-icon.png'} alt="" />
       </div>
       <div className="col-md-4">
       <h3>Welcome to TheMealDB</h3>
        <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
            We also offer a free JSON API for anyone wanting to use it, with additional features for subscribers. <br />
            Click to Support: Currently 650 supporters</p>
       </div>
       <div className="col-md-4">
            <img src={'https://www.themealdb.com/images/meal-icon.png'} alt="" />
       </div>
       <hr />
    </div>
  );
};

export default Heading;