import { Link } from 'react-router-dom';
import { BiDrink } from 'react-icons/bi';
import { FaRandom } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="w-full py-6 bg-vividYellow drop-shadow-2xl">
      <div className="container mx-auto flex flex-row items-center justify-between h-full">
        <Link to={'/'} className="flex flex-row gap-2">
          <BiDrink className="text-2xl text-palePink" />
          <h1 className="text-xl">FANCY Coctails</h1>
        </Link>
        <Link to={'/random'} className="flex flex-row gap-2 items-center">
          <div className="flex gap-2 items-center">
            <FaRandom className="text-2xl text-palePink" />
            <span className="text-xl">Random</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
