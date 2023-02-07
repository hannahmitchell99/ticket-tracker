import React from 'react'
import "./EmployeeCard.scss"

const EmployeeCard = (props) => {

    const {name, role} = props;
  return (
    <div className = "employee-card">
       <h1 className = "employee-card__name">{name}</h1>
       <h1 className = "employee-card__role">{role}</h1>
       <div className="employee-card__counter">Counter</div>
    </div>
  )
}

export default EmployeeCard