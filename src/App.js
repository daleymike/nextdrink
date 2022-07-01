import './App.css';
import React, {useState} from 'react'
import {BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Random from './components/Random';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Dashboard />}/>
          <Route path='/random/:id' element={<Random/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
