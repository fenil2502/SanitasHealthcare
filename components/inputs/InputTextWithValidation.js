import React from "react";
import ValidationText from "../../utils/validations/ValidationText";

function InputTextWithValidation(props) {
  // console.log("Input Text : ",props);
  return (
    <div className="w-full">
      {props.lableTitle ? (
        <>
          <label className='text-[#757575] big-bullet-points font-bold'>{props.lableTitle.fieldLabel}<span className="text-[#C00000]">*</span></label>
          <input
            className='w-full custom-input mt-5'
            type="text"
            name={props.lableTitle.name}
            value={props.lableTitle.value}
            onChange={(e) => props.handleChange(e,props.identity)}
            required
            onBlur={(e) => props.validateField(props.identity)}
          ></input>
          <div>
            <ValidationText error={props.lableTitle.error} />
          </div>
        </>
      ) : (
        <input
          className="w-full custom-input"
          type="text"
          name={props.name}
          value={props.value}
          onChange={(e) => props.handleChange(e,props.identity)}
          onBlur={(e) => props.validateField(props.identity)}

          required
        ></input>
      )}
    </div>
  );
}

export default InputTextWithValidation;
