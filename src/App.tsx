import "./App.scss";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import team from "./data/team";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>Ticket Tracker</h1>
      </header>
      <div className="app__body">
        <EmployeeCard employees={team} />
      </div>
    </div>
  );
}

export default App;
