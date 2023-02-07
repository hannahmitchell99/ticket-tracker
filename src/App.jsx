
import './App.scss';
import EmployeeCard from './components/EmployeeCard';
import EmployeeCardContainer from './containers/EmployeeCardContainer';
import team from './data/team';

const App= () => {
  return (
    <div className="App">
      <h1 className = "App__heading">Ticket Tracker</h1>
      <EmployeeCardContainer/>
    </div>
  );
}

export default App;
