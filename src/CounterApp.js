import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ title, value }) => {

    const [counter, setCounter] = useState(value)

    const handleAdd = () => {
        //setCounter(counter + 1)
        setCounter( (c)=>c+1)
    }

    const handleSubstract = () => {
        //setCounter(counter + 1)
        setCounter( (c)=>c-1)
    }

    const handleReset = () => {
        //setCounter(counter + 1)
        setCounter( (c)=>c=value)
    }
    return (
        <>
            <h1>{title}</h1>
            <p>{counter}</p>

            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleAdd}>+1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    title: 'CounterApp'
}

export default CounterApp;