import './App.scss';
import Nav from './components/Nav/Nav';
import EmployeeCardContainer from './containers/EmployeeCardContainer';

const App = () => {
  return (
    <div className="App">
      <Nav/>
      <h1 className = "App__heading">Ticket Tracker</h1>
      <EmployeeCardContainer/>
    </div>
  );
}

export default App;
