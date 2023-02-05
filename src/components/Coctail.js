import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Coctail = ({ coctail }) => {
  const { strDrinkThumb, strDrink, idDrink } = coctail;
  //const { fetchByID } = useContext(CoctailContext);

  return (
    <Link to={`/drinks/${idDrink}`}>
      <div className="hover:scale-105 hover:drop-shadow-xl transition-all">
        <div>
          <img
            src={strDrinkThumb}
            alt={strDrink}
            className="group-hover:scale-110 transition duration-300"
          />
        </div>
        <h1 className="text-base font-medium mb-8 mt-4 max-w-[450px] mx-auto lg:mx-0">
          {strDrink}
        </h1>
        <p></p>
      </div>
    </Link>
  );
};

export default Coctail;
