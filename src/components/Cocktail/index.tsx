import React from "react";
import { Link } from "react-router-dom";
import { ICocktail } from "../../interfaces/ICocktail";

const Cocktail = ({
  idDrink,
  strDrinkThumb,
  strDrink,
  strCategory,
  strAlcoholic,
}: ICocktail) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={strDrinkThumb} alt={strDrink} />
      </div>
      <div className="cocktail-footer">
        <h3>{strDrink}</h3>
        <h4>{strCategory}</h4>
        <p>{strAlcoholic}</p>
        <Link to={`drink/${idDrink}`} className="btn btn-primary btn-details">
          details{" "}
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
