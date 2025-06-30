import { useContext } from 'react';
import { CoctailContext } from '../context/CoctailContext';
import Button from './Button';
import { buttonsConfig } from '../utils/constants';

const FilterButtons = () => {
  const { fetchCoctails } = useContext(CoctailContext);

  return (
    <section className="w-full flex items-center justify-center">
      <div className="container mx-auto flex flex-col items-center md:flex-row gap-4">
        {buttonsConfig.map((btn) => {
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
