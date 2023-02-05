import React, { useContext, useState } from 'react';
import { CoctailContext } from '../contexts/CoctailContext';
import Coctail from '../components/Coctail';
import Hero from '../components/Hero';
import Button from '../components/Button';
import FilterButtons from '../components/FilterButtons';

const Home = () => {
  // get coctails from coctails context
  const { coctails } = useContext(CoctailContext);
  // how many coctails to show
  const [visible, setVisible] = useState(10);

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <h1 className="font-bold text-7xl text-vividOrange  ">
            Our Coctails
          </h1>
          <p className="text-4xl mt-8 mb-8 text-palePink">
            Make a coctail and relax 🍹
          </p>
          <FilterButtons />
          <div className=" mb-4 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {coctails.slice(0, visible).map((coctail) => {
              return <Coctail key={coctail.idDrink} coctail={coctail} />;
            })}
          </div>
          <div className="w-full flex justify-center">
            <Button
              onClick={() => setVisible((prevValue) => prevValue + 10)}
              btnText="MORE"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
