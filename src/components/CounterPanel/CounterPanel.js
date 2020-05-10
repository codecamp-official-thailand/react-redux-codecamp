import React from "react";
import './CounterPanel.css'

function CounterPanel(props) {
  return (
      <div className="CounterControl" onClick={props.changed}>
        {props.label}
      </div>
  );
}

export default CounterPanel;
