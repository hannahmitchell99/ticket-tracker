import React from 'react'
import Counter from '../Counter/Counter';
import "./EmployeeCard.scss"

const EmployeeCard = (props) => {

    const {name, role} = props;
  return (
    <div className = "employee-card">
      <div className = "employee-info">
       <h2 className = "employee-info__name">{name}</h2>
       <h2 className = "employee-info__role">{role}</h2>
       </div>
       <Counter/>
    </div>
    
  )
}

export default EmployeeCard