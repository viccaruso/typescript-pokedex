import React from 'react';

interface Props {
  options: Array<string>;
}

export default function Dropdown({ options }: Props) {
  return (
    <select>
      {options.map((option) => (
        <option>{option}</option>
      ))}
    </select>
  );
}
