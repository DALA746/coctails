import { useContext, useState } from 'react';
import { CoctailContext } from '../context/CoctailContext';
import Button from '../components/Button';
import FilterButtons from '../components/FilterButtons';
import BeatLoader from 'react-spinners/BeatLoader';
import CocktailGridContainer from '../components/CoctailGridContainer';

const Home = () => {
  const { coctails, loading } = useContext(CoctailContext);
  const [visible, setVisible] = useState(10);

  if (!coctails || coctails.length === 0 || coctails === 'no data found') {
    return (
      <div className="w-full text-center flex justify-center items-center h-[700px]">
        <p className="text-2xl text-palePink">
          No cocktails found. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <main className="py-4 bg-secondary md:py-16">
      <div className="container mx-auto">
        <h1 className="font-bold text-5xl text-palePink mb-8">
          Welcome to FANCY 🍹 Cocktails!
        </h1>
        <p className="mb-10 text-2xl leading-10 text-palePink w-full max-w-[1000px]">
          Looking for inspiration for your next cocktail party? You've come to
          the right place! Explore our curated collection of drink recipes –
          from classic cocktails to creative mocktails. Mix it up and impress
          your guests with drinks they'll love.
        </p>

        {loading ? (
          <div className="w-full text-center flex justify-center items-center h-[700px]">
            <BeatLoader color="#01c6f5" />
          </div>
        ) : (
          <>
            <FilterButtons coctailsLength={coctails.length} />
            <CocktailGridContainer coctails={coctails} visible={visible} />
            {coctails.length > visible && (
              <div className="w-full flex justify-center">
                <Button
                  onClick={() => setVisible((prevValue) => prevValue + 10)}
                  btnText="MORE"
                />
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default Home;
