import React, { useContext, useState } from 'react';
import { CoctailContext } from '../context/CoctailContext';
import Coctail from '../components/Coctail';
import Hero from '../components/Hero';
import Button from '../components/Button';
import FilterButtons from '../components/FilterButtons';
import BeatLoader from 'react-spinners/BeatLoader';

const Home = () => {
  // get coctails from coctails context
  const { coctails, loading } = useContext(CoctailContext);
  // how many coctails to show
  const [visible, setVisible] = useState(10);

  return (
    <div>
      <Hero />
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto">
          <h1 className="font-bold text-5xl text-palePink mb-8">
            Our 🍹 Coctails
          </h1>
          <p className="mb-8 max-w-[1024px] text-2xl leading-10 text-vividYellow">
            We have a variety of coctails in our sortiment. Choose between
            coctails, drinks, alcoholic or non alcoholic recipes.
          </p>
          <FilterButtons />
          {loading ? (
            <div className="w-full text-center flex justify-center items-center h-[700px]">
              <BeatLoader color="#E12490" />
            </div>
          ) : (
            <>
              <div className="mb-8 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                {coctails.slice(0, visible).map((coctail) => {
                  return <Coctail key={coctail.idDrink} coctail={coctail} />;
                })}
              </div>
              {coctails.length !== visible && (
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
    </div>
  );
};

export default Home;
