import React from 'react';

export default function PizzaForm (props) {

    const onSubmit = evt => {
        evt.preventDefault();
        //submit();
    }

    return (
        <div className='container'>
            <h2>Pizza Form goes here</h2> {/* Delete later */}
            <form id='pizza-form' onSubmit={onSubmit}>

            </form>
        </div>
    )
}