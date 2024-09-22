import React from "react"
const TextInput = (props) => {
    return (
        <input
            className={`outline-none appearance-none w-full custom-input ${props.className}`}
            placeholder={props.placeholder}
            type="text"
            name={props.name}
            value={props.value}
            onChange={(event) => props.handleChange(event, props.identity)}
            onBlur={props.onBlur ? (e) => props.onBlur(props.identity) : null}
            disabled={props.disabled === true ? true : false}
            autoComplete={props.autoComplete ? props.autoComplete : "off"}
        />
    );
}
export default TextInput;