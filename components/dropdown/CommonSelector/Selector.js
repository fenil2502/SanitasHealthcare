import React from "react";
import PropTypes from "prop-types";
import { default as ReactSelect } from "react-select";

const customStyles = {
  control: (base, isFocused, isSelected) => ({
    ...base,
    // match with the menu
    borderRadius:"0",
    // Removes weird border around container
    boxShadow: null,
    // borderColor: "hsl(215deg 16% 47%)",
    // // borderColor: isFocused ? 'rgb(225 29 72)': isSelected ? 'rgb(225 29 72)' : undefined, 
    
  }),
  menu: (base, isSelected, isFocused) => ({
    ...base,
    // override border radius to match the box
    borderRadius: 0,
    // kill the gap
    marginTop: 0,
    
  }),
  option: (styles, { isFocused, isSelected, isUnchecked}) => ({
    ...styles,
            // background : isFocused ? 'rgba(255, 255, 255, 1)': isSelected ? 'rgba(255, 255, 255, 1)' : undefined,
            background : isUnchecked ? 'rgba(255, 255, 255, 1)': isSelected ? 'rgba(255, 255, 255, 1)' : undefined,
            color: isSelected ? 'rgba(0, 0, 0, 1)' : undefined,
            zIndex: 1
}),
  menuList: base => ({
    ...base,
    // kill the white space on first and last option
    padding: 0,

    
  })
}

const Selector = (props) => {
  if (props.allowSelectAll) {
    return (
      <span
        className="d-inline-block  custom-input"
        data-toggle="popover"
        data-trigger="focus"
        data-content="Please selecet account(s)"
      >
        <ReactSelect className="custom-checkbox-select"
          styles={customStyles}
          {...props}
          options={[props.allOption, ...props.options]}
          onChange={(selected) => {
            if (
              selected !== null &&
              selected.length > 0 &&
              selected[selected.length - 1].value === props.allOption.value
            ) {
              return props.onChange(props.options, props.drpIdentity);
            }
            return props.onChange(selected,props.drpIdentity);
          }}
          placeholder= 'Select'
        />
      </span>
    );
  }

  return (
    <span
      className="d-inline-block  custom-input"
      data-toggle="popover"
      data-trigger="focus"
      data-content="Please selecet account(s)"
    >
      <ReactSelect className="custom-checkbox-select"
        styles={customStyles}
        {...props}
        options={[props.singleSelect, ...props.options]}
        onChange={(selected) => {
          if (
            selected !== null &&
            selected.length > 0 &&
            selected[selected.length - 1].value === props.allOption.value
          ) {
            return props.onChange(props.options, props.drpIdentity);
          }
          return props.onChange(selected,props.drpIdentity);
        }}
        placeholder= 'Select'
      />
    </span>
  );
};

Selector.propTypes = {
  options: PropTypes.array,
  value: PropTypes.any,
  onChange: PropTypes.func,
  allowSelectAll: PropTypes.bool,
  allOption: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })
};

Selector.defaultProps = {
  allOption: {
    label: "Select all",
    value: "*"
  },
  singleSelect: {
    label: "Select",
    value: 0
  }
};

export default Selector;
