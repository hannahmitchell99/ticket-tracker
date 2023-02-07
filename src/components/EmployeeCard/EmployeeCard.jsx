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
       <div className="employee-card__counter"><Counter/></div>
    </div>
    
  )
}

export default EmployeeCard