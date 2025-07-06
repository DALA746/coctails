import { useContext } from 'react';
import { CoctailContext } from '../context/CoctailContext';
import { buttonsConfig } from '../utils/constants';

const FilterButtons = ({ coctailsLength }) => {
  const { fetchCoctails, selectedFilter } = useContext(CoctailContext);

  const handleChange = (e) => {
    fetchCoctails(e.target.value);
  };

  return (
    <section className="w-full flex items-center justify-between">
      <div className="font-bold">{coctailsLength} cocktails</div>
      <select onChange={handleChange} value={selectedFilter}>
        {buttonsConfig.map((button) => (
          <option key={button.id} value={button.endpoint}>
            {button.buttonName}
          </option>
        ))}
      </select>
    </section>
  );
};

export default FilterButtons;
