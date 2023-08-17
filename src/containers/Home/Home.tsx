import { Link } from "react-router-dom";
import "./Home.scss";
import Team from "../../types/Team";

type HomeProps = {
  employees: Team[];
};

const Home = ({ employees }: HomeProps) => {
  return (
    <div className="home">
      <h1 className="home__header">Cool WorkPlace</h1>
      <div className="home__layout">
        {employees.map((employee) => (
          <Link
            to={`/profiles/${employee.id}`}
            key={employee.id}
            className="home__link"
          >
            <div className="home__employee">
              <h3 className="home__employee--name">{employee.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
