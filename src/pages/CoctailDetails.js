import { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CoctailContext } from '../context/CoctailContext';
import BeatLoader from 'react-spinners/BeatLoader';
import { SlArrowLeft } from 'react-icons/sl';
import { normalizeIngredientsAndMeasure } from '../utils/helpers';

const CoctailDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { drink, loading, fetchByID } = useContext(CoctailContext);
  const ingredients = normalizeIngredientsAndMeasure(drink);

  useEffect(() => {
    fetchByID(`/lookup.php?i=${id}`);
  }, [id, fetchByID]);

  if (!drink) {
    return (
      <section className="h-screen mt-3 flex justify-center items-center">
        Loading...
      </section>
    );
  }

  return (
    <main>
      <div
        onClick={() => navigate(-1)}
        className="bg-vividOrange w-full h-11 flex items-center justify-start pl-3">
        <SlArrowLeft className="text-2xl text-palePink" />
      </div>
      <section className="flex justify-center items-center md:h-screen">
        {loading ? (
          <div className="w-full mt-3 text-center flex justify-center items-center">
            <BeatLoader color="#01c6f5" />
          </div>
        ) : (
          <div className="flex flex-col gap-6 items-center justify-center max-w-[1024px] h-full md:flex-row">
            <div className="rounded-full overflow-hidden shadow-2xl w-[200px] h-[200px] md:w-[400px] md:h-[400px] ">
              <img
                className="w-full h-full object-cover"
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
              />
            </div>
            <div className="bg-secondary sm:w-[50%] text-center p-4 flex flex-col justify-center">
              <h1 className="text-3xl font-medium mb-2 mx-auto lg:mx-0">
                {drink.strDrink}
              </h1>
              <p className="mb-8 italic ">{drink.strAlcoholic}</p>
              <span className="font-bold uppercase">Ingredients: </span>
              <span className="border-2 border-palePink w-[200px] mb-4 mt-4 flex mx-auto"></span>
              <div className="flex flex-col">
                {ingredients.map((item) => {
                  return <p key={item}>{item}</p>;
                })}
              </div>
              <span className="border-2 border-palePink w-[200px] mb-4 mt-4 flex mx-auto"></span>
              <div className="flex flex-col justify-center items-center">
                <span className="font-bold uppercase">How to make:</span>{' '}
                <p className="text-center">
                  {drink.strInstructions ? drink.strInstructions : '-'}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default CoctailDetails;
