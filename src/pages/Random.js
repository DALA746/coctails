import Button from '../components/Button';
import { useContext, useEffect } from 'react';
import { CoctailContext } from '../context/CoctailContext';
import DrinkDetails from '../components/DrinkDetails';
import Loading from '../components/Loading';

const RandomPage = () => {
  const { fetchRandomCoctail, drink, setDrink, loading } =
    useContext(CoctailContext);

  useEffect(() => {
    setDrink(null);
    // eslint-disable-next-line
  }, []);

  const handleClick = () => {
    fetchRandomCoctail('/random.php');
  };

  return (
    <main className="pt-4 bg-secondary md:pt-8">
      <div className="container mx-auto text-center">
        <h1 className="font-bold text-5xl text-palePink mb-8">
          Random Cocktail 🍹
        </h1>
        <p className="mb-10 text-2xl leading-10 text-palePink w-full">
          Feeling adventurous? Click the button below to discover a random
          cocktail recipe!
        </p>
        <Button btnText="Get Random Cocktail" onClick={handleClick} />
        <div className="relative min-h-screen">
          {drink && <DrinkDetails drink={drink} />}
          {loading && <Loading />}
        </div>
      </div>
    </main>
  );
};

export default RandomPage;
