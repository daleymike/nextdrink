import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Nav from "./Nav";

const Drink = (props) => {
  const { id } = useParams();
  const [drink, setDrink] = useState({});
  const navigate = useNavigate();

  const handleHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        setDrink(response.data.drinks[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="nav" style={{ justifyContent: "space-between" }}>
        <h2 onClick={handleHome}>
          Next <br /> <span className="textColor">Drink</span>{" "}
        </h2>
        <div>
          <button onClick={handleBack} className="randomButton">
            Back
          </button>
          <button className="randomButton">See All Cocktails</button>
        </div>
      </div>
      <h3>Enjoy Your Next Drink:</h3>
      <div className="image">
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      </div>
      <div style={{ marginLeft: "20px" }}>
        <p>
          Name: {drink.strDrink} ({drink.strAlcoholic})
        </p>
        <p>Ingredients:</p>
        <ul style={{ listStyle: "none" }}>
          <li>
            {drink.strIngredient1}{" "}
            <span style={{ textDecoration: "underline" }}>
              {drink.strMeasure1}
            </span>{" "}
          </li>
          <li>
            {drink.strIngredient2}{" "}
            <span style={{ textDecoration: "underline" }}>
              {drink.strMeasure2}
            </span>
          </li>
          <li>
            {drink.strIngredient3}{" "}
            <span style={{ textDecoration: "underline" }}>
              {drink.strMeasure3}
            </span>
          </li>
          <li>
            {drink.strIngredient4}{" "}
            <span style={{ textDecoration: "underline" }}>
              {drink.strMeasure4}
            </span>
          </li>
          <li>
            {drink.strIngredient5}{" "}
            <span style={{ textDecoration: "underline" }}>
              {drink.strMeasure5}
            </span>
          </li>
          <li>
            {drink.strIngredient6}{" "}
            <span style={{ textDecoration: "underline" }}>
              {drink.strMeasure6}
            </span>
          </li>
          <li>
            {drink.strIngredient7}{" "}
            <span style={{ textDecoration: "underline" }}>
              {drink.strMeasure7}
            </span>
          </li>
          <li>
            {drink.strIngredient8}{" "}
            <span style={{ textDecoration: "underline" }}>
              {drink.strMeasure8}
            </span>
          </li>
          <li>
            {drink.strIngredient9}{" "}
            <span style={{ textDecoration: "underline" }}>
              {drink.strMeasure9}
            </span>
          </li>
          <li>
            {drink.strIngredient10}{" "}
            <span style={{ textDecoration: "underline" }}>
              {drink.strMeasure10}
            </span>
          </li>
        </ul>
        <p>Glass: {drink.strGlass}</p>
        <p>Instructions: {drink.strInstructions}</p>
      </div>
    </div>
  );
};

export default Drink;
