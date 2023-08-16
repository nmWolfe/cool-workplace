import { FormEventHandler } from "react";
import "./FilterName.scss";

type FilterNameProps = {
  updateMessage: FormEventHandler<HTMLInputElement>;
};

const FilterName = ({ updateMessage }: FilterNameProps) => {
  return (
    <div className="filter-name">
      <label htmlFor="nameSearch">Search by Employee</label>
      <br />
      <input
        className="filter-name__input"
        type="text"
        id="nameSearch"
        onChange={updateMessage}
      />
    </div>
  );
};

export default FilterName;
