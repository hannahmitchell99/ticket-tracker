import React from 'react'
import './Button.scss'

const Button = (props) => {
    const {style, text, handleClick} = props;
  return (
     <button onClick={handleClick} className={style}>{text}</button>
  )
}

export default Button