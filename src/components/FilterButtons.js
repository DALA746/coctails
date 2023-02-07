import React, { useContext } from 'react';
import { CoctailContext } from '../context/CoctailContext';
import Button from './Button';

const FilterButtons = () => {
  const { fetchCoctails } = useContext(CoctailContext);

  const buttons = [
    {
      id: 1,
      buttonName: 'Coctails',
      endpoint: '/filter.php?c=Cocktail'
    },
    {
      id: 2,
      buttonName: 'Drinks',
      endpoint: '/filter.php?c=Ordinary_Drink'
    },
    {
      id: 3,
      buttonName: 'Non alcoholic',
      endpoint: '/filter.php?a=Non_Alcoholic'
    },
    {
      id: 4,
      buttonName: 'Alcoholic',
      endpoint: '/filter.php?a=Alcoholic'
    }
  ];

  return (
    <section className="w-full flex  items-center justify-center">
      <div className="container mx-auto flex flex-col items-center md:flex-row gap-8">
        {buttons.map((btn) => {
          return (
            <Button
              key={btn.id}
              onClick={() => fetchCoctails(btn.endpoint)}
              btnText={btn.buttonName}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FilterButtons;
