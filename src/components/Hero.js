import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row lg:flex-row h-[600px]">
      <div className="bg-hero bg-no-repeat bg-cover sm:w-[100%] lg:w-[50%]"></div>
      <div className="bg-palePink  w-full p-12 flex flex-col justify-center items-center lg:w-[50%]">
        <h1 className="font-bold text-7xl text-white text-center">
          Fancy Coctails
        </h1>
        <h2 className="font-semibold text-4xl text-white text-center mt-8 mb-8 ">
          Your digital coctail book
        </h2>
        <span className="text-4xl">😎🍹☀️</span>
      </div>
    </div>
  );
};

export default Hero;
