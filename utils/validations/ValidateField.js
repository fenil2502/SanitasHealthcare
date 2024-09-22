import validator from 'validator';

export const required = (value) => {
  if (value === undefined || value === null) {
    return false;
  }
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return false;
  }
  if (typeof (value) !== 'string') {
    if (value === 0) {
      return false;
    }
  }
  return true;
};

export const email = (value) => {
  if (value === undefined || value === null || value.toString() === "") {
    return true;
  }
  if (!validator.isEmail(value)) {
    return false;
  }
  return true;
};

export const number = (value) => {
  const re = /^[0-9\b]+$/
  if (!re.test(value)) {
    return false;
  }
  else {
    return true;
  }
};

export const maxLength = (value, maxLen) => {
  // get the maxLength from component's props
  if ((value.toString().trim().length <= maxLen)) {
    // Return jsx
    return true;
  }
  return false;
};

export const minLength = (value, minLen) => {
  // get the maxLength from component's props
  if ((value.toString().trim().length >= minLen)) {
    // Return jsx
    return true;
  }
  return false;
};

export const compare = (value, compareValue) => {
  // get the maxLength from component's props
  if (!(value === compareValue)) {
    // Return jsx
    return false;
  }
  return true;
};

export const distinct = (value, compareValue) => {
  // get the maxLength from component's props
  if (value !== "") {
    if (value === compareValue) {
      // Return jsx
      return false;
    }
  }
  return true;
};

export const password = (value, props, components) => {
  // NOTE: Tricky place. The 'value' argument is always current component's value.
  // So in case we're 'changing' let's say 'password' component - we'll compare it's value with 'confirm' value.
  // But if we're changing 'confirm' component - the condition will always be true
  // If we need to always compare own values - replace 'value' with components.password[0].value and make some magic with error rendering.
  if (value !== components['confirm'][0].value) { // components['password'][0].value !== components['confirm'][0].value
    // 'confirm' - name of input
    // components['confirm'] - array of same-name components because of checkboxes and radios
    return <span className="error">Passwords are not equal.</span>
  }
};

export const isvalidPassword = (value) => {
  if (value !== undefined && value !== null && value.toString().trim().length) {
    const pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if (!pattern.test(value)) {
      return false;
    }
  }
  return true;
}

export const isFormatPassword = (value) => {
  if (value !== undefined && value !== null && value.toString().trim().length) {
    const pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
    if (!pattern.test(value)) {
      return false;
    }
    return true;
    // Minimum 6 alphanumeric characters. 
    // password contain at least one Capital letter. 
    // password contain at least one special character such as @#$%.
  }
}

export const isValidateURL = (value) => {
  const pattern = new RegExp('^((https?:)?\\/\\/)?' + // protocol
    '(?:\\S+(?::\\S*)?@)?' + // authentication
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locater
  if (!pattern.test(value)) {
    return false;
  } else {
    return true;
  }
}



