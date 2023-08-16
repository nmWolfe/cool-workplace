import { FormEvent, useState } from "react";
import "./App.scss";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import Filter from "./containers/Filter";
import team from "./data/team";
import Team from "./types/Team";

function App() {
  const [filter, setFilter] = useState({
    searchText: "",
    roleSelect: "",
  });

  const handleFilters = (teamArr: Team[]) => {
    const filteredArr = teamArr.filter((employee) => {
      // Return true if name match
      const nameFilter = employee.name
        .toLowerCase()
        .includes(filter.searchText.toLowerCase());
      // Return true if role match
      const roleFilter = employee.role
        .toLowerCase()
        .includes(filter.roleSelect.toLowerCase());

      if (filter.searchText && filter.roleSelect) {
        return nameFilter && roleFilter;
      } else if (filter.searchText) {
        return nameFilter;
      } else if (filter.roleSelect) {
        return roleFilter;
      } else {
        // Show all cards
        return true;
      }
    });
    return filteredArr;
  };

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const searchText = event.currentTarget.value;
    // This is setting the object as a copy, then updating the key you want to update. My head hurt with this
    setFilter({ ...filter, searchText: searchText });
  };

  const handleSelect = (event: FormEvent<HTMLSelectElement>) => {
    const roleSelect = event.currentTarget.value;
    setFilter({ ...filter, roleSelect: roleSelect });
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1>Ticket Tracker</h1>
      </header>
      <section className="filter">
        <Filter updateMessage={handleInput} updateRole={handleSelect} />
      </section>
      <section className="employees">
        <EmployeeCard employees={handleFilters(team)} />
      </section>
    </div>
  );
}

export default App;
