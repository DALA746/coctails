import React, { createContext, useState, useEffect } from 'react';
import { baseURL } from '../utils/utils';

export const CoctailContext = createContext();

const CoctailProvider = ({ children }) => {
  const [coctails, setCoctails] = useState([]);
  const [drink, setDrink] = useState([]);

  const fetchCoctails = async (endpoint) => {
    const response = await fetch(`${baseURL(endpoint)}`);
    const data = await response.json();
    setCoctails(data.drinks);
  };

  useEffect(() => {
    fetchCoctails('/filter.php?c=Ordinary_Drink');
  }, []);

  const fetchByID = async (id) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();

    setDrink(data.drinks[0]);
  };

  return (
    <CoctailContext.Provider
      value={{ coctails, fetchCoctails, fetchByID, drink }}>
      {children}
    </CoctailContext.Provider>
  );
};

export default CoctailProvider;
