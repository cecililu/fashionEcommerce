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
import { Sidebar } from './Components/Sidebar/Sidebar';
import { store } from './Components/utils/Store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <BrowserRouter>
        
          <Header/> 
          <Navigation/>
          </BrowserRouter>
           
        
    </div>
    </Provider>
  );
}

export default App;
