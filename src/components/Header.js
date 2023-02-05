import React from 'react';
import { Link } from 'react-router-dom';
import { BiDrink } from 'react-icons/bi';

const Header = () => {
  return (
    <header className="w-full py-6 bg-vividYellow drop-shadow-2xl">
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* logo */}
        <Link to={'/'}>
          <BiDrink className="text-4xl text-palePink hover:scale-100" />
        </Link>
        <div className="flex gap-7">
          <h1 className="font-bold text-palePink">FANCY COCTAILS APP</h1>
          <h1 className="font-bold text-palePink">ABOUT</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
