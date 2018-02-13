import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.startingValue || 0
    };
  }

  increment = event => {
    this.setState({
      count: this.state.count + this.props.interval
    });
  };

  decrement = event => {
    this.setState({
      count: this.state.count - this.props.interval
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

Counter.propTypes = {
  interval: PropTypes.number.isRequired,
  startingValue: PropTypes.number
}

export default Counter;
