import React from "react";
import ValidationText from "../../utils/validations/ValidationText";

function InputText(props) {
  // console.log("Input Text : ",props);
  return (
    <div className="w-full">
      {props.lableTitle ? (
        <>
          <label className='text-[#757575] big-bullet-points font-bold mb-5 inline-block mobile-14'>{props.lableTitle.fieldLabel}<span className="text-[#C00000]">*</span></label>
          <input
            className='w-full custom-input mt-5'
            type="text"
            name={props.lableTitle.name}
            value={props.lableTitle.value}
            onChange={(e) => props.handleChange(e, props.identity)}
            required
            onBlur={() => props.validateField(props.lableTitle.name)}
            disabled={props.disabled}
            autoComplete={props.lableTitle.autoComplete ? props.lableTitle.autoComplete : "on"}
            maxLength={props.maxLength}
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
          onChange={(e) => props.handleChange(e, props.identity)}
          disabled={props.disabled}
          onBlur={props.validateField ? () => props.validateField(props.name) : null}
          required
          maxLength={props.maxLength}
          autoComplete={props.autoComplete ? props.autoComplete : "off"}
        ></input>
      )}
    </div>
  );
}

export default InputText;
