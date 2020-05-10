import React from 'react'
import "./CounterDisplay.css"

function CounterDisplay(props) {
    return (
        <div className="CounterOutput">
            {props.counter}
        </div>
    )
}

export default CounterDisplay
