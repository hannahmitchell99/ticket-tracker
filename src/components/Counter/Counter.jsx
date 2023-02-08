import React, { useState } from 'react'
import Button from '../Button/Button'
import './Counter.scss'

const Counter = () => {

  const [count, setCount] = useState(0)

  const handleClick = (event) => {
    if (event.target.innerHTML === "+"){
      setCount(count+1)
    } else if (count > 0) {
      setCount(count-1)
    }
    
  }

  return (
    <div className="counter">
        <h3 className = "counter__heading">Tickets</h3>
        <h4 className = "counter__display">{count}</h4>
        <div className = "counter__button-section">
            <Button handleClick= {handleClick} style = "addition" text = "+"/>
            <Button handleClick= {handleClick} style = "minus" text = "-"/>
        </div>
    </div>
  )
}

export default Counter