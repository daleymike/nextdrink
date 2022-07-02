import React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const AllDrinks = () => {
  const [category, setCategory] = useState("Alcoholic");
  const [drinkList, setDrinkList] = useState([]);

  const handleCategory = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  }
  

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${category}`)
      .then((response) => {
        setDrinkList(response.data.drinks);
      })
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div>
      <Nav />
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h3>View All Drinks by Category:</h3>
      <select onChange={handleCategory} name="alcoholic" id="alcoholic">
        <option value="Alcoholic">Alcoholic</option>
        <option value="Non_Alcoholic">Non-Alcoholic</option>
      </select>
      </div>
      <br />
      <div className="container">
      {drinkList.map((drink) => 
        <p key={drink.idDrink} style={{textAlign: 'center', margin: 10}}>
           
            <Link to={`/drink/${drink.idDrink}`} className='drinkList' > <img style={{height: 200}} src={drink.strDrinkThumb} alt="img" /> <br />{drink.strDrink}</Link>
        </p>)}
        
      </div>
    </div>
  );
};

export default AllDrinks;
