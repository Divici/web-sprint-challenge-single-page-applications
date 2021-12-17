import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import PizzaForm from './components/PizzaForm';
import Confirmation from './components/Confirmation';

const App = () => {
  return (
    <>

    <div className="container header">
      <h1>Lambda Eats</h1>
      <div className="nav">
        <a>Home</a>
        <a>Your Order</a>
      </div>
    </div>
      
    </>
  );
};
export default App;
