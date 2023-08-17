import { Link } from "react-router-dom";
import Team from "../../types/Team";
import "./EmployeeCard.scss";
import CounterCard from "../CounterCard/CounterCard";

type EmployeeCardProps = {
  employees: Team[];
};

const EmployeeCard = ({ employees }: EmployeeCardProps) => {
  return (
    <>
      {employees.map((employee) => (
        <div key={employee.id} className="employee-card">
          <Link to={`/profiles/${employee.id}`} className="employee-card__link">
            <h3 className="employee-card__name">{employee.name}</h3>
          </Link>
          <h3 className="employee-card__role">{employee.role}</h3>
          <CounterCard />
        </div>
      ))}
    </>
  );
};

export default EmployeeCard;
