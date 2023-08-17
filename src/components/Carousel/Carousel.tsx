import { Link } from "react-router-dom";
import { useState } from "react";
import left from "../../assets/images/left.svg";
import right from "../../assets/images/right.svg";
import "./Carousel.scss";
import Team from "../../types/Team";

type CarouselProps = {
  employees: Team[];
};

const Carousel = ({ employees }: CarouselProps) => {
  const names: string[] = [];
  const ids: number[] = [];
  for (let i: number = 0; i < employees.length; i++) {
    names.push(employees[i].name);
    ids.push(employees[i].id);
  }

  const [counter, setCounter] = useState<number>(0);
  const handleIncrement = () => {
    if (counter === names.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(names.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="carousel">
      <button className="carousel__arrow" onClick={handleDecrement}>
        <img src={left} alt="left arrow" className="carousel__arrow--left" />
      </button>
      <Link to={`/profiles/${ids[counter]}`} className="carousel__link">
        <h2 className="carousel__name">{names[counter]}</h2>
      </Link>
      <button className="carousel__arrow" onClick={handleIncrement}>
        <img src={right} alt="right arrow" className="carousel__arrow--right" />
      </button>
    </div>
  );
};

export default Carousel;
