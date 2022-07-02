import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DrinkList from "./components/DrinkList";
import Drink from "./components/Drink";
import AllDrinks from "./components/AllDrinks";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/random/:id" element={<Drink />} />
          <Route path="/drinks/:ingredient" element={<DrinkList />} />
          <Route path="/drink/:id" element={<Drink />} />
          <Route path="/drinks/all" element={<AllDrinks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
