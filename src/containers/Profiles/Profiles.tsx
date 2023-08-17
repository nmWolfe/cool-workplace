import "./Profiles.scss";
import Carousel from "../../components/Carousel/Carousel";
import team from "../../data/team";

const Profiles = () => {
  return (
    <div className="profiles">
      <h1 className="profiles__header">Profiles</h1>
      <Carousel employees={team} />
    </div>
  );
};

export default Profiles;
