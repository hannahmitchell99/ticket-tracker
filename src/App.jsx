import "./App.scss";
import { useState } from "react";
import Nav from "./components/Nav/Nav";
import EmployeeCardContainer from "./containers/EmployeeCardContainer";
import team from "./data/team";

const App = () => {
  const [employees, setEmployees] = useState(team)

  const handleInput = (event) => {
    const inputArray = team.filter((employee) => employee.name.toLowerCase().includes((event.target.value).toLowerCase()))
    setEmployees(inputArray);
  };

  const handleSelect = (event) => {
    const selectArray = team.filter((employee) => employee.role.includes(event.target.value))
    setEmployees(selectArray)
  };

  return (
    <div className="App">
      <Nav handleInput={handleInput} handleSelect={handleSelect} />
      <h1 className="App__heading">Ticket Tracker</h1>
      <EmployeeCardContainer team={employees} />
    </div>
  );
};

export default App;
