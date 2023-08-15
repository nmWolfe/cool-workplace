import { useState } from "react";
import "./CounterCard.scss";
import plus from "../../assets/images/plus.svg";
import minus from "../../assets/images/minus.svg";

const CounterCard = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="counter-card">
      <h4 className="counter-card__header">Tickets Completed</h4>
      {counter}
      <div className="counter-card__image-div">
        <img
          className="counter-card__image"
          src={minus}
          alt="minus"
          onClick={handleDecrement}
        />
        <img
          className="counter-card__image"
          src={plus}
          alt="plus"
          onClick={handleIncrement}
        />
      </div>
    </div>
  );
};

export default CounterCard;
