import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useParams, useNavigate, Navigate} from 'react-router-dom';
import Button from 'react-bootstrap'

const Nav = () => {
    const navigate = useNavigate();
    const [randomDrink, setRandomDrink] = useState({})

    const handleRandomDrink = (e) => {
        e.preventDefault();
        console.log(randomDrink.idDrink);
        navigate(`/random/${randomDrink.idDrink}`);
    }

    const handleHome = (e) => {
        e.preventDefault();
        navigate('/')
    }

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
        <div className='nav' style={{justifyContent: 'space-between'}}>
                    <h2 onClick={handleHome}>Next <br /> <span className='textColor'>Drink</span> </h2>
                    <div>
                        <button onClick={handleRandomDrink} className='randomButton'>Random Drink</button>
                        <button className='randomButton'>See All Cocktails</button>
                    </div>
        </div>
    )
}

export default Nav;