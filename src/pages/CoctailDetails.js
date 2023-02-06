import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CoctailContext } from '../context/CoctailContext';

const CoctailDetails = () => {
  const { id } = useParams();
  const { fetchByID, drink } = useContext(CoctailContext);
  //const [loading, setLoading] = useState(false);
  let ingredientsArray = [];
  let measureArray = [];

  let ingredientsAndMeasure = [];

  useEffect(() => {
    fetchByID(id);
  }, [id]);

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
  console.log(drink, 'drink');

  for (let i = 0; i < ingredientsArray.length; i++) {
    console.log(measureArray[i]);
    if (measureArray[i] !== undefined) {
      ingredientsAndMeasure.push(
        measureArray[i] + '\xa0' + ingredientsArray[i]
      );
    }
    //  ingredientsAndMeasure.push(ingredientsArray[i]);

    // ingredientsAndMeasure.push();
  }

  console.log(ingredientsAndMeasure);

  return (
    <>
      <section className="bg-red-400 flex justify-center items-center p-8 bg-background ">
        <div className="w-full flex flex-col lg:flex-row container mx-auto">
          <div className="lg:w-[50%] lg:h-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
            <img className="w-full h-full" src={drink.strDrinkThumb} alt="#" />
          </div>
          <div className="lg:w-[50%] text-center border-r border-gray-400 lg:border-l-0 lg:border-t  bg-white  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-center leading-normal">
            <h1 className="text-[26px] font-medium mb-2 mx-auto lg:mx-0 font-secondary">
              {drink.strDrink}
            </h1>
            <p className="mb-8 italic ">{drink.strAlcoholic}</p>
            <span className="font-bold uppercase">Ingredients: </span>
            <span className="border-1 border-palePink w-[200px] mb-4 mt-4 flex mx-auto"></span>
            <div className="flex flex-col">
              {ingredientsAndMeasure.map((item) => {
                return <p key={item}>{item}</p>;
              })}
            </div>
            <span className="border-1 border-palePink w-[200px] mb-4 mt-4 flex mx-auto"></span>
            <div className="flex flex-col justify-center items-center">
              <span className="font-bold uppercase">How to make:</span>{' '}
              <p className="text-center">
                {drink.strInstructions ? drink.strInstructions : '-'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-background bg-no-repeat bg-cover bg-center py-5 h-[80vh] flex items-center justify-center">
        {/* <h1 className="absolute top-[-34px] left-[45px] font-secondary text-5xl md:text-6xl bg-cyanBlue p-2 rounded origin-bottom -rotate-12">
            RECIPE
          </h1> 
     
        <div className=" container mx-auto relative flex flex-col lg:flex-row items-center bg-white rounded max-w-[1000px]  ">
      
          <div className="flex flex-1 justify-center items-center">
            <img className="w-full" src={drink.strDrinkThumb} alt="#" />
          </div>
      
          <div className="flex-1 text-center">
            <h1 className="text-[26px] font-medium mb-2 mx-auto lg:mx-0">
              {drink.strDrink}
            </h1>
            <p className="mb-8 italic ">{drink.strAlcoholic}</p>
            <span className="font-bold uppercase">Ingredients: </span>
            <span className="border-1 border-palePink w-[200px] mb-4 mt-4 flex mx-auto"></span>
            <div className="flex flex-col">
              {ingredientsAndMeasure.map((item) => {
                return <p key={item}>{item}</p>;
              })}
            </div>
            <span className="border-1 border-palePink w-[200px] mb-4 mt-4 flex mx-auto"></span>
            <div className="flex flex-col justify-center items-center">
              <span className="font-bold uppercase">How to make:</span>{' '}
              <p className="text-center">
                {drink.strInstructions ? drink.strInstructions : '-'}
              </p>
            </div>
          </div>
        </div>
      </section>*/}
    </>
  );
};

export default CoctailDetails;
