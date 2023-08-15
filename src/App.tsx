import { useState } from "react";
import "./App.scss";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import team from "./data/team";
import Team from "./types/Team";

function App() {
  const handleFilter = (team: Team[], searchText: string) => {
    const filtered = team.filter((employee) => {
      return employee.name.toLowerCase().includes(searchText.toLowerCase());
    });
    return filtered;
  };
  const [message, setMessage] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1>Ticket Tracker</h1>
      </header>
      <section className="filter">
        <label htmlFor="employee">Search by Employee</label>
        <br />
        <input
          type="text"
          id="message"
          onChange={handleChange}
          value={message}
        />
      </section>
      <section className="employees">
        <EmployeeCard employees={handleFilter(team, message)} />
      </section>
    </div>
  );
}

export default App;
