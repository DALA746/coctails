import React from 'react';
import { Link } from 'react-router-dom';

const Coctail = ({ coctail }) => {
  const { strDrinkThumb, strDrink, idDrink } = coctail;

  return (
    <Link to={`/drinks/${idDrink}`}>
      <div className="border-2 border-secondary bg-secondary rounded hover:scale-105 hover:drop-shadow-xl transition-all lg:h-[340px]">
        <div>
          <img
            src={strDrinkThumb}
            alt={strDrink}
            className="group-hover:scale-110 transition duration-300"
          />
        </div>
        <h1 className="text-palePink text-base font-bold mb-8 mt-4 max-w-[450px] mx-auto lg:mx-0 p-2 ">
          {strDrink}
        </h1>
      </div>
    </Link>
  );
};

export default Coctail;
