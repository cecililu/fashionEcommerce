import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Components/common/Header';
import {
  BrowserRouter,
  
} from "react-router-dom";
function App() {
  return (

    <div className="App">
      <BrowserRouter>
         <Header/>
      </BrowserRouter>
    </div>
  );
}

export default App;
