import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Nav from "./Nav";

const Dashboard = () => {
  return (
    <div>
      <Nav />
      <h3>Guide to Choosing Your Next Mixed Drink</h3>
      <br />
      <p style={{marginLeft: '20px'}}>Choose from the following base alcohols:</p>
      <br />
      <div className="container">
        <div>
        <button className="drinkType">Vodka</button>
        <button className="drinkType">Whiskey</button>
        <button className="drinkType">Tequila</button>
        <button className="drinkType">Gin</button>
        </div>
        <div>
        <button className="drinkType">Bourbon</button>
        <button className="drinkType">Rum</button>
        <button className="drinkType">Beer</button>
        <button className="drinkType">Wine</button>
        </div>
        
        
        
      </div>
    </div>
  );
};

export default Dashboard;
