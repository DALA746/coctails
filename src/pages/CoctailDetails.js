/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CoctailContext } from '../context/CoctailContext';
import BeatLoader from 'react-spinners/BeatLoader';
import { SlArrowLeft } from 'react-icons/sl';
import DrinkDetails from '../components/DrinkDetails'; // Assuming you have a DrinkDetails component

const CoctailDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { drink, loading, fetchByID } = useContext(CoctailContext);

  useEffect(() => {
    if (drink) {
      fetchByID(`/lookup.php?i=${id}`);
    }
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
          <DrinkDetails drink={drink} />
        )}
      </section>
    </main>
  );
};

export default CoctailDetails;
