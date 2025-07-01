import { createContext, useState, useEffect } from 'react';
import { baseURL } from '../utils/utils';

export const CoctailContext = createContext();

const CoctailProvider = ({ children }) => {
  const [coctails, setCoctails] = useState([]);
  const [drink, setDrink] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoctails = async (endpoint) => {
    setLoading(true);
    const response = await fetch(`${baseURL(endpoint)}`);
    const data = await response.json();
    setCoctails(data.drinks);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoctails('/filter.php?c=Ordinary_Drink');
  }, []);

  const fetchByID = async (endpoint) => {
    setLoading(true);
    const response = await fetch(`${baseURL(endpoint)}`);
    const data = await response.json();
    setDrink(data.drinks[0]);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <CoctailContext.Provider
      value={{ coctails, fetchCoctails, fetchByID, drink, loading }}>
      {children}
    </CoctailContext.Provider>
  );
};

export default CoctailProvider;
