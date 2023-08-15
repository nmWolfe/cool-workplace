import "./App.scss";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import team from "./data/team";

function App() {
  return (
    <div className="app">
      <header>Ticket Tracker</header>
      <EmployeeCard employees={team} />
    </div>
  );
}

export default App;
