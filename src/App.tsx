import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Components/common/Header';
import {
  BrowserRouter, Route, Routes,
} from "react-router-dom";

import { MainPage } from './Components/programs/MainPage';
import { CostumerCare } from './Components/programs/CostumerCare';
import { SignIn } from './Components/programs/SignIn';
import { SignUp } from './Components/programs/SignUp';
import { Navigation } from './Components/utils/Navigation';
function App() {
  return (

    <div className="App">
        <BrowserRouter>
          <Header/> 
                <Navigation/>
           
        </BrowserRouter>
           
        
    </div>
  );
}

export default App;
