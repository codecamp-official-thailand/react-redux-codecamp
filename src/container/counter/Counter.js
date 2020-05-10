import React, { useState } from "react";
import { connect } from "react-redux"; // import ฟังชันท์ connect ที่เอาไว้ใช้เชื่อมระหว่าง react กับ redux
import CounterDisplay from "../../components/CounterDisplay/CounterDisplay";
import CounterPanel from "../../components/CounterPanel/CounterPanel";

function Counter() {

  const handleCounterChange = (action, value) => {
    switch (action) {
      case "increase":
        setCounter((counter) => counter + 1);
        break;
      case "decrease":
        setCounter((counter) => counter - 1);
        break;
      case "add":
        setCounter((counter) => counter + value);
        break;
      case "subtract":
        setCounter((counter) => counter - value);
        break;
    }
  };

  return (
    <div>
      <CounterDisplay counter={props.ctr} />
      <CounterPanel label="Increase" changed={() => handleCounterChange("increase")} />
      <CounterPanel label="Decrease" changed={() => handleCounterChange("decrease")} />
      <CounterPanel label="Add 5" changed={() => handleCounterChange("add", 5)} />
      <CounterPanel label="Subtract 5" changed={() => handleCounterChange("subtract", 5)} />
    </div>
  );
}

const mapStateToProps = state => {  // function นี้จะรับ state ใน store มาให้เราเรียก
  return {
    ctr: state.counter  // บอกฟังก์ชัน connect ให้แปลง counter (state ที่อยู่ใน Store) ให้เป็น props ที่ชื่อว่า ctr
  }
}

export default connect(mapStateToProps)(Counter);  
// !!!Advanced Information!!! - เป็น high order function ที่ return high order component
// connect เอา State ใน Store มาใส่ให้ component ใช้(ในรูปของ props)

//connect(mapstateToProps) จะ return ออกมาเป็น Component ที่มี props ให้ใช้(ที่มาจาก store)
