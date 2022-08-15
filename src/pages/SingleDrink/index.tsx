import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { useFetch } from "../../hooks/useFetch";
import { ICocktail } from "../../interfaces/ICocktail";

const SingleDrink = () => {
  const { drinkId } = useParams();
  const [drink, setDrink] = useState<ICocktail | null>(null);
  const { loading, response } = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
  );

  const getIngredients = useCallback((drink: ICocktail): string[] => {
    return Object.entries(drink)
      .filter(([key, value]) => {
        return key.includes("strIngredient") && value;
      })
      .map(([_, value]) => value);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!loading && response?.drinks) {
      setDrink(response.drinks[0]);
    }
  }, [loading, response]);

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      {loading ? (
        <Loading />
      ) : (
        <>
          {drink &&
            (function () {
              const {
                strDrink,
                strDrinkThumb,
                strCategory,
                strAlcoholic,
                strGlass,
                strInstructions,
              } = drink;

              const ingredients = getIngredients(drink);
              return (
                <>
                  <h2 className="section-title">{strDrink}</h2>
                  <div className="drink">
                    <img src={strDrinkThumb} alt={strDrink} />
                    <div className="drink-info">
                      <p>
                        <span className="drink-data">name: </span>
                        {strDrink}
                      </p>
                      <p>
                        <span className="drink-data">category: </span>
                        {strCategory}
                      </p>
                      <p>
                        <span className="drink-data">info: </span>{" "}
                        {strAlcoholic}
                      </p>
                      <p>
                        <span className="drink-data">glass: </span> {strGlass}
                      </p>
                      <p>
                        <span className="drink-data">instructions:</span>
                        {strInstructions}
                      </p>
                      <p>
                        <span className="drink-data">ingredients:</span>
                        {ingredients.map((ingredient, index) => (
                          <span key={index}>{ingredient}</span>
                        ))}
                      </p>
                    </div>
                  </div>
                </>
              );
            })()}
        </>
      )}
    </section>
  );
};

export default SingleDrink;
