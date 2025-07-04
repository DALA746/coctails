import Button from '../components/Button';
import { useContext, useEffect } from 'react';
import { CoctailContext } from '../context/CoctailContext';
import DrinkDetails from '../components/DrinkDetails';

const RandomPage = () => {
  const { fetchRandomCoctail, drink, setDrink } = useContext(CoctailContext);

  useEffect(() => {
    setDrink(null); // Reset drink state on component mount
    // eslint-disable-next-line
  }, []);

  return (
    <main className="py-4 bg-secondary md:py-16">
      <div className="container mx-auto">
        <h1 className="font-bold text-5xl text-palePink mb-8">
          Random Cocktail 🍹
        </h1>
        <p className="mb-10 text-2xl leading-10 text-palePink w-full max-w-[1000px]">
          Feeling adventurous? Click the button below to discover a random
          cocktail recipe!
        </p>
        <Button
          btnText="Get Random Cocktail"
          onClick={() => fetchRandomCoctail('/random.php')}
        />
        {drink && <DrinkDetails drink={drink} />}
      </div>
    </main>
  );
};

export default RandomPage;
