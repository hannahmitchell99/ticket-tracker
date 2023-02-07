import './App.scss';
import EmployeeCardContainer from './containers/EmployeeCardContainer';

const App = () => {
  return (
    <div className="App">
      <h1 className = "App__heading">Ticket Tracker</h1>
      <EmployeeCardContainer/>
    </div>
  );
}

export default App;
