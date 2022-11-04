
import './App.css';
import { Header } from './Components/common/Header';
import {
  BrowserRouter, Route, Routes,
} from "react-router-dom";
import { Navigation } from './Components/utils/Navigation';
import { store } from './Components/utils/Store/store';
import { Provider } from 'react-redux';
// import { ProductDispay } from './Components/programs/ProductDispay';
import { Footer } from './Components/common/UI/Footer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <BrowserRouter>
           <Header/> 
           <Navigation/>
           
           <Footer/>
           </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
