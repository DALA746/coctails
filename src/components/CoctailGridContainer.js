import Coctail from './Coctail';
const CocktailGridContainer = ({ coctails, visible }) => {
  if (!coctails || coctails.length === 0) {
    return <div className="container mx-auto">No cocktails found</div>;
  }

  return (
    <div className="mb-8 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
      {coctails.slice(0, visible).map((coctail) => (
        <Coctail key={coctail.idDrink} coctail={coctail} />
      ))}
    </div>
  );
};
export default CocktailGridContainer;
