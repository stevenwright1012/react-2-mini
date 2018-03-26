import React from 'react';

export default function ColorChanger(props) {
  return (
    <select className="dropDownContainer" 
    onChange={(e) => props.update(e.target.value)}
    disabled={props.allowEdit === 'false'}>
      <option value="black">Text: Black </option>
      <option value="red">Text: Red</option>
      <option value="Orange"> Text: Orange </option>
      <option value="Yellow"> Text: Yellow </option>
      <option value="green"> Text: Green </option>
      <option value="blue"> Text: Blue </option>
      <option value="Indigo"> Text: Indigo </option>
      <option value="Violet"> Text: Violet </option>
      <option value="Purple">Text: Purple</option>
      <option value="white">Text: White</option>
    </select>
  )
}