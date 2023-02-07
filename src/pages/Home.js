import React, { useContext, useState } from 'react';
import { CoctailContext } from '../context/CoctailContext';
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
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto">
          <h1 className="font-bold text-7xl text-palePink mb-8">
            Our Coctails 🍹
          </h1>
          <p className="mb-8 max-w-[1024px] text-2xl leading-10 text-vividYellow">
            We have a variety of coctails in our sortiment. Choose between
            alcoholic or non alcoholic drinks. Make yourself comfortable and
            enjoy lovely evening in a great company with a coctail in your hand.
            Or maybe you're planning a party and need an inpiration for a drink
            of choice? Anyhow, you are welcome to browse our coctails and if you
            have any feedback reach out to us.{' '}
          </p>
          <FilterButtons />
          <div className="mb-8 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
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
