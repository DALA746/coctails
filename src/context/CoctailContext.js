import { createContext, useState } from 'react';
import { baseURL } from '../utils/utils';

export const CoctailContext = createContext();

const CoctailProvider = ({ children }) => {
  const [coctails, setCoctails] = useState([]);
  const [drink, setDrink] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(
    '/filter.php?c=Ordinary_Drink'
  );

  const fetchCoctails = async (endpoint) => {
    try {
      setLoading(true);
      setSelectedFilter(endpoint);
      const response = await fetch(`${baseURL(endpoint)}`);
      const data = await response.json();
      setCoctails(data.drinks);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching cocktails:', error);
      setLoading(false);
      return;
    }
  };

  const fetchByID = async (endpoint) => {
    try {
      setLoading(true);
      const response = await fetch(`${baseURL(endpoint)}`);
      const data = await response.json();
      setDrink(data.drinks[0]);
      setTimeout(() => setLoading(false), 1000);
    } catch (error) {
      console.error('Error fetching cocktail by ID:', error);
      setLoading(false);
      return;
    }
  };

  const fetchRandomCoctail = async (endpoint) => {
    try {
      setLoading(true);
      const response = await fetch(`${baseURL(endpoint)}`);
      const data = await response.json();
      setDrink(data.drinks[0]);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching random cocktail:', err);
      setLoading(false);
      return null;
    }
  };

  return (
    <CoctailContext.Provider
      value={{
        coctails,
        fetchCoctails,
        fetchByID,
        fetchRandomCoctail,
        setDrink,
        selectedFilter,
        drink,
        loading
      }}>
      {children}
    </CoctailContext.Provider>
  );
};

export default CoctailProvider;
