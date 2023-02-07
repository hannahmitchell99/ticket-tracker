
import './App.scss';
import EmployeeCard from './components/EmployeeCard';
import team from './data/team';

const App= () => {
  return (
    <div className="App">
      <EmployeeCard name = {team[0].name} role = {team[0].role}/>
    </div>
  );
}

export default App;
