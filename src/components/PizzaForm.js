import React from 'react';

export default function PizzaForm (props) {
    const { values, change, submit, disabled } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
      }

    return (
        <div className='container'>
            <h2>Customize your Pizza</h2>
            <form id='pizza-form' onSubmit={onSubmit}>
                <div className='name'>
                    <h3>Who is this for?</h3>
                    <label>Name: 
                        <input
                            id='name-input'
                            value={values.name}
                            onChange={onChange}
                            name='name'
                            type='text'
                        />
                    </label>
                </div>
                <div className='sizes'>
                    <h3>Choose a Size</h3>
                    <label>
                        <select name='size' id='size-dropdown' onChange={onChange}>
                            <option value=''>--Select--</option>
                            <option value='Small'>Small</option>
                            <option value='Medium'>Medium</option>
                            <option value='Large'>Large</option>    
                        </select> 
                    </label>
                </div>
                <div className='toppings'>
                    <h3>Pick your Toppings</h3>
                    <label> Pepperoni
                        <input
                            type='checkbox'
                            name='pepperoni'
                            checked={values.pepperoni}
                            onChange={onChange}
                        />
                    </label>
                    <label> Sausage
                        <input
                            type='checkbox'
                            name='sausage'
                            checked={values.sausage}
                            onChange={onChange}
                        />
                    </label>
                    <label> Onions
                        <input
                            type='checkbox'
                            name='onions'
                            checked={values.onions}
                            onChange={onChange}
                        />
                    </label>
                    <label> Bacon
                        <input
                            type='checkbox'
                            name='bacon'
                            checked={values.bacon}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div className='special'>
                    <h3>Special Instructions</h3>
                    <label> 
                        <input
                            id='special-text'
                            value={values.special}
                            onChange={onChange}
                            name='special'
                            type='text'
                            placeholder="Anything else you'd like to add?"
                        />
                    </label>
                </div>
                <div className='submit'>
                    <h3>Place Order</h3>
                    <button id='order-button' disabled={disabled}>Submit</button>
                </div>
            </form>
        </div>
    )
}