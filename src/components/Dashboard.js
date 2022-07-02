import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleDrinkList = (e) => {
    e.preventDefault();
    navigate(`/drinks/${e.target.value}`);
  };

  return (
    <div>
      <Nav />
      <h3>Guide to Choosing Your Next Mixed Drink</h3>
      <br />
      <p style={{ marginLeft: "20px" }}>
        Choose from the following base ingredients:
      </p>
      <br />
      <div className="container">
        <div>
          <button onClick={handleDrinkList} value="Vodka" className="drinkType">
            Vodka
          </button>
          <button
            onClick={handleDrinkList}
            value="Whiskey"
            className="drinkType"
          >
            Whiskey
          </button>
          <button
            onClick={handleDrinkList}
            value="Tequila"
            className="drinkType"
          >
            Tequila
          </button>
          <button onClick={handleDrinkList} value="Gin" className="drinkType">
            Gin
          </button>
          <br />
          <button
            onClick={handleDrinkList}
            value="Bourbon"
            className="drinkType"
          >
            Bourbon
          </button>
          <button onClick={handleDrinkList} value="Rum" className="drinkType">
            Rum
          </button>
          <button onClick={handleDrinkList} value="Beer" className="drinkType">
            Beer
          </button>
          <button onClick={handleDrinkList} value="Wine" className="drinkType">
            Wine
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
