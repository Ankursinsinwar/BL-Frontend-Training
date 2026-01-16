import React from 'react';


export default class Counter_class extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  Increment = () => {
    this.setState(pre => {
      const increment = (pre.count % 2 === 0 && pre.count !== 0) ? 2 : 1;
      return { count: pre.count + increment };
    });
  };

  Decrement = () => {
    this.setState(pre => {
      const next = pre.count - 1;
      return { count: next >= 0 ? next : 0 };
    });
  };

  Reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;
    const message = count > 10 ? "High Value" : "Low Value";

    return (
      <div>
        {/* <h2>Smart Counter</h2> */}
        <h3>Class component using <em>this.state</em></h3>
        <div>Count: {count}</div>
        <br />
        <div>Message: {message}</div>
        <br />
        <button onClick={this.Increment}>Increment</button>
        <button onClick={this.Decrement}>Decrement</button>
        <button onClick={this.Reset}>Reset</button>
      </div>
    );
  }
}
