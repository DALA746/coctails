import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CoctailContext } from '../context/CoctailContext';

const Coctail = ({ coctail }) => {
  const { strDrinkThumb, strDrink, idDrink } = coctail;
  const { fetchByID } = useContext(CoctailContext);

  return (
    <Link to={`/drinks/${idDrink}`} onClick={() => fetchByID(idDrink)}>
      <div className="border-2 border-secondary rounded hover:scale-105 hover:drop-shadow-xl transition-all">
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
