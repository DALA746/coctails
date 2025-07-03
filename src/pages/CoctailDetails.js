/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CoctailContext } from '../context/CoctailContext';
import BeatLoader from 'react-spinners/BeatLoader';
import { SlArrowLeft } from 'react-icons/sl';

const CoctailDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { drink, loading, fetchByID } = useContext(CoctailContext);
  const ingredientsAndMeasure = [];

  useEffect(() => {
    fetchByID(`/lookup.php?i=${id}`);
  }, []);

  if (!drink || drink.length === 0) {
    return (
      <div className="w-full text-center flex justify-center items-center h-[700px]">
        <p className="text-2xl text-palePink">
          No drink found. Please try again later.
        </p>
      </div>
    );
  }

  for (let i = 1; i <= 15; i++) {
    const ingredient = drink[`strIngredient${i}`];
    const measure = drink[`strMeasure${i}`];
    if (ingredient) {
      ingredientsAndMeasure.push(
        measure ? `${measure}\xa0${ingredient}` : ingredient
      );
    }
  }

  return (
    <main>
      <div
        onClick={() => navigate(-1)}
        className="bg-vividOrange w-full h-11 flex items-center justify-start pl-3">
        <SlArrowLeft className="text-2xl text-palePink" />
      </div>
      <section className="flex flex-col m-5 gap-4 justify-center items-center">
        {loading ? (
          <div className="w-full h-screen mt-3 text-center flex justify-center items-center">
            <BeatLoader color="#01c6f5" />
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold mb-2 text-center">
                {drink.strDrink}
              </h1>
              <p className="italic">{drink.strAlcoholic}</p>
            </div>
            <div className="flex flex-col gap-6 items-center justify-center max-w-[1024px] md:flex-row">
              <div>
                <img
                  className="w-full h-full object-cover"
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                />
              </div>
              <div className="bg-secondary sm:w-[50%] text-center p-4 flex flex-col justify-center">
                <span className="font-bold uppercase">Ingredients: </span>
                <span className="border-2 border-palePink w-[200px] mb-4 mt-4 flex mx-auto"></span>
                <div className="flex flex-col">
                  {ingredientsAndMeasure.map((item) => {
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
          </>
        )}
      </section>
    </main>
  );
};

export default CoctailDetails;
