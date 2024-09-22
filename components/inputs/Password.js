import React from "react";
import ValidationText from "../../utils/validations/ValidationText";

function Password(props) {
  return (
    <div className="w-full">
      {props.passwordTitle ? (
        <>
          <label className="text-[#757575] big-bullet-points font-bold mobile-14 inline-block">
            {props.passwordTitle.password}
            <span className="text-[#C00000]">*</span>
          </label>
          <input
            className="w-full custom-input mt-5"
            type="password"
            name={props.passwordTitle.name}
            value={props.passwordTitle.value}
            onChange={(e) => props.handleChange(e)}
            onBlur={() => props.validateField(props.passwordTitle.name)}
            autoComplete="new-password"
          ></input>
          <div>
            <ValidationText error={props.passwordTitle.error} />
          </div>
        </>
      ) : (
        <input
          className="w-full custom-input"
          type="password"
          name={props.name}
          value={props.value}
          onChange={(e) => props.handleChange(e)}
          autoComplete="new-password"
        ></input>
      )}
    </div>
  );
}

export default Password;
