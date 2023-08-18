import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Tickets from "./containers/Tickets/Tickets";
import Home from "./containers/Home/Home";
import Profiles from "./containers/Profiles/Profiles";
import ProfileInfo from "./containers/ProfileInfo/ProfileInfo";
import team from "./data/team";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home employees={team} />} />
          <Route path="/ticket-tracker" element={<Tickets />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route
            path="/profiles/:profileId"
            element={<ProfileInfo employees={team} />}
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
