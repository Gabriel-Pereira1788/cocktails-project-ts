import React from "react";
import Cocktail from "../../components/Cocktail";
import Loading from "../../components/Loading";
import Search from "../../components/Search";
import { useApiContext } from "../../contexts/ApiContext";

type Props = {};
const Home = (props: Props) => {
  const { drinks, loading } = useApiContext();

  return (
    <main>
      <Search />
      {loading ? (
        <Loading />
      ) : (
        <section className="section">
          <h2 className="section-title">
            {drinks ? "Cocktails" : "No Cocktails Matched Your Search Criteria"}
          </h2>
          <div className="cocktails-center">
            {drinks &&
              drinks.map((drink) => (
                <Cocktail key={drink.idDrink} {...drink} />
              ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default Home;
