import React, {useState, useEffect} from "react";
import axios from "axios";
import schema from './validation/formSchema';
import * as yup from 'yup';
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

const initialFormErrors = {
  name: '',
  size: '',
}

const initialOrders = [];
const initialDisabled = true;

const App = () => {

  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const validate = (name, value) =>{
    yup.reach(schema, name)
      .validate(value)
      .then(()=> setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) =>{
    validate(name, value);
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

    axios.post('https://reqres.in/api/orders', newOrder)
      .then(resp=>{
        setOrders([resp.data, ...orders]);
      })
      .catch(err=> console.error(err))
      .finally(()=>setFormValues(initialFormValues)) 
  }

  useEffect(()=>{
    schema.isValid(formValues)
      .then(valid => setDisabled(!valid))
  }, [formValues])

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
          disabled={disabled}
          errors={formErrors}
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
