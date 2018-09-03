// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Counter.css'
import routes from '../constants/routes.json'

type Props = {
  increment: () => void,
  incrementIfOdd: () => void,
  incrementAsync: () => void,
  decrement: () => void,
  counter: number
}

export default class Counter extends Component<Props> {
  props: Props

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props

    return (
      <div>
        <div className={styles.backButton} data-tid='backButton'>
          <Link to={routes.HOME}>
            <i className='fa fa-arrow-left fa-3x' />
          </Link>
        </div>
        <div className={`counter ${styles.counter}`} data-tid='counter'>
          {counter}
        </div>
        <div className={styles.btnGroup}>
          <button
            className={styles.btn} data-tclass='btn' onClick={increment}
            type='button'>
            <i className='fa fa-plus' />
          </button>
          <button
            className={styles.btn} data-tclass='btn' onClick={decrement}
            type='button'>
            <i className='fa fa-minus' />
          </button>
          <button
            className={styles.btn} data-tclass='btn' onClick={incrementIfOdd}
            type='button'>
            odd
          </button>
          <button
            className={styles.btn} data-tclass='btn' onClick={() => incrementAsync()}
            type='button'>
            async
          </button>
        </div>
      </div>
    )
  }
}
