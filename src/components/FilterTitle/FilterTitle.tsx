import { FormEventHandler } from "react";
import "./FilterTitle.scss";

type FilterTitleProps = {
  updateRole: FormEventHandler<HTMLSelectElement>;
};

const FilterTitle = ({ updateRole }: FilterTitleProps) => {
  return (
    <div className="filter-title">
      <label htmlFor="profession">Search by Job Title</label>
      <br />
      <select
        name="filter-title"
        id="profession"
        className="filter-title__select"
        onChange={updateRole}
      >
        <option value="">select</option>
        <option value="junior">Junior Software Dev</option>
        <option value="software">Software Developer</option>
        <option value="senior">Senior Software Dev</option>
        <option value="tester">Tester</option>
        <option value="hard">Hard Man</option>
      </select>
    </div>
  );
};

export default FilterTitle;
