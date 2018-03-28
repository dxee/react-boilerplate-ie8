import React from 'react';
import PropTypes from 'prop-types';
import classes from './Counter.css';

export const Counter = (props) => (
  <div>
    <h2 className={classes.counterContainer}>
      Counter: <span className={classes.counterGreen}>{props.count}</span>
    </h2>
    <button className="btn btn-default" onClick={props.increment}>
      Increment
    </button>{' '}
    <button className="btn btn-default" onClick={() => props.doubleAsync(props.count)}>
      Double (Async)
    </button>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  doubleAsync: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
};

export default Counter;
