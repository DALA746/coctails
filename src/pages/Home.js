import CocktailGridContainer from '../components/CoctailGridContainer';

const Home = () => {
  return (
    <main className="py-4 bg-secondary md:py-16">
      <div className="container mx-auto">
        <h1 className="font-bold text-5xl text-palePink mb-8">
          Welcome to FANCY 🍹 Cocktails!
        </h1>
        <p className="mb-10 text-2xl leading-10 text-palePink w-full max-w-[1000px]">
          Looking for inspiration for your next cocktail party? You've come to
          the right place! Explore our curated collection of drink recipes –
          from classic cocktails to creative mocktails. Mix it up and impress
          your guests with drinks they'll love.
        </p>
        <CocktailGridContainer />
      </div>
    </main>
  );
};

export default Home;
