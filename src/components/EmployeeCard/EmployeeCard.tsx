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
          <h3 className="employee-card__name">{employee.name}</h3>
          <h3 className="employee-card__role">{employee.role}</h3>
          <CounterCard />
        </div>
      ))}
    </>
  );
};

export default EmployeeCard;
