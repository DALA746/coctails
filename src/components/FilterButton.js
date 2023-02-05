import React, { useContext } from 'react';
import { CoctailContext } from '../contexts/CoctailContext';
import Button from './Button';

const FilterButtons = () => {
  const { fetchCoctails } = useContext(CoctailContext);
  return (
    <section className="w-full flex  items-center justify-center">
      <div className="container mx-auto flex flex-col items-center md:flex-row gap-8">
        <Button
          onClick={(e) => fetchCoctails('/filter.php?c=Cocktail')}
          btnText="Coctails"
        />
        <Button
          onClick={() => fetchCoctails('/filter.php?c=Ordinary_Drink')}
          btnText="Drinks"
        />
        <Button
          onClick={() => fetchCoctails('/filter.php?a=Non_Alcoholic')}
          btnText="Non alcoholic"
        />
        <Button
          onClick={() => fetchCoctails('/filter.php?a=Alcoholic')}
          btnText="Alcoholic"
        />
      </div>
    </section>
  );
};

export default FilterButtons;
