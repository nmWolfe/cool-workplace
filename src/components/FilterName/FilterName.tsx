import "./FilterName.scss";

const FilterName = () => {
  return (
    <div>
      <label htmlFor="employee">Search by Employee</label>
      <br />
      <input type="text" id="employee" />
    </div>
  );
};

export default FilterName;
