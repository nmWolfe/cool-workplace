import { useParams } from "react-router-dom";
import Team from "../../types/Team";
import "./ProfileInfo.scss";

type ProfileInfoProps = {
  employees: Team[];
};

const ProfileInfo = ({ employees }: ProfileInfoProps) => {
  const { profileId } = useParams();
  const employee = employees.find(
    (employee) => employee.id === Number(profileId)
  );
  if (!employee) {
    return <p>This employee does not work here.. YET</p>;
  }

  return (
    <section className="profile-info">
      <div className="profile-info__content">
        <h1 className="profile-info__name">{employee.name}</h1>
        <h2 className="profile-info__role">{employee.role}</h2>
        <ul className="profile-info__profile">
          <li className="profile-info__profile--li">
            Experience: {employee.profile.experience}
          </li>
          <li className="profile-info__profile--li">
            Department: {employee.profile.department}
          </li>
          <li className="profile-info__profile--li">
            Tech Stack: {employee.profile.techstack.join(", ")}
          </li>
        </ul>
        <div>
          <img
            src={employee.profile.profilePicture}
            alt="profile image"
            className="profile-info__image"
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileInfo;
