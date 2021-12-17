import React from 'react';

export default function PizzaForm (props) {
    const { values, change, submit } = props;

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
            <h2>Pizza Form goes here</h2> {/* Delete later */}
            <form id='pizza-form' onSubmit={onSubmit}>
                <div>
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
            </form>
        </div>
    )
}