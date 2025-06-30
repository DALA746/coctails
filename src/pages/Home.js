import { useContext, useState } from 'react';
import { CoctailContext } from '../context/CoctailContext';
import Coctail from '../components/Coctail';
import Button from '../components/Button';
import FilterButtons from '../components/FilterButtons';
import BeatLoader from 'react-spinners/BeatLoader';

const Home = () => {
  const { coctails, loading } = useContext(CoctailContext);
  const [visible, setVisible] = useState(10);

  return (
    <main>
      <section className="py-4 bg-secondary md:py-16">
        <div className="container mx-auto">
          <h1 className="font-bold text-5xl text-palePink mb-8">
            Welcome to FANCY 🍹 Cocktails!
          </h1>
          <p className="mb-10 text-2xl leading-10 text-palePink">
            Looking for inspiration for your next cocktail party? You've come to
            the right place! Explore our curated collection of drink recipes –
            from classic cocktails to creative mocktails. Mix it up and impress
            your guests with drinks they'll love.
          </p>
          <FilterButtons />
          {loading ? (
            <div className="w-full text-center flex justify-center items-center h-[700px]">
              <BeatLoader color="#01c6f5" />
            </div>
          ) : (
            <>
              <div className="mb-8 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                {coctails.slice(0, visible).map((coctail) => {
                  return <Coctail key={coctail.idDrink} coctail={coctail} />;
                })}
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
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
