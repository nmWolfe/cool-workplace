import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Tickets from "./containers/Tickets/Tickets";
import Home from "./containers/Home/Home";
import Profiles from "./containers/Profiles/Profiles";
import ProfileInfo from "./containers/ProfileInfo/ProfileInfo";
import team from "./data/team";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/cool-workplace" element={<Home employees={team} />} />
          <Route path="/cool-workplace/ticket-tracker" element={<Tickets />} />
          <Route path="cool-workplace/profiles" element={<Profiles />} />
          <Route
            path="/profiles/:profileId"
            element={<ProfileInfo employees={team} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
