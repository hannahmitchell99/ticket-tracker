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


// const findFiltered = () => {
//   if (team.name.includes(input)) {
//     const returnArr = employeesJSX.filter(member => member.includes(input));
//     return <div className="employee-card-container">{returnArr}</div>;

//   } else if (team.role === selected) {
//     const returnArr = employeesJSX.filter(member => member===selected);
//     return <div className="employee-card-container">{returnArr}</div>;

//   } else {
//     return <div className="employee-card-container">{employeesJSX}</div>;
//   }
// };




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