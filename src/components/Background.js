import React from 'react';

export default function Background(props) {
  return (
    <select className="dropDownContainer" 
    onChange={(e) => props.update(e.target.value)}
    disabled={props.allowEdit === 'false'}>
      <option value="black">Background: Black </option>
      <option value="red">Background: Red</option>
      <option value="Orange"> Background: Orange </option>
      <option value="Yellow"> Background: Yellow </option>
      <option value="green"> Background: Green </option>
      <option value="blue"> Background: Blue </option>
      <option value="Indigo"> Background: Indigo </option>
      <option value="Violet"> Background: Violet </option>
      <option value="Purple">Background: Purple</option>
      <option value="white">Background: White</option>
    </select>
  )
}