import React from "react";

function DatePicker(props) {
  return (
    <div className="flex items-center w-full">
      <input
        id="default"
        name={props.name}
        className={`custom-input date-pickers form-input rounded-none w-full shadow-red py-3 text-lg ${props.className} `}
        type="date"
        value={props.value}
        onChange={(e) => props.handleChange(e)}
        onBlur={props.onBlur ? (e) => props.onBlur(props.name) : null}
        disabled={props.isDisable ? true : false}
      />
    </div>
  );
}
export default DatePicker;
