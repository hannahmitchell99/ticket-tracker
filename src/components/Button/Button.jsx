import React from 'react'
import './Button.scss'

const Button = (props) => {
    const {style, text} = props;
  return (
     <button className={style}>{text}</button>
  )
}

export default Button