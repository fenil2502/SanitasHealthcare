import React from "react";
const RadioButton = (props) => {
  return (
    <div className="signup-radio">
      <input
        type="radio"
        name={props.name}
        id={props.id}
        className="form-radio"
        value={props.value}
        onChange={(event) => props.handleChangeInRadioButtons(event)}
        checked={props.checked}
      />
    </div>
  );
};
export default RadioButton;
