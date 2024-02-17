interface Props {
  onSelect: (city: string) => void;
}

const DropDown = ({ onSelect }: Props) => {
  return (
    <menu className="w-60 text-xl dropdown-bottom menu p-2 mt-5 shadow rounded h-fit">
      <select onChange={(e) => onSelect(e.target.value)}>
        <option value="New York">New York</option>
        <option value="Philadelphia">Philadelphia</option>
        <option value="Atlanta">Atlanta</option>
        <option value="Baltimore">Baltimore</option>
        <option value="Washington DC">Washington DC</option>
        <option value="Boston">Boston</option>
      </select>
    </menu>
  );
};

export default DropDown;
