import React from 'react'
import Button from '../Button/Button'
import './Counter.scss'

const Counter = () => {
  return (
    <div className="counter">
        <h3 className = "counter__heading">Tickets</h3>
        <h4 className = "counter__display">0</h4>
        <div className = "counter__button-section">
            <Button style = "addition" text = "+"/>
            <Button style = "minus" text = "-"/>
        </div>
    </div>
  )
}

export default Counter