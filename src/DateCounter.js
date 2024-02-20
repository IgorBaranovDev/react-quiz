import { useReducer, useState } from "react";

function reducer(state, action) {
  console.log("state:", state);
  console.log("actions:", action);
  if (action.type === "inc") return state + 1;
  if (action.type === "dec") return state - 1;
  if (action.type === "setCount") return action.payload;
}

function DateCounter() {
  const [count, dispach] = useReducer(reducer, 0);
  const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispach({ type: "dec" });
  };

  const inc = function () {
    dispach({ type: "inc" });
  };

  const defineCount = function (e) {
    dispach({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    setStep({ type: "defStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    // setCount(0);
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
