import React from "react";
import "./App.css";

export interface PartySelectorProp {
  parties: string[];
  onChange: (newValue: string) => void;
}

export function PartySelector(props: PartySelectorProp) {
  const { parties, onChange } = props;
  const handlePartyChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(e.target.value);
  return (
    <div className="dropdown-container"  >
 <select
   className="dropdown"
      name="party-selector"
      id="party-selector"
      onChange={handlePartyChange}
    >
      {parties.map((party) => (
        <option value={party} key={party}>
          {party}
        </option>
      ))}
    </select>
    </div>
   
  );
}
