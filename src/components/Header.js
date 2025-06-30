import { Link } from 'react-router-dom';
import { BiDrink } from 'react-icons/bi';

const Header = () => {
  return (
    <header className="w-full py-6 bg-vividYellow drop-shadow-2xl">
      <div className="container mx-auto flex flex-row items-center justify-start h-full">
        <Link to={'/'} className="flex flex-row gap-2">
          <BiDrink className="text-3xl text-palePink" />
          <h1 className="text-2xl">FANCY Coctails</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
