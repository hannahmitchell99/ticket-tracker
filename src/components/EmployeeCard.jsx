import React from 'react'
import "./EmployeeCard.scss"

const EmployeeCard = () => {
  return (
    <div className = "employee-card">
       <h1 className = "employee-card__name">Name</h1>
       <h1 className = "employee-card__role">Role</h1>
       <div className="employee-card__counter">Counter</div>
    </div>
  )
}

export default EmployeeCard