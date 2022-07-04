import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

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

// Getting Drink Info using ID Passed Through Params

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
        <div style={{ display: "flex" }}>

          {/* filtering through ingredients and amounts */}
          
          <div>
            
            {Object.keys(drink)
              .filter((x) => x.startsWith("strIngredient"))
              .map((e) => (
                <li style={{ marginLeft: 50 }}>{drink[e]} </li>
              ))}
          </div>
          <div>
            {Object.keys(drink)
              .filter((x) => x.startsWith("strMeasure"))
              .map((e) => (
                <li style={{ textDecoration: "underline", marginLeft: 20 }}>
                  {drink[e]}
                </li>
              ))}
          </div>
        </div>

        <p style={{ marginTop: 20 }}>Glass: {drink.strGlass}</p>
        <p>Instructions: {drink.strInstructions}</p>
      </div>
    </div>
  );
};

export default Drink;
