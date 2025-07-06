import { useContext, useState, useEffect } from 'react';
import { CoctailContext } from '../context/CoctailContext';
import Coctail from './Coctail';
import Loading from './Loading';
import NotFound from './NotFound';
import FilterButtons from './FilterButtons';
import Button from './Button';

const CocktailGridContainer = () => {
  const { coctails, loading, fetchCoctails } = useContext(CoctailContext);
  const [visible, setVisible] = useState(10);

  useEffect(() => {
    fetchCoctails('/filter.php?c=Ordinary_Drink');
    // eslint-disable-next-line
  }, []);

  if (!coctails || coctails.length === 0 || coctails === 'no data found') {
    return <NotFound />;
  }

  return (
    <>
      <FilterButtons coctailsLength={coctails.length} />
      <div className="relative mb-8 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
        {loading && <Loading />}
        {coctails.slice(0, visible).map((coctail) => (
          <Coctail key={coctail.idDrink} coctail={coctail} />
        ))}
      </div>
      {coctails.length > visible && (
        <div className="w-full flex justify-center">
          <Button
            onClick={() => setVisible((prevValue) => prevValue + 10)}
            btnText="MORE"
          />
        </div>
      )}
    </>
  );
};
export default CocktailGridContainer;
