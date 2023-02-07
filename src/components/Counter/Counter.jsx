import React from 'react'
import Button from '../Button/Button'

const Counter = () => {
  return (
    <div>
        <h1>Tickets</h1>
        <Button style = "addition" text = "+"/>
        <Button style = "minus" text = "-"/>
    </div>
  )
}

export default Counter