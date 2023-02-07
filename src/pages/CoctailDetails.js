/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CoctailContext } from '../context/CoctailContext';
import Button from '../components/Button';
import BeatLoader from 'react-spinners/BeatLoader';

const CoctailDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { drink, loading, fetchByID } = useContext(CoctailContext);
  let ingredientsArray = [];
  let measureArray = [];

  let ingredientsAndMeasure = [];

  useEffect(() => {
    fetchByID(`/lookup.php?i=${id}`);
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  if (!drink) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  for (var key in drink) {
    if (Object.prototype.hasOwnProperty.call(drink, key)) {
      let value = drink[key];
      if (key.includes('strIngredient')) {
        if (value !== null) {
          ingredientsArray.push(value);
        }
      }

      if (key.includes('strMeasure')) {
        if (value !== null) {
          measureArray.push(value);
        }
      }
    }
  }

  for (let i = 0; i < ingredientsArray.length; i++) {
    if (measureArray[i] !== undefined) {
      ingredientsAndMeasure.push(
        measureArray[i] + '\xa0' + ingredientsArray[i]
      );
    }
  }

  return (
    <>
      <section className="bg-background flex justify-center items-center p-8 h-[70vh]">
        {loading ? (
          <div className="w-full text-center flex justify-center items-center h-[70vh]">
            <BeatLoader color="#E12490" />
          </div>
        ) : (
          <div className="flex flex-col gap-6 items-center justify-center xl:h-[88vh]">
            <Button btnText={'Back'} onClick={goBack} />
            <div className="w-full flex flex-col lg:flex-row container mx-auto">
              <div className="lg:w-[50%] lg:h-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                <img
                  className="w-full h-full"
                  src={drink.strDrinkThumb}
                  alt="#"
                />
              </div>
              <div className="bg-secondary lg:w-[50%] text-center  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-center leading-normal">
                <h1 className="text-7xl font-medium mb-2 mx-auto lg:mx-0 font-secondary">
                  {drink.strDrink}
                </h1>
                <p className="mb-8 italic ">{drink.strAlcoholic}</p>
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
          </div>
        )}
      </section>
    </>
  );
};

export default CoctailDetails;
