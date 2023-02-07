import React from 'react'
import EmployeeCard from '../components/EmployeeCard/EmployeeCard'
import team from '../data/team'
import "./EmployeeCardContainer.scss"

const EmployeeCardContainer = () => {

    const employeesJSX = team.map((employee) => {
        return <EmployeeCard name = {employee.name} role = {employee.role} key = {employee.id}/>
    })
  return (
    <div className="employee-card-container">{employeesJSX}</div>
  )
}

export default EmployeeCardContainer