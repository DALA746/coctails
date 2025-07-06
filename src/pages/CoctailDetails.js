/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CoctailContext } from '../context/CoctailContext';
import { SlArrowLeft } from 'react-icons/sl';
import DrinkDetails from '../components/DrinkDetails';
import Loading from '../components/Loading';
import NotFound from '../components/NotFound';

const CoctailDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { drink, loading, fetchByID } = useContext(CoctailContext);

  useEffect(() => {
    if (drink) {
      fetchByID(`/lookup.php?i=${id}`);
    }
  }, []);

  return (
    <main className="bg-secondary">
      <div
        onClick={() => navigate(-1)}
        className="bg-vividOrange w-full h-11 flex items-center justify-start pl-3">
        <SlArrowLeft className="text-2xl text-palePink" />
      </div>
      <section className="flex flex-col gap-4 justify-center items-center">
        {drink ? <DrinkDetails drink={drink} /> : <NotFound />}
        {loading && <Loading />}
      </section>
    </main>
  );
};

export default CoctailDetails;
