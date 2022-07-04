import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [randomDrink, setRandomDrink] = useState({});

  // Navigates to Random Drink Details Page Using ID Stored in Random Drink State
  const handleRandomDrink = (e) => {
    e.preventDefault();
    navigate(`/random/${randomDrink.idDrink}`);
  };

  const handleHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleSeeAll = (e) => {
    e.preventDefault();
    navigate("/drinks/all");
  };

// Gets Random Cocktail From Database and Stores In State
  useEffect(() => {
    axios
      .get("https:/www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => {
        setRandomDrink(response.data.drinks[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="nav" style={{ justifyContent: "space-between" }}>
      <h2 onClick={handleHome}>
        Next <br /> <span className="textColor">Drink</span>{" "}
      </h2>
      <div>
        <button onClick={handleRandomDrink} className="randomButton">
          Random Drink
        </button>
        <button onClick={handleSeeAll} className="randomButton">
          See All Cocktails
        </button>
      </div>
    </div>
  );
};

export default Nav;
