import { useState } from 'react';

export default function Counter_function() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    const increment = (count % 2 === 0 && count !== 0) ? 2 : 1;
    setCount(prev => prev + increment);
  };

  const Decrement = () => {
    setCount(prev => (prev > 0 ? prev - 1 : 0));
  };

  const Reset = () => {
    setCount(0);
  };

  const message = count > 10 ? "High Value" : "Low Value";

  return (
    <div>
      {/* <h2>Smart Counter</h2> */}
      <h3>Functional component using <em>useState</em></h3>
      <div>Count: {count}</div>
      <br />
      <div>Message: {message}</div>
      <br />
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

