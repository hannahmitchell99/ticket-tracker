import "./App.scss";
import { useState } from "react";
import Nav from "./components/Nav/Nav";
import EmployeeCardContainer from "./containers/EmployeeCardContainer";
import team from "./data/team";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";

const App = () => {
  const [input, setInput] = useState(" ");
  const [selected, setSelected] = useState(0);

  const handleInput = (event) => {
    setInput(event.target.value);
    console.log(event.target.value);
  };

  const handleSelect = (event) => {
    setSelected(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <Nav handleInput={handleInput} handleSelect={handleSelect} />
      <h1 className="App__heading">Ticket Tracker</h1>
      <EmployeeCardContainer/>
    </div>
  );
};

export default App;
