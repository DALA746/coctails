import React from 'react';
import CoctailImg from '../img/blue.webp';

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row lg:flex-row w-full text-center  max-h-[600px]">
      <div className="min-h-[150px] md:w-[50%] ">
        <img className="w-full h-full object-cover" src={CoctailImg} alt="#" />
      </div>
      <div className="bg-vividOrange p-12 flex flex-col justify-center gap-7 items-center w-full md:w-[50%]">
        <h1 className="font-bold text-7xl italic text-white text-center">
          Fancy Coctails
        </h1>
        <h2 className=" text-2xl text-white text-center">
          Your digital coctail book
        </h2>
        <span className="text-4xl">😎🍹☀️</span>
      </div>
    </div>
  );
};

export default Hero;
