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
        <Link to="/">Home</Link>
        <Link to="/pizza">Create Pizza</Link>
        <Link to="/confirmation">Past Orders</Link>
      </div>
    </div>

    <Switch>
      <Route path="/pizza">
        <PizzaForm />
      </Route>
      <Route path="/confirmation">
        <Confirmation />
      </Route>
      <Route path="/">
        {/* home */}
      </Route>
    </Switch>
      
    </>
  );
};
export default App;
