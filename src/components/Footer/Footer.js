import React from 'react';

const Footer = () => {
  return (
    <div className='footer text-center p-5 bg-danger'>
        <img src={'https://www.themealdb.com/images/logo-tcdb.png'} alt="" />
        <img src={'https://www.themealdb.com/images/logo-tadb.png'} alt="" />
        <img src={'https://www.themealdb.com/images/logo-tsdb.png'} alt="" />
        <p><small className='text-white'>© 2022 TheMealDB
Development by Mohammad Faisal</small></p>
        
    </div>
  );
};

export default Footer;