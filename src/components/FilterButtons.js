import { useContext } from 'react';
import { CoctailContext } from '../context/CoctailContext';

const FilterButtons = ({ coctailsLength }) => {
  const { fetchCoctails, selectedFilter } = useContext(CoctailContext);

  const handleChange = (e) => {
    fetchCoctails(e.target.value);
  };

  return (
    <section className="w-full flex items-center justify-between">
      <div className="font-bold">{coctailsLength} cocktails</div>
      <select onChange={handleChange} value={selectedFilter}>
        <option value="/filter.php?c=Ordinary_Drink">Ordinary Drinks</option>
        <option value="/filter.php?c=Cocktail">Coctails</option>
        <option value="/filter.php?a=Non_Alcoholic">Non Alcoholic</option>
        <option value="/filter.php?a=Alcoholic">Alcoholic</option>
        <option value="/filter.php?c=Shot">Shots</option>
        <option value="/filter.php?c=Cocoa">Cocoa Drinks</option>
        <option value="/filter.php?c=Soft_Drink">Soft Drinks</option>
        <option value="/filter.php?c=Shake">Shake Drinks</option>
        <option value="/filter.php?c=Beer">Beer Drinks</option>
      </select>
    </section>
  );
};

export default FilterButtons;
