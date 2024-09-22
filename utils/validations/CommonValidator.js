import { Validate, ValidateAll } from "./Validation";

// validate the whole form
export const isValidForm = (formDetails, validationRule, validState) => {
    const validation = ValidateAll(formDetails, validationRule);
    validState = validation;
    return validState;
}

// validate form fields
export const validate = (key, object, validationRule, validState) => {
    const validation = Validate(object, validationRule, key);
    const newErr = { ...validState.error };
    if (!validation.isValid) {

        newErr[key] = validation.error[key];
        validState = {
            isValid: false,
            error: newErr
        };
    } else {
        delete newErr[key]
        validState = {
            isValid: true,
            error: newErr
        };
    }
    return validState;
}
