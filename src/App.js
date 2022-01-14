import React from "react";
import CocktailList from './components/CocktailList';
import Product from './components/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  
  return (
    <div className="App">
      <CocktailList  />
    </div>
  );
}

export default App;
