interface Props {
  onSelect: (city: string) => void;
}

const DropDown = ({ onSelect }: Props) => {
  return (
    <menu className="w-60 text-xl dropdown-bottom menu p-2 mt-4 shadow border-[1px] rounded h-fit">
      <select onChange={(e) => onSelect(e.target.value)}>
        <option value="New York">New York</option>
        <option value="Atlanta">Atlanta</option>
        <option value="Austin">Austin</option>
        <option value="Baltimore">Baltimore</option>
        <option value="Boston">Boston</option>
        <option value="Chicago">Chicago</option>
        <option value="Dallas">Dallas</option>
        <option value="Denver">Denver</option>
        <option value="Honolulu">Honolulu</option>
        <option value="Houston">Houston</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="Miami">Miami</option>
        <option value="Nashville">Nashville</option>
        <option value="New Orleans">New Orleans</option>
        <option value="Philadelphia">Philadelphia</option>
        <option value="Phoenix">Phoenix</option>
        <option value="Portland, OR">Portland, OR</option>
        <option value="San Francisco">San Francisco</option>
        <option value="Seattle">Seattle</option>
        <option value="Washington DC">Washington DC</option>
      </select>
    </menu>
  );
};

export default DropDown;
