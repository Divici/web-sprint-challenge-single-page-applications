import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';
import PizzaForm from './components/PizzaForm';
import Confirmation from './components/Confirmation';

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  onions: false,
  bacon: false,
  special: '',
}

const initialOrders = [];

const App = () => {

  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);

  const inputChange = (name, value) =>{
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const orderSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: !!formValues.pepperoni,
      sausage: !!formValues.sausage,
      onions: !!formValues.onions,
      bacon: !!formValues.bacon,
      special: formValues.special.trim(),
    }

    setOrders(orders.concat(newOrder));
    setFormValues(initialFormValues);
  }

  return (
    <>

    <div className="container header">
      <h1>Bloom Pizza</h1>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/pizza" id="order-pizza">Create Pizza</Link>
        <Link to="/confirmation">Past Orders</Link>
      </div>
    </div>
    <div>
      <img
        className='home-image'
        src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb
        -1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=c
        rop&w=1740&q=80'
        alt=''
      />
    </div>
      
    

    <Switch>
      <Route path="/pizza">
        <PizzaForm 
          values={formValues}
          change={inputChange}
          submit={orderSubmit}
        />
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
