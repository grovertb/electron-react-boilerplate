import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Counter.css';

class Prueba extends Component {
  render() {
    const {
      increment,
      decrement,
      counter: { counter }
    } = this.props;

    return (
      <div>
        <Link to="/">
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
        <h1>Prueba</h1>
        <div className={`counter ${styles.counter}`} data-tid="counter">
          {counter}
        </div>
        <div className={styles.btnGroup}>
          <button
            className={styles.btn}
            data-tclass="btn"
            onClick={increment}
            type="button"
          >
            <i className="fa fa-plus" />
          </button>
          <button
            className={styles.btn}
            data-tclass="btn"
            onClick={decrement}
            type="button"
          >
            <i className="fa fa-minus" />
          </button>
        </div>
      </div>
    );
  }
}

export default Prueba;
