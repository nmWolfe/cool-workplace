import { FormEventHandler } from "react";
import FilterName from "../../components/FilterName/FilterName";
import FilterTitle from "../../components/FilterTitle/FilterTitle";

type FilterProps = {
  updateMessage: FormEventHandler<HTMLInputElement>;
  updateRole: FormEventHandler<HTMLSelectElement>;
};

const Filter = ({ updateMessage, updateRole }: FilterProps) => {
  return (
    <div>
      <FilterName updateMessage={updateMessage} />
      <FilterTitle updateRole={updateRole} />
    </div>
  );
};
export default Filter;
