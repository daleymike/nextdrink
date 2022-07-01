import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Nav from "./Nav";

const AllDrinks = () => {
  const navigate = useNavigate();
  
  const handleDrinkList = (e) => {
    e.preventDefault();
    navigate(`/drinks/${e.target.value}`)

  }

  return (
    <div>
      <Nav />
      <h3>View All Drinks by Category:</h3>
      <br />
      <p style={{marginLeft: '20px'}}></p>
      <br />
      <div className="container">
        {/* add category list, link to a list of all in that category with links to drink details */}
        
      </div>
    </div>
  );
};

export default AllDrinks;
