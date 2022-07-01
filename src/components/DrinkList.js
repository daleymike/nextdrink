import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Nav from "./Nav";

const DrinkList = (props) => {
  const { ingredient } = useParams();
  const [drinkList, setDrinkList] = useState([]);
  const navigate = useNavigate();
  


  const handleHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleDrink = (e) => {
    e.preventDefault();
    navigate(`/drink/${e.target.value}`)
  }

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => {
        setDrinkList(response.data.drinks);
      })
      .catch((err) => console.log(err));
  }, []);

 

  return (
    <div>
      <Nav />
      
      <h3>{ingredient}</h3>
    
      <p style={{marginLeft: '20px'}}>Click a Drink Below for More Details:</p>
      <div className="container">
        {drinkList.map((drink) => 
        <p key={drink.idDrink} style={{textAlign: 'center', margin: 10}}>
           
            <Link to={`/drink/${drink.idDrink}`} className='drinkList' > <img style={{height: 200}} src={drink.strDrinkThumb} alt="img" /> <br />{drink.strDrink}</Link>
        </p>)}
      </div>
      
    </div>
  );
};

export default DrinkList;
