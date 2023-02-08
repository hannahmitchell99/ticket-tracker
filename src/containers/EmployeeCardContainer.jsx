import React from 'react'
import EmployeeCard from '../components/EmployeeCard/EmployeeCard'

import "./EmployeeCardContainer.scss"

const EmployeeCardContainer = (props) => {

  const {team} = props

    const employeesJSX = team.map((employee) => {
        return <EmployeeCard name = {employee.name} role = {employee.role} key = {employee.id}/>
    })

  return (
    <div className="employee-card-container">{employeesJSX}</div>
  )
}

export default EmployeeCardContainer







//if (team.name.includes(input)) {
  //     const employeesJSX = team.filter(member => member.includes(input)).team.map((employee) => {
  //       return (
  //         <EmployeeCard
  //           name={employee.name}
  //           role={employee.role}
  //           key={employee.id}
  //         />
  //       );
  //     });
  //     return <div className="employee-card-container">{employeesJSX}</div>;
  
  //   } else if (team.role === selected) {
  //     const employeesJSX = team.filter(member => member===selected).team.map((employee) => {
  //       return (
  //         <EmployeeCard
  //           name={employee.name}
  //           role={employee.role}
  //           key={employee.id}
  //         />
  //       );
  //     });
  //     return <div className="employee-card-container">{employeesJSX}</div>;
  
  //   } else {
  //     const employeesJSX = team.map((employee) => {
  //       return (
  //         <EmployeeCard
  //           name={employee.name}
  //           role={employee.role}
  //           key={employee.id}
  //         />
  //       );
  //     });
  //     return <div className="employee-card-container">{employeesJSX}</div>;
  //   }